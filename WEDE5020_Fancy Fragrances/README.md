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
- `robots.txt` and `sitemap.xml` provide crawler guidance and page discovery for the Netlify site.
- `_headers` applies a Content Security Policy and browser security headers when served by Netlify. Confirm the published page and map still load after deployment.

## Deployment

The site files are stored in the `WEDE5020_Fancy Fragrances` subfolder of the GitHub portfolio repository. In Netlify, leave the base directory and build command blank and set the publish directory to `WEDE5020_Fancy Fragrances`. Netlify Forms are detected at deploy time; after deployment, confirm both form names appear in the Netlify Forms dashboard and configure email notifications. The interactive map requires an internet connection to load Leaflet and OpenStreetMap tiles. GitHub Pages can host the pages, but it does not process the configured Netlify forms. Confirm the displayed social profile URLs match the business accounts.

## Changelog

### Part 3 - 26 October 2026

- Added JavaScript-powered product rendering, search, availability filtering, sorting, a persistent enquiry cart, and an accessible product-image lightbox.
- Added an interactive Leaflet map with clearly labelled Example Market placeholders and a contact-page FAQ accordion.
- Improved contact and damaged-item form controls, native validation, local feedback, upload type and size checks, and Netlify Forms integration.
- Added page-specific SEO titles, descriptions, keywords, descriptive image alt text and filenames, `robots.txt`, `sitemap.xml`, and Netlify security headers and redirects.
- Renamed all supplied photos to descriptive filenames and updated every page and product-data reference to match.
- Updated the business phone and WhatsApp number to 073 187 9819.
- Corrected the sitemap to use the Netlify primary domain and documented the required `WEDE5020_Fancy Fragrances` Netlify publish directory.
- Updated `robots.txt` and sitemap URLs to the live `fancy-fragrances.netlify.app` domain and its deployed clean routes.
- Restored the About page logo and founder image paths to the renamed assets so both images load correctly.
- Detailed development notes are also recorded in [CHANGELOG.md](CHANGELOG.md).

## Credits

Content and product concept created for the WEDE5020 portfolio of evidence. Images are local project assets. Review `REFERENCES.md` for technical references.
