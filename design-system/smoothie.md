
# 🥤 Smoothie Design System

_This document is the conceptual and metaphorical guide for the Smoothie Design System. For concrete component APIs and usage, see the component docs (e.g., [BUTTON-DOCS.md](src/components/labs-button/BUTTON-DOCS.md) and [Color Tokens & Theme Docs](src/styles/COLORS-DOCS.md)), the [ROADMAP](ROADMAP.md), or the main [README](../README.md)._

A playful, modular approach to UI components—where every component is a smoothie, and every option is an ingredient!

---

## 🍍 Smoothie Metaphor Overview

- **Smoothie = Component Recipe**
  - Presets like "Tropical", "Berry", "Green", "Power", or "Custom" map to pre-configured component variants.
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

| Option Type   | Control        | Tropical           | Berry                | Green      | Power   | Custom |
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

In the Smoothie Design System, **variants** are like smoothie flavors—each with its own color, mood, and style. **Themes** (Light/Dark) are the environment your smoothie is served in!

### Theme Naming
- **blueberry** = Purple theme (default)
- **strawberry** = Green theme (example)
- Add more themes as needed—just define a new set of tokens!

### How Variants/Themes Fit:
- **Variant** = The flavor (Primary, Secondary, Destructive, Icon)
- **Theme** = The environment (Light, Dark)
- **Tokens** = The ingredients (color variables)
- **Component** = The smoothie itself (e.g., Button, Input)

---


### 🟣 Primary Variant ("blueberry Smoothie")
| Theme (Flavor) | Foreground (text/icons)      | Background           | Border         |
|---------------|------------------------------|----------------------|---------------|
| blueberry Light | var(--color-on-primary)      | var(--color-primary) | none           |
| blueberry Dark  | var(--color-on-primary)      | var(--color-primary) | none           |
| strawberry Light   | var(--color-on-primary)      | var(--color-primary) | none           |
| strawberry Dark    | var(--color-on-primary)      | var(--color-primary) | none           |

---


### ⚪ Secondary Variant ("Outline Smoothie")
| Theme (Flavor) | Foreground (text/icons)      | Background           | Border                |
|---------------|------------------------------|----------------------|-----------------------|
| blueberry Light | var(--color-on-background)   | var(--color-surface) | 1px solid var(--color-primary) |
| blueberry Dark  | var(--color-on-background)   | var(--color-surface) | 1px solid var(--color-primary) |
| strawberry Light   | var(--color-on-background)   | var(--color-surface) | 1px solid var(--color-primary) |
| strawberry Dark    | var(--color-on-background)   | var(--color-surface) | 1px solid var(--color-primary) |

---


### 🔴 Destructive Variant ("Red Smoothie")
| Theme (Flavor) | Foreground (text/icons)      | Background           | Border                |
|---------------|------------------------------|----------------------|-----------------------|
| blueberry Light | var(--color-error)           | var(--color-surface) | 1px solid var(--color-error)   |
| blueberry Dark  | var(--color-on-error)        | var(--color-error)   | 1px solid var(--color-on-error) |
| strawberry Light   | var(--color-error)           | var(--color-surface) | 1px solid var(--color-error)   |
| strawberry Dark    | var(--color-on-error)        | var(--color-error)   | 1px solid var(--color-on-error) |

---


### ⚙️ Icon Variant ("Icon-Only Smoothie")
| Theme (Flavor) | Foreground (icon)            | Background           | Border         |
|---------------|------------------------------|----------------------|---------------|
| blueberry Light | var(--settings-icon-color)   | var(--color-surface) | none           |
| blueberry Dark  | var(--settings-icon-color)   | var(--color-surface) | none           |
| strawberry Light   | var(--settings-icon-color)   | var(--color-surface) | none           |
| strawberry Dark    | var(--settings-icon-color)   | var(--color-surface) | none           |

---

#### Notes:
- **Tokens used:**
  - `--color-primary`, `--color-on-primary`, `--color-surface`, `--color-on-background`, `--color-error`, `--color-on-error`, `--settings-icon-color`
