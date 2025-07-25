# Simple-Cookie-Consent-v2a
A simple cookie consent banner to use on any website, 
this is version 2a of my original "Simple Cookie Consent v1"

### **Explanation of the JS code:**

- **Immediately Invoked Function Expression (IIFE):** The entire code is wrapped in `(function() { ... })();`. This creates a private scope, preventing variables from polluting the global namespace.

- `COOKIE_CONSENT_KEY`**:** A constant string used as the key for `localStorage` to check if the user has already given consent.

- `CONSENT_MESSAGE_HTML`**:** A template literal containing the HTML structure and inline styles for the cookie consent message.

  - `position: fixed; bottom: 0; left: 0;`: Positions the container at the very bottom of the viewport.

  - `background-color`**,** `color`**,** `padding`**,** `text-align`**,** `font-family`**,** `font-size`: Basic styling for the message.

  - `z-index: 9999;`: Ensures the consent message appears on top of most other content.

  - `display: flex; justify-content: center; align-items: center;`: Uses flexbox for easy alignment of text and button.

  - `box-shadow`: Adds a subtle shadow for better visual separation.

- `showCookieConsent()` **function:**

  - `if (!localStorage.getItem(COOKIE_CONSENT_KEY))`: This is the core logic for displaying the message only once. It checks if the `COOKIE_CONSENT_KEY` item exists in `localStorage`. If it doesn't, it means the user hasn't given consent yet.

  - `document.body.insertAdjacentHTML('beforeend', CONSENT_MESSAGE_HTML);`: Inserts the consent message HTML just before the closing `</body>` tag.

  - **Event Listener:**

    - It gets references to the "Got it!" button (`acceptCookiesButton`) and the consent container (`cookieConsentContainer`).

    - An `click` event listener is added to the "Got it!" button.

    - When the button is clicked:

      - `localStorage.setItem(COOKIE_CONSENT_KEY, 'true');`: Sets the `COOKIE_CONSENT_KEY` in `localStorage` to `'true'`. This ensures the message won't pop up again on subsequent visits.

      - `consentContainer.style.display = 'none';`: Hides the consent message.

- `DOMContentLoaded` **event listener:**

  - `if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', showCookieConsent); } else { showCookieConsent(); }` This ensures that the `showCookieConsent` function runs only after the DOM (Document Object Model) is fully loaded. This prevents errors if the script tries to access elements that haven't been rendered yet. The `else` block handles cases where the script might be loaded after `DOMContentLoaded` has already fired.

- **Privacy Policy Link:** The "Learn more" link is set to `/privacy-policy`. **Remember to replace this with the actual path to your website's privacy policy page.**

This solution is lightweight, doesn't rely on external libraries, and effectively handles the "show once" requirement using `localStorage`.

