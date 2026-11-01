document.addEventListener('DOMContentLoaded', function () {
    const page = decodeURIComponent(location.pathname.split('/').pop()).toLowerCase() || 'index.html';

    document.querySelectorAll('.main-nav a').forEach(function (link) {
        const href = decodeURIComponent(link.getAttribute('href')).toLowerCase();
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();

    // Shared client-side validation helpers for the enquiry and contact forms.
    function showFieldError(input, message) {
        const error = document.getElementById(input.id + 'Error');
        if (error) error.textContent = message;
        input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validateForm(form, rules) {
        let valid = true;
        rules.forEach(function (rule) {
            const input = form.elements[rule.name];
            if (!input) return;

            let message = '';
            const value = input.value.trim();

            if (input.required && !value) {
                message = 'Please complete this field.';
            } else if (value && rule.validate) {
                message = rule.validate(value) || '';
            }

            if (!message && typeof input.checkValidity === 'function' && !input.checkValidity()) {
                if (input.validity.typeMismatch) message = 'Please enter a value in the correct format.';
                else if (input.validity.patternMismatch) message = input.title || 'Please follow the required format.';
                else if (input.validity.tooShort) message = 'Please enter at least ' + input.minLength + ' characters.';
                else if (input.validity.tooLong) message = 'Please use ' + input.maxLength + ' characters or fewer.';
                else if (input.validity.valueMissing) message = 'Please complete this field.';
                else message = 'Please check the value entered.';
            }

            showFieldError(input, message);
            if (message) valid = false;
        });
        return valid;
    }

    function clearFormErrors(form) {
        form.querySelectorAll('.field-error').forEach(function (item) {
            item.textContent = '';
        });
        form.querySelectorAll('[aria-invalid]').forEach(function (item) {
            item.setAttribute('aria-invalid', 'false');
        });
    }

    function attachLiveErrorClearing(form) {
        form.querySelectorAll('input, select, textarea').forEach(function (input) {
            input.addEventListener('input', function () {
                const error = document.getElementById(input.id + 'Error');
                if (error) error.textContent = '';
                input.setAttribute('aria-invalid', 'false');
            });
            input.addEventListener('change', function () {
                const error = document.getElementById(input.id + 'Error');
                if (error) error.textContent = '';
                input.setAttribute('aria-invalid', 'false');
            });
        });
    }

    const commonNameRule = {
        name: 'name',
        validate: function (value) {
            if (value.length < 2) return 'Please enter at least 2 characters.';
            if (!/^[\p{L}][\p{L}\s'-]*$/u.test(value)) return 'Use letters, spaces, apostrophes or hyphens only.';
            return '';
        }
    };
    const emailRule = {
        name: 'email',
        validate: function (value) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return 'Enter a valid email address, for example name@example.com.';
            return '';
        }
    };
    const messageRule = {
        name: 'message',
        validate: function (value) {
            if (value.length < 10) return 'Please enter at least 10 characters.';
            if (value.length > 1000) return 'Your message must be 1,000 characters or fewer.';
            return '';
        }
    };

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        attachLiveErrorClearing(enquiryForm);
        enquiryForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            const status = document.getElementById('formMessage');
            clearFormErrors(enquiryForm);

            const rules = [
                commonNameRule,
                emailRule,
                { name: 'interest', validate: function (value) { return value ? '' : 'Please select an area of interest.'; } },
                messageRule
            ];

            if (!validateForm(enquiryForm, rules)) {
                status.textContent = 'Please correct the highlighted fields and try again.';
                status.classList.add('form-message-error');
                const firstInvalid = enquiryForm.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            status.classList.remove('form-message-error');
            status.textContent = 'Your enquiry has been submitted successfully for this website demonstration. No email was sent and no information was stored.';
            enquiryForm.reset();
            clearFormErrors(enquiryForm);
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        attachLiveErrorClearing(contactForm);
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const status = document.getElementById('contactFormMessage');
            clearFormErrors(contactForm);

            const rules = [
                { ...commonNameRule, name: 'name' },
                emailRule,
                {
                    name: 'phone',
                    validate: function (value) {
                        if (!/^\d{10}$/.test(value)) return 'Enter a South African phone number using exactly 10 digits.';
                        return '';
                    }
                },
                {
                    name: 'subject',
                    validate: function (value) { return value ? '' : 'Please select a message type.'; }
                },
                messageRule
            ];

            if (!validateForm(contactForm, rules)) {
                status.textContent = 'Please correct the highlighted fields and try again.';
                status.classList.add('form-message-error');
                const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            status.classList.remove('form-message-error');
            status.textContent = 'Your message has been submitted successfully for this website demonstration. No email was sent and no information was stored.';
            contactForm.reset();
            clearFormErrors(contactForm);
        });
    }

    // Live search filters the service cards without reloading the page.
    const serviceSearch = document.getElementById('serviceSearch');
    if (serviceSearch) {
        const cards = Array.from(document.querySelectorAll('#serviceCards .card'));
        const status = document.getElementById('searchStatus');
        const emptyState = document.getElementById('noSearchResults');

        serviceSearch.addEventListener('input', function () {
            const query = serviceSearch.value.trim().toLowerCase();
            let visible = 0;

            cards.forEach(function (card) {
                const searchableText = (card.dataset.search + ' ' + card.textContent).toLowerCase();
                const matches = searchableText.includes(query);
                card.hidden = !matches;
                if (matches) visible += 1;
            });

            status.textContent = query
                ? visible + ' matching result' + (visible === 1 ? '' : 's') + ' found.'
                : 'Showing all opportunities.';
            emptyState.hidden = visible !== 0;
        });
    }

    // Accessible gallery lightbox: mouse, keyboard and Escape-key support.
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeLightbox = document.getElementById('lightboxClose');

    if (lightbox && lightboxImage && lightboxCaption && closeLightbox) {
        document.querySelectorAll('.lightbox-link').forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const image = link.querySelector('img');
                lightboxImage.src = link.href;
                lightboxImage.alt = image ? image.alt : 'Expanded gallery image';
                lightboxCaption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent || '';
                if (typeof lightbox.showModal === 'function') {
                    lightbox.showModal();
                } else {
                    window.open(link.href, '_blank', 'noopener');
                }
            });
        });

        closeLightbox.addEventListener('click', function () {
            lightbox.close();
        });

        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) lightbox.close();
        });

        lightbox.addEventListener('close', function () {
            lightboxImage.removeAttribute('src');
        });
    }
});
