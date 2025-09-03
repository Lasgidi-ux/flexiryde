# FlexiRyde Design System

This document outlines the design system for FlexiRyde, providing guidelines for consistent styling and component usage across the application.

## Colors

### Brand Colors

- **Gold**: `#fed801` - Primary brand color
- **Dark**: `#121212` - Secondary brand color
- **Champagne**: `#F5E8C7` - Accent color
- **Gold Dark**: `#e6c301` - Darker shade of gold
- **Gold Light**: `#fff3a0` - Lighter shade of gold
- **Dark Light**: `#1e1e1e` - Lighter shade of dark
- **Champagne Dark**: `#e6d9b2` - Darker shade of champagne
- **Text Light**: `#f5f5f5` - Light text color
- **Text Gray**: `#a3a3a3` - Gray text color

### Usage

Always use CSS variables for colors:

```css
var(--color-flexiryde-gold)
var(--color-flexiryde-dark)
var(--color-flexiryde-champagne)
```

## Typography

### Font Sizes

- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)
- **7xl**: 4.5rem (72px)
- **8xl**: 6rem (96px)

### Line Heights

- **none**: 1
- **tight**: 1.25
- **snug**: 1.375
- **normal**: 1.5
- **relaxed**: 1.625
- **loose**: 2

### Usage

Use the utility classes for consistent typography:

```jsx
<h1 className="text-4xl leading-tight">Heading</h1>
<p className="text-base leading-normal">Paragraph text</p>
```

## Spacing

### Spacing Scale

- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

### Usage

Use the utility classes for consistent spacing:

```jsx
<div className="space-4">Margin all around</div>
<div className="p-4">Padding all around</div>
<div className="gap-4">Gap between flex/grid items</div>
```

## Border Radius

### Radius Scale

- **none**: 0
- **sm**: 0.125rem (2px)
- **md**: 0.375rem (6px)
- **lg**: 0.625rem (10px)
- **xl**: 0.875rem (14px)
- **2xl**: 1.25rem (20px)
- **3xl**: 1.5rem (24px)
- **full**: 9999px (fully rounded)

### Usage

Use the utility classes for consistent border radius:

```jsx
<div className="rounded-lg">Standard rounded corners</div>
<div className="rounded-full">Fully rounded (circle/pill)</div>
```

## Shadows

### Shadow Scale

- **sm**: Subtle shadow
- **md**: Medium shadow
- **lg**: Large shadow
- **xl**: Extra large shadow
- **2xl**: Double extra large shadow
- **inner**: Inner shadow
- **gold-sm**: Subtle gold-colored shadow
- **gold-md**: Medium gold-colored shadow
- **gold-lg**: Large gold-colored shadow
- **gold-xl**: Extra large gold-colored shadow

### Usage

Use the utility classes for consistent shadows:

```jsx
<div className="shadow-md">Standard shadow</div>
<div className="shadow-gold-lg">Gold-colored shadow</div>
```

## Gradients

### Brand Gradients

- **flexiryde-gold-gradient**: Gold gradient
- **flexiryde-gold-text-gradient**: Gold text gradient
- **flexiryde-champagne-gradient**: Champagne gradient
- **flexiryde-dark-gradient**: Dark gradient

### Usage

Use the gradient classes directly:

```jsx
<div className="flexiryde-gold-gradient">Gold gradient background</div>
<span className="flexiryde-gold-text-gradient">Gold gradient text</span>
```

## Glass Effects

### Glass Styles

- **glass-effect**: Standard glass effect
- **glass-morphism**: Enhanced glass morphism effect
- **flexiryde-glass**: FlexiRyde branded glass effect

### Usage

Use the glass effect classes directly:

```jsx
<div className="glass-effect">Standard glass effect</div>
<div className="flexiryde-glass">FlexiRyde branded glass</div>
```

## Components

Always use the UI components from the `src/components/ui` directory for consistent styling and behavior. These components are built with the FlexiRyde design system in mind.

### Example

```jsx
import { Button } from "./ui/button";

<Button variant="luxury">Luxury Button</Button>
```

## Best Practices

1. Always use CSS variables for colors, spacing, and other design tokens
2. Use utility classes for consistent styling
3. Follow the component patterns in existing code
4. Maintain consistent spacing between elements
5. Use the appropriate shadow and border radius for the context
6. Use the FlexiRyde brand colors appropriately