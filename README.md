# Northside Primary Care Website

A static website for a solo primary care physician in Chicago. Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

## Deploy on Netlify

1. Upload the entire project folder to Netlify (drag-and-drop or connect your Git repository).
2. No build settings are needed — the site is ready to serve as-is.

## Editing Content

All text content is stored in a single file:

```
js/content.js
```

Open `js/content.js` and update any text inside the `CONTENT` object. Changes take effect immediately — no build step required.

### Common edits

| What to change | Find in content.js |
|---|---|
| Practice name | `practice.name` |
| Doctor name | `practice.doctorName` |
| Address | `practice.address` |
| Phone number | `practice.phone` |
| Email | `practice.email` |
| Office hours | `practice.hours` |
| Home page text | `pages.home` |
| About page text | `pages.about` |
| Services descriptions | `pages.services` |
| Insurance info | `pages.insurance` |
| Contact page text | `pages.contact` |
| Footer copyright | `footer.copyright` |

### Meta titles & descriptions

Each page has its own meta title and description in `content.js` under `pages.{page}.meta`.

## Contact Form

The appointment request form at `/contact.html` uses [Formspree](https://formspree.io). To receive form submissions:

1. Create a free Formspree account.
2. Create a new form and copy the form ID.
3. In `contact.html`, update the form `action` attribute:
   ```
   action="https://formspree.io/f/your-form-id-here"
   ```

## File Structure

```
├── index.html          Home page
├── about.html          About Dr. Mitchell
├── services.html       Medical services
├── insurance.html      Insurance & patient info
├── contact.html        Contact form & location
├── css/
│   └── styles.css      All styles (mobile-first, responsive)
├── js/
│   ├── content.js      ALL text content (edit this)
│   └── script.js       Navigation, FAQ accordion, content injection
└── README.md           This file
```

## Accessibility

- Semantic HTML5 (`nav`, `main`, `article`, `footer`, `h1`–`h3`)
- Skip navigation link
- `aria-current`, `aria-expanded`, `aria-controls`, `aria-label`
- WCAG AA compliant color contrast
- Focus-visible outlines for keyboard navigation
- Screen-reader-friendly utility classes
