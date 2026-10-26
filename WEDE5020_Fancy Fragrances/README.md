# Fancy Fragrances

**Module:** WEB DEVELOPMENT (INTRODUCTION) - WEDE5020  
**Part:** 3  
**Student name:** Reatlegile Kabasia  
**Student number:** ST10534314

## About the website

Fancy Fragrances is a small South African family fragrance and skincare business. The website gives customers a simple way to learn about the brand, browse the catalogue, contact the business, and find upcoming market events.

## Pages

- `home.html` - welcome page, featured products, reviews, and market preview
- `shop.html` - skincare catalogue and perfume launch notice
- `about.html` - the Fancy Fragrances family story
- `contact.html` - contact links and enquiry form
- `damaged-item.html` - damaged product report form
- `markets.html` - upcoming market information
- `robots.txt` and `sitemap.xml` - crawler guidance and page discovery
- `_headers` - deployment security headers for Netlify hosting
- `_redirects` - routes the deployed site root to `home.html`

## Technologies

- HTML5 for page structure and accessible form labels
- CSS3 in `css/home.css` for the shared visual design and responsive breakpoints
- Local image assets in `pics/`
- Vanilla JavaScript in `js/site.js` for product search/filter/sort, cart persistence, image lightbox, map integration, and form feedback
- Leaflet 1.9.4 and OpenStreetMap tiles for the market map (internet connection required)
- Netlify Forms attributes for contact and damaged-item submissions

## Running the project

Open `home.html` in a browser, or use the Live Server extension in VS Code. No build process or package installation is required.

## Responsive design

The layout has desktop, tablet, and mobile breakpoints. The navigation wraps on smaller screens, product cards resize into fewer columns, forms use the available screen width, and images keep their proportions.

## Part 3 functionality and SEO

- The shop catalogue is rendered from one JavaScript product list and supports keyword search, availability filtering, and sorting.
- The cart persists in browser storage and can prefill a product enquiry; it is not a payment or checkout system.
- Product images open in an accessible, keyboard-dismissible lightbox on the home and shop pages.
- The markets page includes an interactive Leaflet map with sample Example Market markers in Gauteng. Replace the example listings and coordinates with confirmed event details before publishing.
- Contact and damaged-item forms use native constraint validation and Netlify Forms markup. The damaged-item form accepts JPEG, PNG, and WebP images up to 5 MB.
- Forms show local-preview validation feedback. Actual receipt, file storage, and email notifications require deploying on Netlify and configuring form notifications in the Netlify dashboard; no submissions are sent from a local preview.
- Each HTML page includes a unique title, description, and relevant meta keywords. Images use descriptive alt text and lazy loading where appropriate.
- `robots.txt` and `sitemap.xml` provide crawler guidance and page discovery. Replace the sitemap domain if the published site uses a different domain.
- `_headers` applies a Content Security Policy and browser security headers when served by Netlify. Confirm the published page and map still load after deployment.

## Deployment

The site can be deployed as a static site on Netlify by publishing the project root. Netlify Forms are detected at deploy time; after deployment, confirm both form names appear in the Netlify Forms dashboard and configure email notifications. The interactive map requires an internet connection to load Leaflet and OpenStreetMap tiles. GitHub Pages can host the pages, but it does not process the configured Netlify forms. Confirm the displayed social profile URLs and replace the example sitemap domain if either differs from the final live site.

## Credits

Content and product concept created for the WEDE5020 portfolio of evidence. Images are local project assets. Review `REFERENCES.md` for technical references.
