# Internee.pk Design System Quick Reference

## 🎨 Color Palette

### Primary Colors
```css
--color-primary: #43A724;        /* Main green */
--color-primary-hover: #3a8f1f;  /* Darker green for hover */
--color-primary-light: #4caf31;  /* Lighter green */
--color-primary-dark: #2d7016;   /* Dark green */
```

### Background Colors
```css
--color-bg-primary: #000000;     /* Pure black */
--color-bg-secondary: #1e2536;   /* Dark blue-gray */
--color-bg-card: #0f1419;        /* Card background */
--color-bg-card-hover: #1a1f2e;  /* Card hover state */
```

### Text Colors
```css
--color-text-primary: #ffffff;   /* White */
--color-text-secondary: #d1d5db; /* Light gray */
--color-text-muted: #9ca3af;     /* Muted gray */
--color-text-dark: #6b7280;      /* Dark gray */
```

### Border Colors
```css
--color-border: #2d3748;         /* Default border */
--color-border-light: #374151;   /* Lighter border */
```

### Accent Colors
```css
--color-accent-blue: #3b82f6;    /* Blue accent */
--color-accent-purple: #8b5cf6;  /* Purple accent */
--color-accent-pink: #ec4899;    /* Pink accent */
```

## 📝 Typography

### Font Families
```css
--font-primary: 'Inter', sans-serif;   /* Body text */
--font-secondary: 'Outfit', sans-serif; /* Headings */
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

## 📏 Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## 🔲 Border Radius
```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

## 🌑 Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 20px rgba(67, 167, 36, 0.3);
```

## ⏱️ Transitions
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

## 📚 Z-Index Layers
```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

## 🎯 Common Component Classes

### Buttons
```css
.btn                  /* Base button */
.btn-primary          /* Green filled button */
.btn-outline          /* Outlined button */
.btn-lg               /* Large button */
.btn-sm               /* Small button */
```

### Cards
```css
.card                 /* Base card with hover effect */
```

### Containers
```css
.container            /* Max-width 1280px, centered */
.container-fluid      /* Full width with padding */
```

### Sections
```css
.section              /* Standard section padding */
.section-sm           /* Small section padding */
.section-lg           /* Large section padding */
```

### Utilities
```css
.text-center          /* Center text */
.text-primary         /* Primary color text */
.text-gradient        /* Gradient text effect */
.bg-gradient          /* Gradient background */
.flex                 /* Flexbox */
.flex-center          /* Centered flex */
.grid                 /* Grid layout */
```

### Animations
```css
.animate-fade-in      /* Fade in animation */
.animate-slide-in-left    /* Slide from left */
.animate-slide-in-right   /* Slide from right */
.animate-pulse        /* Pulse animation */
.animate-float        /* Floating animation */
```

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## 💡 Usage Examples

### Primary Button
```jsx
<button className="btn btn-primary">
  Click Me
</button>
```

### Card with Hover
```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

### Centered Section
```jsx
<section className="section">
  <div className="container">
    <div className="text-center">
      <h2>Section Title</h2>
    </div>
  </div>
</section>
```

### Gradient Text
```jsx
<h1 className="text-gradient">
  Amazing Heading
</h1>
```

## 🎨 Color Usage Guidelines

1. **Primary Green**: Use for CTAs, active states, and key highlights
2. **Dark Backgrounds**: Main background should be pure black (#000000)
3. **Card Backgrounds**: Use --color-bg-card for elevated surfaces
4. **Text Hierarchy**: 
   - Primary text: #ffffff
   - Secondary text: #d1d5db
   - Muted text: #9ca3af
5. **Borders**: Use subtle borders (#2d3748) for separation
6. **Accent Colors**: Use sparingly for variety and emphasis

## ✨ Animation Guidelines

1. **Entrance Animations**: Use fade-in or slide-in for new content
2. **Hover Effects**: Subtle lift (translateY) and shadow changes
3. **Loading States**: Use pulse animation
4. **Decorative Elements**: Use float animation for background orbs
5. **Transitions**: Keep under 300ms for snappy feel

---

**Note**: All CSS variables are defined in `src/index.css`
