
import { Button } from '../design-system/src/components/Button/Button';
import '../design-system/src/tokens/colors.css';
import '../design-system/src/tokens/typography.css';

export default function Demo() {
    return (
        <main style={{ padding: '2rem', background: 'var(--color-background)', minHeight: '100vh' }}>
            <h1 style={{ fontFamily: 'var(--font-family-base)', color: 'var(--color-on-background)' }}>Design System Demo</h1>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Button label="Primary" variant="primary" />
                <Button label="Danger" variant="danger" />
                <Button label="Default" />
            </div>
        </main>
    );
}
