# LEAD by ELEVATE — WEDE5020 Part 3

**Student:** Bongani Mlungisi Ndhlala  
**Student number:** ST10517671  
**Module:** Web Development (Introduction) — WEDE5020  
**Project:** LEAD by ELEVATE

## 1. Project overview

LEAD by ELEVATE is a development platform and community for young professionals and emerging leaders. This project extends the submitted Part 1 and Part 2 website. The six-page structure, supplied project content, visual identity, stylesheet and local image assets have been retained.

## 2. Website pages

| Page | Purpose |
|---|---|
| `index.html` | Home page and introduction to LEAD by ELEVATE |
| `About.html` | Organisation purpose, mission, vision and values |
| `Services.html` | Leadership development, mentorship, industry exposure, career growth, community sessions and coaching |
| `Enquiry.html` | Enquiry form with HTML constraints and JavaScript validation |
| `Contact Us.html` | Contact information, validated contact form and an interactive map for the supplied office address |
| `Gallery.html` | Project photographs and promotional material with an accessible image lightbox |

## 3. Office location

The Contact Us page displays the address supplied for this project: **Dunkeld Crescent Office Park, 2 Albury Road, Dunkeld West, Randburg, Johannesburg, South Africa**. The embedded Google Maps search and directions link use this address as their destination. Confirm that the correct office-park result appears when testing the deployed map.

## 4. Part 3 functionality

- Added a contact form to the Contact Us page while retaining the existing enquiry form.
- Added HTML form constraints, including required fields, appropriate input types, character limits and phone-number pattern validation.
- Added JavaScript validation for names, email addresses, phone numbers, selections and message lengths.
- Added inline field-level error messages, invalid-state indicators and accessible success/error status messages.
- Added a successful-submission confirmation for valid form input.
- Added live search to filter the Services page cards without reloading the page.
- Added expandable FAQ content using HTML disclosure elements.
- Added an accessible Gallery lightbox with close-button and Escape-key support.
- Added an interactive Google Maps search embed and directions link on the Contact Us page.
- Added page-specific meta keywords while retaining page titles and meta descriptions.
- Added `robots.txt`, `sitemap.xml` and `netlify.toml`.

## 5. Form processing clarification

During the 28 October 2026 class session, the lecturer clarified that this introductory assessment does not require a database or actual email sending. The forms therefore demonstrate client-side HTML and JavaScript validation and an on-screen confirmation. They do not transmit, email or store personal information. The written POE mentions AJAX submission; no server endpoint was supplied, and the class explanation focused on client-side validation and confirmation. If the lecturer confirms that an actual asynchronous request is still required, a suitable endpoint must be supplied and tested before that feature can be described as complete.

## 6. Technologies

- HTML5 for semantic page structure and form constraints.
- CSS3 for the existing responsive design and Part 3 interface additions.
- JavaScript for form validation, live service search, navigation state and gallery lightbox behaviour.
- Google Maps embed and directions URL for the supplied office-location search.

## 7. Running the website locally

This is a static website. Open the project through a local development server rather than relying only on a direct `file://` browser path.

For example, with Python installed, open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

## 8. References

Google (n.d.) *Google Maps URLs*. Available at: https://developers.google.com/maps/documentation/urls/get-started (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed: 1 November 2026).

Mozilla Developer Network (MDN Web Docs) (n.d.) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/HTML/Multimedia_and_embedding/Responsive_images (Accessed: 1 November 2026).

The Independent Institute of Education (2026) *WEDE5020 Web Development (Introduction): Part 3 Portfolio of Evidence instructions and marking rubric*. Unpublished module assessment material.

The Independent Institute of Education (2026) *WEDE5020 Bi-Weekly Class recording transcript*, 28 October 2026. Unpublished class-session transcript.

LEAD by ELEVATE (2026) *Member expectations, welcome and community promotional material*. Supplied project material.

## 9. Testing checklist

Complete these checks in a browser before final submission and tick each item only after testing it:

- [ ] All six HTML pages load and navigation links work.
- [ ] CSS and JavaScript load on every page.
- [ ] Enquiry form rejects blank and invalid values.
- [ ] Enquiry form accepts valid values and displays its confirmation.
- [ ] Contact form rejects blank and invalid values.
- [ ] Contact phone number accepts exactly 10 digits.
- [ ] Contact form accepts valid values and displays its confirmation.
- [ ] Service search filters cards as text is entered.
- [ ] FAQ sections expand and collapse.
- [ ] Gallery images open in the lightbox and close using the button or Escape key.
- [ ] Office map loads and the displayed result matches the supplied address.
- [ ] Pages remain usable at desktop, tablet and mobile widths.
- [ ] `robots.txt` and `sitemap.xml` are accessible after deployment.
- [ ] Replace the deployment-domain placeholders in `robots.txt` and `sitemap.xml` with the actual published URL.
- [ ] Test every deployed page and record any issues before submission.

**Deployment URL:** To be added after Netlify deployment.  
**GitHub repository URL:** To be added after the remote repository is created.

## 10. Changelog

See `Documentation/CHANGELOG.txt` for the development record covering Part 1, Part 2 and Part 3.