- **Mapping:**
  - Each cell in the table is a real CSS custom property from your design tokens.
  - These tokens are used in the component’s CSS for background, color, and border.
- **Presets:**
  - Each variant is a preset “Smoothie Recipe” for a component (e.g., `<labs-button variant="primary" theme="dark">`)

---

## 🧩 How to Use in Components
- Set the `variant` and `theme` props/attributes on your component.
- The component uses the correct tokens for foreground, background, and border based on the table above.
- All tokens are customizable for custom “Smoothies.”

---


---


## 🟪 Sample blueberry Theme Token Set

Add this to your global CSS or theme file:

```css
.flavor-blueberry.theme-light {
  --color-primary: rgb(46, 43, 116); /* #2E2B74 */
  --color-primary-darker: rgb(25, 23, 80);
  --color-background: rgb(193, 193, 255); /* #C1C1FF */
  --color-surface: rgb(255, 255, 255);
  --color-on-primary: rgb(255, 255, 255);
  --color-on-background: rgb(22, 10, 56);
  --color-error: rgb(181, 0, 90);
  --color-on-error: rgb(255, 255, 255);
  --settings-icon-color: rgba(28, 27, 31, .25);
}
.flavor-blueberry.theme-dark {
  --color-primary: rgb(46, 43, 116); /* #2E2B74 */
  --color-primary-darker: rgb(25, 23, 80);
  --color-background: rgb(18, 18, 18);
  --color-surface: rgb(30, 30, 30);
  --color-on-primary: rgb(255, 255, 255);
  --color-on-background: rgb(193, 193, 255);
  --color-error: rgb(207, 102, 121);
  --color-on-error: rgb(0, 0, 0);
  --settings-icon-color: rgba(255, 255, 255, .25);
}
```

## 🟩 Sample strawberry Theme Token Set

Add this to your global CSS or theme file:

```css
.flavor-strawberry.theme-light {
  --color-primary: rgb(128, 8, 0); /* #800800 */
  --color-primary-darker: rgb(102, 6, 0);
  --color-background: rgb(254, 226, 225); /* #FEE2E1 */
  --color-surface: rgb(255, 255, 255);
  --color-on-primary: rgb(255, 255, 255);
  --color-on-background: rgb(34, 34, 34);
  --color-error: rgb(229, 57, 53);
  --color-on-error: rgb(255, 255, 255);
  --settings-icon-color: rgb(102, 6, 0);
}
.flavor-strawberry.theme-dark {
  --color-primary: rgb(128, 8, 0); /* #800800 */
  --color-primary-darker: rgb(102, 6, 0);
  --color-background: rgb(34, 34, 34);
  --color-surface: rgb(24, 24, 24);
  --color-on-primary: rgb(255, 255, 255);
  --color-on-background: rgb(255, 255, 255);
  --color-error: rgb(255, 111, 96);
  --color-on-error: rgb(34, 34, 34);
  --settings-icon-color: rgb(128, 8, 0);
}
```

---

## 🛠️ Storybook Flavor Toolbar Config

Add this to your `.storybook/preview.js`:

```js
export const globalTypes = {
  flavor: {
    name: 'Flavor',
    description: 'Smoothie flavor (theme token set)',
    defaultValue: 'blueberry',
    toolbar: {
      icon: 'arrowdown',
      items: [
        { value: 'blueberry', title: 'blueberry' },
        { value: 'strawberry', title: 'strawberry' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  theme: {
    name: 'Theme',
    description: 'UI theme (light/dark)',
    defaultValue: 'light',
    toolbar: {
      icon: 'sun',
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'dark', icon: 'moon', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const root = document.documentElement;
    root.classList.remove('flavor-blueberry', 'flavor-strawberry');
    root.classList.add(`flavor-${context.globals.flavor}`);
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(`theme-${context.globals.theme}`);
    return Story();
  },
];
```

---

**How to preview:**
- Use the Storybook toolbar to switch both "Flavor" and "Theme" (light/dark)
- Or use a URL like:
  `http://localhost:6006/?path=/story/patterns-buttons--icon-only&globals=theme:dark,flavor:strawberry`

*Every flavor, every theme—just blend the tokens you need!*
