# 🥤 Smoothie Design System

_This document is the conceptual and metaphorical guide for the Smoothie Design System. For concrete component APIs and usage, see the component docs (e.g., [BUTTON-DOCS.md](src/components/labs-button/BUTTON-DOCS.md) and [Color Tokens & Theme Docs](src/styles/COLORS-DOCS.md)), the [ROADMAP](ROADMAP.md), or the main [README](../README.md)._

A playful, modular approach to UI components—where every component is a smoothie, and every option is an ingredient!

---

## 🍍 Smoothie Metaphor Overview

- **Smoothie = Component Recipe**
  - Presets like "Tropical", "Berry", "Red", "Power", or "Custom" map to pre-configured component variants.
- **Ingredients = Options/Props**
  - Each row (Size, Fruit, Veg, Milk, Protein Powder, Nut Butter) is a configurable prop or control.
- **Option Types**
  - Single Select, Multi Select, Toggle, Boolean—just like Storybook controls or Figma props.
- **Custom = Full Control**
  - Users can mix and match any options to create their own "Custom Smoothie" (component config).

---




## 🧾 Example: Input Overlay Smoothie (Composite Component)

Some smoothies are made from other smoothies! Here’s how a composite component (like an input overlay with buttons) is documented:

### Input Overlay: Smoothie Config Table

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

**How to read:**
- Each column is an overlay preset (a "Smoothie Recipe").
- Each group (Input, Buttons) is a nested component/ingredient group.
- Each row is an option/prop for that nested component.
- "Custom" lets you mix any combination.

**Metaphor:**
- Composite smoothies are made by combining other smoothies (components) and their ingredients (options).

---

| Option Type   | Control        | Tropical           | Berry                | Red      | Power   | Custom |
|-------------- |---------------|--------------------|----------------------|------------|---------|--------|
| Single Select | Size           | Large              | Medium               | Medium     | Large   | Choose |
| Multi Select  | Fruit          | Banana, Pineapple  | Strawberry, Blueberry| Pineapple  | Banana  | Choose |
| Multi Select  | Veg            | Kale, Spinach      | Kale, Spinach        | Avocado    |         | Choose |
| Toggle        | Milk           | Almond             | Oat                  | Oat        | Oat     | Choose |
| Boolean       | Protein Powder | -                  | Yes                  | Yes        | Yes     | Choose |
| Single Select | Nut Butter     | Almond             | Cashew               | -          | Peanut  | Choose |

**How to read:**
- Each column is a smoothie preset (a "Smoothie Recipe").
- Each row is an ingredient (option/prop), with its Option Type: Size, Fruit, Veg, Milk, Protein Powder, Nut Butter.
- "Custom" lets you mix any combination.

---


### Buttons: Smoothie Config Table

| Option Type   | Control      | Add         | Comment      | Reset All    | Custom |
|-------------- |------------- |-------------|--------------|--------------|--------|
| Single Select | Variant      | Primary     | Icon         | Destructive  | Choose |
| Single Select | Size         | Large       | Medium       | Medium       | Choose |
| Single Select | Icon Left    | Add         | Comment      | Reset        | Choose |
| Single Select | Icon Right   |             |              |              | Choose |
| Text          | Label        | Add         |              | Reset All    | Choose |

**How to read:**
- Each column is a button preset (a "Smoothie Recipe").
- Each row is an ingredient (option/prop), with its Option Type: Variant, Size, Icon Left, Icon Right, Label.
- "Custom" lets you mix any combination.

**Option Types:**
- Single Select: Choose one from a list (Variant, Size, Icon Left, Icon Right)
- Text: Freeform label

**Variant mapping:**
- See the [Variants & Themes](#-variants--themes-the-smoothie-flavor-system) section for how each Variant maps to real color tokens and styles.
- Example: `Add` uses the Primary variant (see table for tokens), `Reset All` uses Destructive, etc.

**Metaphor:**
- Each button config is a smoothie recipe; each option is an ingredient.

---

## 🕹️ Option Types & Controls

- **Single Select:** Size (Small, Medium, Large)
- **Multi Select:** Fruit (Banana, Blueberry, Pineapple, Strawberry)
- **Multi Select:** Veg (Avocado, Kale, Spinach)
- **Toggle:** Milk (Almond, Oat)
- **Boolean:** Protein Powder (Yes, No)
- **Single Select:** Nut Butter (Almond, Cashew, Peanut)

---

## 🧩 Mapping to UI Components

- Each preset = a ready-to-use component variant (e.g., `<labs-button variant="tropical" ... />`)
- Each ingredient = a prop, attribute, or Storybook control
- Custom = full control panel for designers/devs to mix their own

---

## 📖 Storybook/Docs Usage

- Show presets as "Smoothie Recipes" (quick-pick buttons)
- Show all options as "Ingredients" (controls panel)
- Let users build their own smoothie (component) and see live preview + code

---

## 📝 Why Smoothie?

- **Fun & Memorable:** Makes configuration approachable
- **Modular:** Every option is an ingredient, every combo is valid
- **Scalable:** Easy to add new presets or ingredients
- **Universal:** Works for any component, not just buttons

---

## 🚀 Next Steps

- Prototype Storybook UI with Smoothie metaphor
- Document mapping for other components (inputs, overlays, etc)
- Gather feedback from designers/devs

---

*Blend your perfect UI. One ingredient at a time.*

---


## 🌈 Variants & Themes: The Smoothie Flavor System

Variants (flavors) and themes (light/dark) are part of the Smoothie system conceptually — but the runnable, copy‑pasteable implementation and Storybook wiring live in the Theming Guide in `src/styles/COLORS-DOCS.md`.

Keep this file as the conceptual mapping (what a "blueberry" or "strawberry" smoothie means). For concrete CSS examples, helper code, and Storybook decorators, see:

- `design-system/src/styles/COLORS-DOCS.md` → "Theming Guide — how to apply flavors + light/dark"

This keeps the metaphor and UX notes here while `COLORS-DOCS.md` remains the single source of truth for implementation details.

---
