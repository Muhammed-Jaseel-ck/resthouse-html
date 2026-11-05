# Rest House Restaurant & Caterers — Static Website (HTML, CSS, JS)

This is a complete, faithful conversion of the **Rest House Restaurant & Caterers** website from React/TypeScript/TanStack into standalone **HTML5, CSS3, and JavaScript**.

---

## 🚀 How to Open and View

1. **Directly in Browser:**
   - Simply double-click **`index.html`** or right-click and choose **Open with > Chrome / Edge / Firefox**.
   - No node_modules, build steps, or server required!

2. **Using a Local Static Server (Optional):**
   - If you have Python: `python -m http.server 8000`
   - If you have Node/npx: `npx serve .`

---

## 📁 File Structure

```
resthouse-html/
├── index.html          # Home Page (Hero, Story, Signature Dishes, Split Banner, Reviews, Map, Contact)
├── about.html          # About Us Page (Story, Mission, What Makes Us Special, Contact)
├── menu.html           # Full Menu Page (Live search filter, category tabs, 12 categories, 100+ dishes)
├── party-hall.html     # Party Hall Page (Facilities, Celebration highlights, Enquiry)
├── catering.html       # Catering Page (Weddings, Corporate events, Special occasions)
├── gallery.html        # Gallery Page (Photo categories + interactive fullscreen lightbox modal)
├── contact.html        # Contact Page (Phone, WhatsApp, Location, Instagram, Directions)
├── css/
│   └── style.css       # Complete typography, gold gradients, animations, scroll effects
├── js/
│   ├── main.js         # Header scroll effects, mobile hamburger drawer, reveal animations, active links
│   ├── menu.js         # Live dish search & category filtering logic
│   └── gallery.js      # Category filter & fullscreen lightbox with keyboard navigation
└── assets/             # All restaurant photos, dish images, and brand logo
```

---

## ✨ Features Preserved with 100% Exact Design

- **Exact Typography:** Cormorant Garamond (display headers) & Jost (body).
- **Exact Color Palette:** Dark charcoal theme, luxury gold accents, gold gradients, cream highlights, WhatsApp green.
- **Identical Animations:** Smooth scroll reveals, slow-zoom hero imagery, hover elevations.
- **Complete Responsiveness:** Fixed header, mobile navigation drawer, desktop floating buttons, mobile sticky bottom action bar ("CALL NOW" / "WHATSAPP").
- **Working Dynamic Features:**
  - Real-time search across all 12 menu categories and 100+ items.
  - Interactive Lightbox with Left/Right/Escape keyboard controls for the gallery.
  - Deep-linked menu categories (`menu.html#rice`, `menu.html#tandoor`, etc.).
