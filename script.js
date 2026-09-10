/* =====================================================
   Wedding Invitation
   أحمد & نورهان

   JavaScript
   ===================================================== */


/* =====================================================
   1. Opening Screen
   ===================================================== */

const openInvitationBtn =
    document.getElementById("openInvitationBtn");

const openingScreen =
    document.getElementById("openingScreen");

const mainContent =
    document.getElementById("mainContent");


openInvitationBtn.addEventListener("click", function () {

    // Hide opening screen
    openingScreen.classList.add("hidden");

    // Show main website
    mainContent.classList.add("visible");

    // Allow scrolling again
    document.body.style.overflow = "auto";

});


/* =====================================================
   2. Wedding Date
   ===================================================== */

// Wedding date:
// 3 October 2026
// 7:00 PM
//
// +03:00 = Egypt time

const weddingDate =
    new Date("2026-10-03T19:00:00+03:00");


/* =====================================================
   3. Countdown Elements
   ===================================================== */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const countdownElement =
    document.getElementById("countdown");


/* =====================================================
   4. Countdown Function
   ===================================================== */

function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime() - now.getTime();


    // Wedding date has arrived
    if (difference <= 0) {

        countdownElement.innerHTML = `
            <div class="countdown-finished">
                ❤️ اليوم هو يوم فرحتنا ❤️
            </div>
        `;

        return;
    }


    // Calculate remaining time

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    // Display values

    daysElement.textContent =
        formatNumber(days);

    hoursElement.textContent =
        formatNumber(hours);

    minutesElement.textContent =
        formatNumber(minutes);

    secondsElement.textContent =
        formatNumber(seconds);
}


/* =====================================================
   5. Number Formatting
   ===================================================== */

function formatNumber(number) {

    return String(number).padStart(2, "0");

}


/* =====================================================
   6. Start Countdown
   ===================================================== */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);



