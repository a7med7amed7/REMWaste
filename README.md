# REMWasteTask

A modern React + TypeScript web application for selecting skip sizes and managing waste permits, featuring a responsive UI, dark mode, and smooth user experience.

## Design Overview

### 1. **Component Structure**

- **Pages**
  - [`src/pages/Index.tsx`](src/pages/Index.tsx): Main entry page, orchestrates the skip selection flow, step indicator, and floating card.
  - [`src/pages/NotFound.tsx`](src/pages/NotFound.tsx): Handles 404 routes.

- **Core Components**
  - [`src/components/SkipSelector.tsx`](src/components/SkipSelector.tsx): Presents available skips for selection.
  - [`src/components/SkipCard.tsx`](src/components/SkipCard.tsx): Displays individual skip details, images, and features.
  - [`src/components/FloatingSelectedCard.tsx`](src/components/FloatingSelectedCard.tsx): Shows the currently selected skip in a floating card with actions.
  - [`src/components/StepIndicator.tsx`](src/components/StepIndicator.tsx): Visualizes the user's progress through the multi-step process.
  - [`src/components/ThemeToggle.tsx`](src/components/ThemeToggle.tsx): Allows toggling between light and dark themes.

- **UI Primitives**
  - [`src/components/ui/`](src/components/ui/): Contains reusable UI elements (e.g., `button`, `carousel`, `toast`, etc.) for consistent styling and interaction.

### 2. **State Management**

- Uses React's `useState` and custom hooks for local state.
- Example: [`useTheme`](src/hooks/useTheme.ts) manages theme state and persists user preference in `localStorage`.

### 3. **Styling & Theming**

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Custom Theme System**: 
  - Light/dark mode via the `dark` class on `<html>`, toggled by [`useTheme`](src/hooks/useTheme.ts).
  - CSS variables in [`src/index.css`](src/index.css) define color palettes for both modes.
  - Animations and transitions are defined in [`tailwind.config.ts`](tailwind.config.ts).

### 4. **User Experience**

- **Responsive Layout**: Uses Tailwind's responsive utilities for mobile and desktop.
- **Animated Transitions**: Smooth transitions for cards, modals, and step changes.
- **Accessibility**: Semantic HTML and ARIA attributes (e.g., for progress navigation).

### 5. **Carousel Integration**

- Custom carousel component ([`src/components/ui/carousel.tsx`](src/components/ui/carousel.tsx)) for image galleries in skip cards, supporting keyboard navigation and touch gestures.

### 6. **Utilities & Hooks**

- [`src/hooks/`](src/hooks/): Custom React hooks for theme, toast notifications, and mobile detection.
- [`src/lib/utils.ts`](src/lib/utils.ts): Utility functions for common logic.

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Run on localhost:8080**
   ```sh
   npm run dev
   ```
