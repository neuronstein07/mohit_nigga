
// date based blur
  const expiryDateTime = new Date("2025-06-15T17:30:00"); // Format: YYYY-MM-DDTHH:MM:SS (24-hour)

  document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();

    if (now >= expiryDateTime) {
      document.getElementById("expired-overlay").style.display = "flex";
      document.body.classList.add("locked-expired");
    }
  });





// Function to add fade-in effects on scroll
function fadeInOnScroll() {
    const fadeRightElements = document.querySelectorAll(".scroll-fade");
    const fadeLeftElements = document.querySelectorAll(".scroll-fade-left");

    fadeRightElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = "translateX(0)";
        }
    });

    fadeLeftElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = "translateX(0)";
        }
    });
}

// Trigger the fade-in effect when the user scrolls
window.addEventListener("scroll", fadeInOnScroll);

// Random Line Functionality
const randomLines = [


        "Mohit ਦੀ ਬੂੰਦ ਚ ਲੁੰ ਦਿਤਾ",
        "Mohit ਦੀ ਮਾਂ ਦਾ ਭੋਸੜਾ!!",
        "Mohit ਨੰਗ ਸਾਲਾ ਚੂਦਾ",
        "Mohit ਦੂਜਿਆਂ ਦੀਆਂ ਚੀਜ਼ਾਂ ਲੈਣ ਵਾਲਾ (ਬੂੰਦ ਚ ਵੀ)!",
        "Mohit ਬੇਸ਼ਰਮ ਸਾਲਾ ਦੂਜਿਆਂ ਦੀਆਂ ਚੀਜ਼ਾਂ ਤੋੜਣ ਵਾਲਾ",
        "Mohit ਦੀ ਮਾਂ ਦੇ ਲੁੰ ਦਿਤਾ ਬਿਨਾ Condom ਤੋ!",
        "Mohit ਸਾਰੇ ਦਾ ਖਾਂਸੁਰਾ"
    
];

function displayRandomLine() {
    const randomLineElement = document.getElementById("random-line");
    const randomLine = randomLines[Math.floor(Math.random() * randomLines.length)];
    randomLineElement.textContent = randomLine;
    randomLineElement.style.display = "block";
    randomLineElement.style.opacity = 0;

    // Fade-in effect for random line
    setTimeout(() => {
        randomLineElement.style.opacity = 1;
    }, 100);
}

// Call random line function on page load
window.onload = function () {
    displayRandomLine();
};




// Select elements
const disclaimerOverlay = document.getElementById("disclaimer-overlay");
const agreeButton = document.getElementById("agree-btn");
const disagreeButton = document.getElementById("disagree-btn");

// Ensure the buttons are found
if (disclaimerOverlay && agreeButton && disagreeButton) {
    console.log("Elements found successfully.");

    // "I Agree" Button - Hides the disclaimer
    agreeButton.addEventListener("click", () => {
        console.log("I Agree button clicked."); // Debugging log
        disclaimerOverlay.style.display = "none"; // Hide the disclaimer
    });

    // "Leave" Button - Redirects to another page
    disagreeButton.addEventListener("click", () => {
        console.log("Leave button clicked."); // Debugging log
        window.location.href = "https://www.google.com"; // Redirect
    });
} else {
    console.error("One or more elements (disclaimerOverlay, agreeButton, disagreeButton) not found.");
}




// password encrypt

  const correctPassword = "mohitnigga123"; // Your password
  const expiryDate = new Date("2025-07-15T23:59:59"); // Lock expires after this date
  const now = new Date();

  function unlockSite() {
    document.getElementById("permanent-overlay").style.display = "none";
    document.body.classList.remove("locked");
    window.scrollTo(0, 0);
  }

  function checkPassword() {
    const input = document.getElementById("password-input").value;
    const error = document.getElementById("wrong-pass");

    if (input === correctPassword) {
      unlockSite();
    } else {
      error.style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (now < expiryDate) {
      document.body.classList.add("locked");
      document.getElementById("permanent-overlay").style.display = "flex";

      // ENTER key support
      document.getElementById("password-input").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          checkPassword();
        }
      });
    } else {
      // Password protection expired
      unlockSite();
    }
  });


