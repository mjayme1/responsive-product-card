# Responsive Product Card

A responsive landing page with a dynamic product card component built with HTML, CSS/SCSS, and JavaScript. Features include product cards display, add to cart functionality with counter, and a mobile and browser responsive design.

## Development Approach & Trade-offs

### 1. Research & Project Setup
- **Product Card Inspiration**:  I started by looking up product card designs on some e-commerce websites to understand common layouts, user experience patterns, and add to cart behaviours. This research influenced the concept, design direction, and color palette for the card and page.
- **Project Setup**: Added a clear folder structure (`css`, `js`, `assets`) to organize files efficiently.
- **HTML Structure**: Built the page using semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, etc.). Verified the document structure with HTML5 Outliner browser extension to ensure proper heading hierarchy and the content flow is logical.

### 2. SCSS Setup & Styling
- **SCSS Setup**: Defined SCSS variables for colors and typography, reusable mixins and a few utility classes to maintain consistency across the project.
- **Styling & Responsive Design**: Applied styles to HTML elements starting with a static product card, then implemented media queries to ensure the layout is fully responsive across different screen sizes and browsers.

### 3. JavaScript Functionality
- **Add to Cart Logic**: Implemented functionality to increment a cart counter at the top of the page when the "Add to Cart" button is clicked.
- **Dynamic Product Display**: Used an array of product objects to dynamically render multiple product cards.
- **Loading and Success State**: Added a loading spinner and success message to the "Add to Cart" button to provide visual feedback during the cart update process.

### 4. Optimization & Best Practices
- **Image Sizing**: Resized images and implemented responsive image techniques using `srcset` and `sizes` attributes to serve appropriately sized images for different screen resolutions, reducing load times.
- **Accessibility**: Used descriptive file names and `alt` attributes for images, plus `aria-label` attributes for interactive elements to practice accessibility compliance.
- **BEM Naming Convention**: Adopted the BEM (Block Element Modifier) naming convention for CSS classes (`header__logo`, `product-card__image`, `product-card__content`) to create a more modular and understandable styles.
- **Typography Scale**: Applied a type scale for headings (h1-h3) to maintain consistent visual hierarchy. Though some headings had font adjustments for styling purposes, their semantic structure was preserved and verified using the HTML5 Outliner.
- **Font Awesome CDN Trade-off**: Initially used Font Awesome via CDN for icons, but Lighthouse audits showed render-blocking resource warnings. Replaced with custom SVG icons to improve page performance.

## Technologies Used

- HTML5, SCSS, JavaScript
- NPM (Package Management)


---------


## Working with the Project

```bash
git clone <repository-url>
cd responsive-product-card
npm install
npm run sass  # Watches SCSS changes
```

Open `index.html` in your browser to view the project.

Make changes to SCSS file `css/styles.scss`. It will auto-compile to `css/styles.css`.

**Live URL**: https://responsive-product-card-mjayme.netlify.app/ 
