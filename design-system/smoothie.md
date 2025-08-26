# 🥤 Smoothie Design System

_This document is the conceptual and metaphorical guide for the Smoothie Design System. For concrete component APIs and usage, see the component docs (e.g., [BUTTON-DOCS.md](src/components/labs-button/BUTTON-DOCS.md) and [Color Tokens & Theme Docs](src/styles/COLORS-DOCS.md)), the [ROADMAP](ROADMAP.md), or the main [README](../README.md)._

A playful, modular approach to UI components—where every component is a smoothie, and every option is an ingredient!

---

## The Core Metaphor: Components vs Patterns

| Concept                | Example(s)                        | Description                                      |
|------------------------|-----------------------------------|--------------------------------------------------|
| **Component**              | Button, Icon, Input               | A configurable building block                    |
| *Smoothie Ingredient*      | Almond milk, banana, peanutbutter | A real ingredient you add to your smoothie       |
| **Pattern**                | Primary Button, Form with Icon    | A production-ready UI element snippet            |
| *Smoothie Menu Item*       | Blueberry Dream, Creamy Vanilla, Strawberry Banana | A signature smoothie on the menu |

---

## How This Maps to Storybook

The Smoothie metaphor directly maps to your Storybook sidebar structure:

## Tokens
| Storybook path              | Smoothie Metaphor Example |
|-----------------------------|--------------------------|
| Colors/Theme: Blueberry     | Flavor: Blueberry        |
| Colors/Theme: Strawberry    | Flavor: Strawberry       |
| Colors/Theme: Vanilla       | Flavor: Vanilla          |

## Components
| Storybook path      | Smoothie Metaphor Role |
|---------------------|------------------------|
| Button              | Base: Smoothie Mix     |
| Icon                | Base: Fruit            |

## Patterns
| Storybook path         | Smoothie Metaphor Example         |
|------------------------|-----------------------------------|
| Buttons/Primary        | Recipe: Blueberry Smoothie        |
| Buttons/Secondary      | Recipe: Strawberry Smoothie       |
| Buttons/With Left Icon | Recipe: Strawberry Sunrise        |

## Foundation
| Storybook path                | Smoothie Metaphor Role |
|-------------------------------|------------------------|
| Theme System/Interactive Demo | Tool: Blender          |

This mapping uses grouped tables and real smoothie examples, making it easy to cross-reference the Storybook sidebar with the Smoothie metaphor at a glance.

---

## Component Configuration Examples

### How to Use the "Smoothie Config Tables"

Each component can be configured like ordering a custom smoothie. Here are some examples:

### Basic Component Configuration: Button Smoothies

| Option Type   | Control      | Add         | Comment      | Reset All    | Custom |
|-------------- |------------- |-------------|--------------|--------------|--------|
| Single Select | Variant      | Primary     | Icon         | Destructive  | Choose |
| Single Select | Size         | Large       | Medium       | Medium       | Choose |
| Single Select | Icon Left    | Add         | Comment      | Reset        | Choose |
| Single Select | Icon Right   |             |              |              | Choose |
| Text          | Label        | Add         |              | Reset All    | Choose |

**How to read:** Each column is a button preset (a "Smoothie Recipe"), and each row is an ingredient you can customize.

### Advanced Component Configuration: Generic Smoothies

| Option Type   | Control        | Tropical           | Berry                | Red      | Power   | Custom |
|-------------- |---------------|--------------------|----------------------|------------|---------|--------|
| Single Select | Size           | Large              | Medium               | Medium     | Large   | Choose |
| Multi Select  | Fruit          | Banana, Pineapple  | Strawberry, Blueberry| Pineapple  | Banana  | Choose |
| Multi Select  | Veg            | Kale, Spinach      | Kale, Spinach        | Avocado    |         | Choose |
| Toggle        | Milk           | Almond             | Oat                  | Oat        | Oat     | Choose |
| Boolean       | Protein Powder | -                  | Yes                  | Yes        | Yes     | Choose |
| Single Select | Nut Butter     | Almond             | Cashew               | -          | Peanut  | Choose |

**How to read:** Each column is a smoothie preset, each row is an ingredient with its option type.

### Complex Components: Input Overlay (Composite Smoothie)

Some smoothies are made from other smoothies! Here's how a composite component works:

| Option Type   | Control         | Default Overlay | Confirm Overlay | Custom |
|-------------- |----------------|-----------------|----------------|--------|
| Group         | Input          |                 |                |        |
| Single Select | Placeholder    | "Type here..."  | "Enter value"  | Choose |
| Boolean       | Disabled       | No              | No             | Choose |
| Group         | Buttons        |                 |                |        |
| Single Select | Button 1 Label | Cancel          | Cancel         | Choose |
| Single Select | Button 1 Type  | Secondary       | Secondary      | Choose |
| Single Select | Button 2 Label | Confirm         | Confirm        | Choose |
| Single Select | Button 2 Type  | Primary         | Destructive    | Choose |

**How to read:** Each group (Input, Buttons) is a nested component, and you can mix different combinations to create complex UI patterns.

---

## Implementation Guide

### Option Types Reference

- **Single Select:** Size (Small, Medium, Large)
- **Multi Select:** Fruit (Banana, Blueberry, Pineapple, Strawberry)
- **Multi Select:** Veg (Avocado, Kale, Spinach)
- **Toggle:** Milk (Almond, Oat)
- **Boolean:** Protein Powder (Yes, No)
- **Single Select:** Nut Butter (Almond, Cashew, Peanut)

### Using Components in Your Code

- Each preset = a ready-to-use component variant (e.g., `<labs-button variant="tropical" ... />`)
- Each ingredient = a prop, attribute, or Storybook control
- Custom = full control panel for designers/devs to mix their own

### Storybook Documentation Strategy

- Show presets as "Smoothie Recipes" (quick-pick buttons)
- Show all options as "Ingredients" (controls panel)
- Let users build their own smoothie (component) and see live preview + code

---

## Variants & Themes: The Flavor System

Variants (flavors) and themes (light/dark) are part of the Smoothie system conceptually — but the runnable, copy‑pasteable implementation and Storybook wiring live in the Theming Guide in `src/styles/COLORS-DOCS.md`.

Keep this file as the conceptual mapping (what a "blueberry" or "strawberry" smoothie means). For concrete CSS examples, helper code, and Storybook decorators, see:

- `design-system/src/styles/COLORS-DOCS.md` → "Theming Guide — how to apply flavors + light/dark"

This keeps the metaphor and UX notes here while `COLORS-DOCS.md` remains the single source of truth for implementation details.

---

## Why the Smoothie Metaphor?

- **Fun & Memorable:** Makes configuration approachable
- **Modular:** Every option is an ingredient, every combo is valid
- **Scalable:** Easy to add new presets or ingredients
- **Universal:** Works for any component, not just buttons

## Next Steps

- Prototype Storybook UI with Smoothie metaphor
- Document mapping for other components (inputs, overlays, etc)
- Gather feedback from designers/devs

---

*Blend your perfect UI. One ingredient at a time.*
