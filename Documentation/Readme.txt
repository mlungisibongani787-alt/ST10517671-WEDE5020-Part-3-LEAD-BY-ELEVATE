LEAD by ELEVATE – WEDE5020 PART 3 (UPDATED PROJECT)

Student: Bongani Mlungisi Ndhlala
Student Number: ST10517671
Module: Web Development (WEDE5020)
Campus: Rosebank College, Braamfontein Campus

1. PROJECT OVERVIEW

LEAD by ELEVATE is a development platform and community for young professionals and emerging leaders. The Part 2 website builds on the Part 1 HTML foundation by adding a complete external CSS stylesheet, responsive layouts, responsive images, typography, navigation styling, interactive states and a refined user interface.

2. PART 2 CHANGES

Part 2 focused on applying the feedback and requirements for visual design and responsive design. The website was updated to include:
- A consistent external stylesheet linked to all six pages.
- A cohesive navy, warm-white, charcoal and gold/sage visual palette.
- Desktop, tablet and mobile responsive layouts.
- Responsive navigation with a mobile menu control.
- CSS Grid and flexible layout techniques.
- Responsive images using srcset, sizes and picture elements where appropriate.
- Typography, spacing, borders, shadows and visual hierarchy.
- CSS pseudo-classes including :hover, :focus, :focus-visible and :active.
- Styled enquiry form controls and client-side feedback.
- Improved accessibility through a skip link, labels, focus states and current-page navigation.
- Improved page titles and meta descriptions.

3. WEBSITE PAGES

index.html – Home
Introduces LEAD by ELEVATE and provides calls to action, key activities and member expectations.

About.html – About
Explains the organisation, mission, vision, values and member expectations.

Services.html – Services
Presents leadership development, mentorship, industry exposure, career growth, community sessions and coaching.

Enquiry.html – Enquiry
Contains a styled enquiry form with required fields and JavaScript confirmation.

Contact Us.html – Contact Us
Provides the communication areas represented by the academic project and links visitors to the enquiry form.

Gallery.html – Gallery
Displays the supplied LEAD photographs and promotional material in a responsive CSS Grid layout.

4. TECHNOLOGIES

HTML5 is used for page structure and semantic content.
CSS3 is used through css/style.css for layout, typography, colours, pseudo-classes, responsive breakpoints and visual styling.
JavaScript is stored in js/script.js for current-page navigation, form confirmation and the footer year.
Local JPG images are stored in images/ with responsive small and medium versions.

5. RESPONSIVE DESIGN

The website uses three practical screen ranges:
- Desktop: full multi-column layouts and horizontal navigation.
- Tablet: reduced grid columns and stacked content where needed.
- Mobile: single-column content, mobile navigation and adjusted spacing and typography.

Responsive images use max-width: 100%, aspect ratios, object-fit, srcset and sizes. The Gallery page uses lazy loading for non-critical images.

6. ACCESSIBILITY AND USABILITY

The pages use descriptive alternative text for images, labelled form controls, semantic headings, a skip-to-content link, visible keyboard focus states and an aria-current indicator for the active navigation page. The navigation changes to a mobile menu at smaller screen sizes.

7. TESTING

The completed website was checked locally using a web server and a Chromium browser at desktop, tablet and mobile viewport sizes. The following areas were checked:
- All six HTML pages load.
- Navigation links resolve to the correct pages.
- CSS loads on every page.
- Images load from the local images folder.
- Responsive image files exist and are referenced correctly.
- Gallery images remain within their containers.
- Layout changes at tablet and mobile breakpoints.
- The mobile navigation opens and closes using the checkbox control.
- Form required fields are present.
- The enquiry form displays its confirmation message through JavaScript.
- Keyboard focus styles are visible.

Responsive layouts were checked at desktop, tablet and mobile viewport widths during local testing.

8. CHANGELOG

See Documentation/CHANGELOG.txt for the detailed record of changes from Part 1 to Part 3.

9. REFERENCES

Mozilla Developer Network (MDN Web Docs) (n.d.) CSS media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed: 25 September 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) Responsive images. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/HTML/Multimedia_and_embedding/Responsive_images (Accessed: 25 September 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) CSS pseudo-classes. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes (Accessed: 25 September 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 25 September 2026).

World Wide Web Consortium (W3C) (n.d.) Web Content Accessibility Guidelines (WCAG). Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ (Accessed: 25 September 2026).

LEAD by ELEVATE (2026) Member expectations, welcome and community promotional material supplied for the WEDE5020 project.

10. SUBMISSION CHECK

The Part 2 project contains the updated HTML files, external CSS, JavaScript, local images, responsive image variants, documentation, changelog and testing screenshots.


11. PART 3 UPDATES

The Part 3 implementation is summarised in the root README.md. The website now includes:
- Client-side HTML and JavaScript validation for both enquiry and contact forms.
- Inline validation messages and successful-submission feedback.
- Live search filtering on the Services page.
- Expandable FAQ sections.
- An accessible Gallery lightbox.
- An interactive Google Maps search embed and directions link for the supplied Dunkeld Crescent Office Park address on Contact Us.
- Page-specific meta keywords, robots.txt and sitemap.xml.

IMPORTANT FORM NOTE
The lecturer clarified in the 28 October 2026 class session that this introductory assessment does not require a database or actual email delivery. Forms therefore demonstrate client-side validation and confirmation only; they do not transmit or store personal information.

The deployed website URL is https://lead-by-elevate.netlify.app/. The root robots.txt and sitemap.xml are configured for this live domain.
