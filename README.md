# Angular SCSS Pro: Best Practices & Mini Project
This project serves as a practical example and guide for implementing best practices in SCSS structuring within an Angular application. It demonstrates how to organize your stylesheets for improved maintainability, scalability, and collaboration, featuring a simple blog card component.

## Features
- Angular 19+ Project Setup: A modern Angular application.

- Structured SCSS: Clear separation of global and component-specific styles.

- SCSS Partials: Use of _variables.scss, _mixins.scss, _base.scss, _utilities.scss for modularity.

- Global Style Aggregation: How to import all global partials via src/styles/index.scss.

- Component Encapsulation: Styling components using their dedicated .component.scss files.

- SCSS Variables: Centralized definition of colors, spacing, and typography.

- SCSS Mixins: Reusable style blocks for consistent UI elements (e.g., buttons).

- BEM Naming Convention: Applied for component-level styling to enhance readability and maintainability.

- Basic Blog Card Component: A practical example demonstrating the styling principles.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js: Download Node.js (includes npm)

- npm: Node Package Manager (comes with Node.js)

- Angular CLI: Global installation of the Angular Command Line Interface.
  ```
  npm install -g @angular/cli
  ```
## Installation
1. Clone the repository:
  ```
  git clone https://github.com/sachinksamad1/UseAngularScssLikePro.git
  cd UseAngularScssLikePro
  ```

2. Install dependencies:
```
npm install
```
## Running the Application
To start the development server and view the application in your browser:
  ```
  ng serve -o
  ```
This command compiles the application and automatically opens it in your default browser (usually http://localhost:4200/).

## SCSS Structure Explained
The project emphasizes a robust and scalable SCSS architecture, separating concerns between global design tokens and component-specific styles.

### Global Styles (src/styles/)
All global styles and design tokens are housed within the src/styles/ directory. These files are typically prefixed with an underscore (_) to denote them as SCSS partials, meaning they are intended to be imported rather than compiled directly into CSS files.

- src/styles/_variables.scss: Defines global design tokens such as colors, font families, font sizes, spacing units, border radii, and box shadows. This ensures consistent styling throughout the application.

- src/styles/_mixins.scss: Contains reusable SCSS mixins. For example, a button-styles mixin is defined here to ensure all buttons follow a consistent visual pattern without duplicating code.

- src/styles/_base.scss: Holds global base styles for HTML elements (e.g., body, h1-h6, p, a). This includes CSS resets and default typography.

- src/styles/_utilities.scss: Provides single-purpose utility classes (e.g., .text-center, .d-flex, .m-auto) that can be applied directly in HTML for common styling adjustments.

- src/styles/index.scss: This acts as the main entry point for all global styles. It imports all the partials mentioned above in a logical order, ensuring variables and mixins are available before being used. This index.scss is then configured in angular.json as the application's primary stylesheet.

- Import order matters: Variables are imported first, then mixins, then base styles, and finally utilities.

### Component-Specific Styles (component.scss)
Each Angular component has its own dedicated .component.scss file (e.g., blog-card.component.scss).
- Encapsulation: Angular's view encapsulation ensures that styles defined within a component.scss file are scoped only to that component, preventing style leakage and conflicts.
- Importing Global Assets: Component styles can still leverage global variables and mixins by importing them explicitly:
```
// In blog-card.component.scss
@import 'src/styles/variables';
@import 'src/styles/mixins';

.blog-card {
  // ... component-specific styles using global variables and mixins
}
```
  This approach combines the benefits of encapsulation with the power of reusable design tokens.

###Key SCSS Features Used
- Variables ($): For defining and reusing values (e.g., $primary-color, $padding-md).

- Mixins (@mixin, @include): For creating reusable blocks of styles.

- Partials (_filename.scss, @import): For modularizing SCSS code and importing it into other files.

- Nesting (&): Used judiciously within component files to reflect HTML structure and apply BEM naming.

### Naming Convention
This project utilizes the BEM (Block-Element-Modifier) naming convention for component-specific styling.

- Block: .blog-card

- Elements: .blog-card__image-container, .blog-card__title, .blog-card__button

- Modifiers: (Not explicitly used in this mini-project, but would be like .blog-card--featured)

BEM helps create clear, reusable, and maintainable CSS by establishing a strict, predictable naming system.

## Project Structure (Relevant Files)
```
angular-scss-pro/
├── src/
│   ├── app/
│   │   ├── app.scss   // App-level layout using global utilities
│   │   ├── app.ts // Inline Template Component
│   │   ├── app.module.ts
│   │   └── blog-card/             // Our example component
│   │       ├── blog-card.scss // Component-specific styling (BEM, imports globals)
│   │       └── blog-card.component.ts // Inline Component
│   └── styles/                  // Global SCSS directory
│       ├── _base.scss           // HTML element resets/defaults
│       ├── _mixins.scss         // Reusable SCSS mixins
│       ├── _utilities.scss      // Helper classes
│       ├── _variables.scss      // Design tokens (colors, spacing, fonts)
│       └── index.scss           // Main global SCSS entry point (imports all partials)
├── angular.json                 // Angular project configuration (points to src/styles.scss)
├── package.json                 // Project dependencies and scripts
└── README.md                    // This file
````

## Contributing
Contributions are welcome! If you have suggestions for improvements or want to add more examples, please feel free to: 
- 1. Fork the repository.
- 2. Create a new branch (git checkout -b feature/your-feature).
- 3. Make your changes.
- 4. Commit your changes (git commit -m 'feat: Add new feature').
- 5. Push to the branch (git push origin feature/your-feature).
- 6. Open a Pull Request.
