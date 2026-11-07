"use strict";

/*
VERASCHOLARA+ — JAVASCRIPT / INTERACTION ALGORITHM

WHAT IS IMPLEMENTED:
1. The browser loads the HTML and css/styles.css.
2. The defer attribute lets HTML finish parsing before this file runs.
3. Find every agreement card in the HTML.
4. FOR EACH card, locate its switch and two paragraphs.
5. Start with sample wording visible and enhanced text hidden.
6. Enable the switch and wait for a change event.
7. IF the switch is on, show the plain-language explanation.
8. ELSE, show the sample wording.
9. Update the mode label and the card's background color.
10. Repeat only when the student changes a switch.

IMPORTANT:
This is an unofficial prototype. The sample clauses and explanations
are illustrative and have not been verified or approved by Broward College.
No AI request, login, approval system, or acceptance record is created.
*/

// STEP 1: Select the agreement cards that already exist in the HTML.
const agreementCards = document.querySelectorAll(".card");

// STEP 2: A for...of loop attaches the same behavior to each card.
for (const card of agreementCards) {
    const toggle = card.querySelector('input[role="switch"]');
    const originalText = card.querySelector(".original-text");
    const enhancedText = card.querySelector(".enhanced-text");
    const modeLabel = card.querySelector(".mode");

    // If a card was edited incorrectly, leave its original content alone.
    if (!toggle || !originalText || !enhancedText || !modeLabel) {
        console.warn("An agreement card is missing a required element.");
        continue;
    }

    // STEP 3: Set a predictable starting state for the prototype.
    toggle.checked = false;

    // STEP 4: Change visibility without modifying the source wording.
    function updateReadingMode() {
        if (toggle.checked) {
            originalText.hidden = true;
            enhancedText.hidden = false;
            modeLabel.textContent = "Plain-language explanation · Prototype";
            card.classList.add("enhanced");
        } else {
            originalText.hidden = false;
            enhancedText.hidden = true;
            modeLabel.textContent = "Sample agreement wording · Source text";
            card.classList.remove("enhanced");
        }
    }

    // STEP 5: Respond to mouse, touch, or keyboard changes.
    // Native switches can be reached with Tab and changed with Space.
    toggle.addEventListener("change", updateReadingMode);

    // STEP 6: Apply the starting state and make this switch usable.
    updateReadingMode();
    toggle.disabled = false;
}

// There is no continuous loop, timer, network request, or tracking.
// Each card is independent. Flipping one switch leaves the others alone.
