// Simple Cookie Consent JS script 
// v2a bld.250725a
// by Wolfferine 

(function() {
    const COOKIE_CONSENT_KEY = 'cookieConsentGiven';
    const CONSENT_MESSAGE_HTML = `
        <div id="cookieConsentContainer" style="
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #333;
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-family: sans-serif;
            font-size: 14px;
            box-sizing: border-box;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px; /* Added gap for buttons */
            box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        ">
            <p style="margin: 0 20px 0 0; flex-grow: 1;">
                This website uses cookies to ensure you get the best experience on our website.
                <a href="/privacy-policy" style="color: #87CEEB; text-decoration: none; margin-left: 5px;">Learn more</a>
            </p>
            <button id="acceptCookiesButton" style="
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
                margin: 5px 0;
                cursor: pointer;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            ">
                Accept
            </button>
            <button id="rejectCookiesButton" style=" /* New Deny Button */
                background-color: #F44336;
                color: white;
                border: none;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
                margin: 5px 0;
                cursor: pointer;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            ">
                Reject
            </button>
        </div>
    `;

    function showCookieConsent() {
        if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
            document.body.insertAdjacentHTML('beforeend', CONSENT_MESSAGE_HTML);

            const acceptButton = document.getElementById('acceptCookiesButton');
            const rejectButton = document.getElementById('rejectCookiesButton'); // Get reject button
            const consentContainer = document.getElementById('cookieConsentContainer');

            if (acceptButton && rejectButton && consentContainer) { // Check both buttons
                acceptButton.addEventListener('click', () => {
                    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted'); // Store 'accepted'
                    consentContainer.style.display = 'none';
                });

                rejectButton.addEventListener('click', () => { // Deny listener
                    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected'); // Store 'rejected'
                    consentContainer.style.display = 'none';
                });
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showCookieConsent);
    } else {
        showCookieConsent();
    }
})();

