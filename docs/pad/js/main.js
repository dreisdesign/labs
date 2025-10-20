/**
 * Pad App - Main Drawing Canvas Logic
 * Handles canvas initialization, drawing, theme changes, and clear functionality
 */

class PadDrawing {
    constructor() {
        this.canvas = document.getElementById('drawingCanvas');
        if (!this.canvas) {
            console.warn('Canvas element not found');
            return;
        }

        this.ctx = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.lastPoint = { x: 0, y: 0 };
        this.currentStroke = [];
        this.strokes = [];

        this.setupCanvas();
        this.setupEventListeners();

        // Restore drawing after a brief delay to ensure canvas is properly sized
        setTimeout(() => this.restoreDrawing(), 100);
    }

    setupCanvas() {
        // Set canvas size to match display size
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        // Configure drawing context
        this.updateDrawingStyle();

        // Listen for theme changes to update drawing color
        document.addEventListener('themeChanged', () => this.updateDrawingStyle());
    }

    updateDrawingStyle() {
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = getComputedStyle(document.documentElement)
            .getPropertyValue('--color-on-background').trim() || '#1B1C1F';
        this.ctx.lineWidth = 2;
    }

    redrawAllStrokes() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Redraw all strokes with current color
        const color = getComputedStyle(document.documentElement)
            .getPropertyValue('--color-on-background').trim() || '#1B1C1F';
        for (const stroke of this.strokes) {
            if (stroke.length < 1) continue;
            this.ctx.beginPath();
            this.ctx.strokeStyle = color;
            this.ctx.moveTo(stroke[0].x, stroke[0].y);
            for (let i = 1; i < stroke.length; i++) {
                const prev = stroke[i - 1];
                const pt = stroke[i];
                const mid = { x: (prev.x + pt.x) / 2, y: (prev.y + pt.y) / 2 };
                this.ctx.lineWidth = 2 + (pt.force * (8 - 2));
                this.ctx.quadraticCurveTo(prev.x, prev.y, mid.x, mid.y);
            }
            this.ctx.stroke();
        }
    }

    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        // Set actual size in memory (scaled up for high DPI)
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;

        // Scale the drawing context to match device pixel ratio
        this.ctx.scale(dpr, dpr);

        // Set display size (CSS pixels)
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';

        // Reconfigure context after resize
        this.updateDrawingStyle();
    }

    setupEventListeners() {
        // Touch events (includes Apple Pencil)
        this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Pointer events (fallback for other stylus/mouse)
        this.canvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
        this.canvas.addEventListener('pointermove', (e) => this.handlePointerMove(e));
        this.canvas.addEventListener('pointerup', (e) => this.handlePointerUp(e));

        // Prevent default behaviors
        this.canvas.addEventListener('touchstart', (e) => e.preventDefault());
        this.canvas.addEventListener('touchmove', (e) => e.preventDefault());

        // Listen for clear all event from footer button
        document.addEventListener('pad-clear-all', () => this.clearCanvas());
    }

    getPointFromEvent(e) {
        const rect = this.canvas.getBoundingClientRect();
        let clientX, clientY, force = 0.5, touchType = 'touch';

        if (e.touches && e.touches.length > 0) {
            // Touch event
            const touch = e.touches[0];
            clientX = touch.clientX;
            clientY = touch.clientY;
            force = touch.force || 0.5;
            touchType = touch.touchType || 'touch'; // 'stylus' for Apple Pencil
        } else {
            // Pointer event
            clientX = e.clientX;
            clientY = e.clientY;
            force = e.pressure || 0.5;
            touchType = e.pointerType || 'touch';
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top,
            force: force,
            touchType: touchType
        };
    }

    startDrawing(point) {
        this.isDrawing = true;
        this.lastPoint = point;
        this.currentStroke = [point];

        // Start the stroke
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
    }

    continueDrawing(point) {
        if (!this.isDrawing) return;

        this.currentStroke.push(point);

        // Calculate line width based on pressure (Apple Pencil support)
        const baseWidth = 2;
        const maxWidth = 8;
        const lineWidth = baseWidth + (point.force * (maxWidth - baseWidth));
        this.ctx.lineWidth = lineWidth;

        // Draw smooth curve to the new point
        if (this.currentStroke.length > 2) {
            // Use quadratic curves for smoother lines
            const prevPoint = this.currentStroke[this.currentStroke.length - 2];
            const midPoint = {
                x: (prevPoint.x + point.x) / 2,
                y: (prevPoint.y + point.y) / 2
            };

            this.ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midPoint.x, midPoint.y);
        } else {
            this.ctx.lineTo(point.x, point.y);
        }

        this.ctx.stroke();
        this.lastPoint = point;
    }

    endDrawing() {
        if (!this.isDrawing) return;

        this.isDrawing = false;
        if (this.currentStroke.length > 0) {
            this.strokes.push([...this.currentStroke]);
        }
        this.currentStroke = [];

        // Save the drawing after each stroke
        this.saveDrawing();
    }

    clearCanvas() {
        // Clear the entire canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Also clear saved drawing from localStorage
        localStorage.removeItem('padDrawing');
        this.strokes = [];
    }

    // Touch event handlers
    handleTouchStart(e) {
        const point = this.getPointFromEvent(e);
        this.startDrawing(point);
    }

    handleTouchMove(e) {
        const point = this.getPointFromEvent(e);
        this.continueDrawing(point);
    }

    handleTouchEnd(e) {
        this.endDrawing();
    }

    // Pointer event handlers (fallback)
    handlePointerDown(e) {
        // Only handle if no touch events are active
        if (e.pointerType !== 'touch' || !('ontouchstart' in window)) {
            const point = this.getPointFromEvent(e);
            this.startDrawing(point);
        }
    }

    handlePointerMove(e) {
        if (e.pointerType !== 'touch' || !('ontouchstart' in window)) {
            const point = this.getPointFromEvent(e);
            this.continueDrawing(point);
        }
    }

    handlePointerUp(e) {
        if (e.pointerType !== 'touch' || !('ontouchstart' in window)) {
            this.endDrawing();
        }
    }

    // Save and restore drawing functionality
    saveDrawing() {
        try {
            localStorage.setItem('padDrawing', JSON.stringify(this.strokes));
        } catch (e) {
            console.warn('Could not save drawing:', e);
        }
    }

    restoreDrawing() {
        try {
            const saved = localStorage.getItem('padDrawing');
            if (saved) {
                this.strokes = JSON.parse(saved);
                this.redrawAllStrokes();
            }
        } catch (e) {
            this.strokes = [];
            console.warn('Could not restore drawing:', e);
        }
    }
}

// Export for use in HTML
export function initializeApp() {
    const pad = new PadDrawing();

    // Redraw all strokes on theme change
    document.addEventListener('themeChanged', () => pad.redrawAllStrokes());

    // Handle flavor changes from settings card
    const footer = document.querySelector('labs-footer-with-settings');
    if (footer) {
        footer.addEventListener('flavor-changed', (e) => {
            const flavor = e.detail?.flavor;
            if (flavor) {
                localStorage.setItem('pad-flavor', flavor);
            }
            // Also save current theme
            const isDark = document.documentElement.classList.contains('theme-dark');
            localStorage.setItem('pad-theme', isDark ? 'dark' : 'light');
        });
    }

    // Watch for theme changes and persist to localStorage
    const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('theme-dark');
        const isLight = document.documentElement.classList.contains('theme-light');
        if (isDark || isLight) {
            localStorage.setItem('pad-theme', isDark ? 'dark' : 'light');
        }
        // Also watch for flavor changes
        const flavorClass = Array.from(document.documentElement.classList).find(c => c.startsWith('flavor-'));
        if (flavorClass) {
            const flavor = flavorClass.replace('flavor-', '');
            localStorage.setItem('pad-flavor', flavor);
        }
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
