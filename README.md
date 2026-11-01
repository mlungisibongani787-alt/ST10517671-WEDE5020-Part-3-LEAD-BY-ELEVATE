# LEAD by ELEVATE — WEDE5020 Part 3 POE

**Student:** Bongani Mlungisi Ndhlala  
**Student number:** ST10517671  
**Module:** Web Development (Introduction) — WEDE5020  
**Project:** LEAD by ELEVATE

## Project overview

LEAD by ELEVATE is a development platform and community for young professionals and emerging leaders. This project extends the submitted Part 1 and Part 2 website. The six-page structure, supplied content, visual identity, stylesheet and local image assets have been retained while Part 3 functionality, SEO and documentation were added.

## Website pages

| Page | Purpose |
|---|---|
| `index.html` | Home page and introduction to LEAD by ELEVATE |
| `About.html` | Organisation purpose, mission, vision, values and member expectations |
| `Services.html` | Leadership development, mentorship, industry exposure, career growth, community sessions and coaching; includes live search and expandable FAQs |
| `Enquiry.html` | Enquiry form with HTML constraints, JavaScript validation and confirmation feedback |
| `Contact Us.html` | Contact details, validated contact form, office location, interactive map and directions |
| `Gallery.html` | Project photographs and promotional material with an accessible image lightbox |

## Live project links

- **Deployed website:** https://lead-by-elevate.netlify.app/
- **GitHub repository:** https://github.com/mlungisibongani787-alt/ST10517671-WEDE5020-Part-3-LEAD-BY-ELEVATE
- **Sitemap:** https://lead-by-elevate.netlify.app/sitemap.xml
- **Robots file:** https://lead-by-elevate.netlify.app/robots.txt

## Contact and office details

**Telephone:** [072 747 7902](tel:+27727477902)  
**Office:** Dunkeld Crescent Office Park, 2 Albury Road, Dunkeld West, Randburg, Johannesburg, South Africa.

The Contact Us page provides a Google Maps search embed and a directions link for the supplied office address. The telephone link uses the contact number supplied for this project.

## Part 3 functionality and rubric coverage

- **Feedback and changelog:** updates from Parts 1–3 are recorded in `Documentation/CHANGELOG.txt`.
- **Interactive elements:** responsive navigation state, expandable FAQ disclosures, live search, gallery modal/lightbox, keyboard Escape handling, and CSS hover/focus transitions.
- **Dynamic content and search:** the Services search filters cards as the visitor types and displays the number of matches or a no-results message.
- **Interactive map:** Google Maps search embed and directions link for the office location.
- **Enquiry form:** required fields, appropriate input types, HTML constraints, JavaScript checks, field-level errors, focus on the first invalid field and confirmation feedback.
- **Contact form:** name, email, phone, message-type selection and message fields; validation, clear error feedback and confirmation feedback.
- **SEO:** page-specific titles, meta descriptions and keywords, semantic heading structure, descriptive image names and alternative text, internal links, responsive layouts, `robots.txt` and `sitemap.xml`.
- **Deployment:** static site configured for Netlify using `netlify.toml`.

## Form-processing note

The lecturer's 28 October 2026 class clarification, as recorded in the project material, states that a database and actual email delivery are not required for this introductory assessment. Accordingly, both forms validate input in the browser and show an on-screen confirmation. **They do not send an email, make an AJAX request to a server, or store submissions.** No server endpoint or recipient email address was provided. Do not describe these forms as live email or server-side processing.

## Technologies

- HTML5 — semantic page structure and native form controls/constraints.
- CSS3 — existing visual design, responsive layouts, focus states, transitions and reduced-motion support.
- JavaScript — form validation and feedback, live search, navigation state and gallery lightbox behaviour.
- Google Maps — embedded location search and directions link.
- Netlify — static website deployment.

## Run locally

Open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000/ in a browser.

## References

Google (n.d.) *Google Maps URLs*. Available at: https://developers.google.com/maps/documentation/urls/get-started (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/HTML/Multimedia_and_embedding/Responsive_images (Accessed: 1 November 2026).

The Independent Institute of Education (2026) *WEDE5020 Web Development (Introduction): Part 3 Portfolio of Evidence instructions and marking rubric*. Unpublished module assessment material.

The Independent Institute of Education (2026) *WEDE5020 Bi-Weekly Class session*, 28 October 2026. Unpublished class-session material.

LEAD by ELEVATE (2026) *Member expectations, welcome and community promotional material*. Supplied project material.

## Testing and release checklist

Static checks have been performed on the project files. Browser-based checks must still be completed by the student on the deployed website before final LMS submission. See `Documentation/TEST_RESULTS.txt` for the distinction between static checks and manual tests.

- [ ] Open all six pages from the deployed URL.
- [ ] Test navigation and footer telephone links on all pages.
- [ ] Test blank, invalid and valid Enquiry form submissions.
- [ ] Test blank, invalid and valid Contact form submissions.
- [ ] Confirm the contact phone field accepts exactly 10 digits.
- [ ] Test matching and non-matching Services search terms.
- [ ] Expand and collapse each FAQ.
- [ ] Open a gallery image; close with the close button, backdrop and Escape key.
- [ ] Confirm the map resolves to the supplied office address.
- [ ] Test desktop, tablet and mobile layouts.
- [ ] Confirm `robots.txt` and `sitemap.xml` load from the live domain.

## Changelog

See `Documentation/CHANGELOG.txt` for the development record covering Parts 1, 2 and 3.
