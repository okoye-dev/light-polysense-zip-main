function loadNav() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}
function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const cookiesAlert = document.getElementById("cookies-alert");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function checkCookie() {
    const user = getCookie("userAcceptedCookies");
    if (user != null) {
      cookiesAlert ? (cookiesAlert.style.display = "none") : null;
    } else {
      cookiesAlert ? (cookiesAlert.style.display = "flex") : null;
    }
  }

  if (acceptButton) {
    acceptButton.addEventListener("click", function () {
      setCookie("userAcceptedCookies", "true", 365);
      console.log("User accepted cookies");
      cookiesAlert.style.display = "none";
    });
  }

  if (declineButton) {
    declineButton.addEventListener("click", function () {
      setCookie("userAcceptedCookies", "false", 365);
      console.log("User declined cookies");
      cookiesAlert.style.display = "none";
    });
  }

  checkCookie();
});

document.addEventListener("DOMContentLoaded", loadNav);
document.addEventListener("DOMContentLoaded", loadFooter);

// Nav Controls
const sideNav = document.getElementById("sidenav");
const aboutNav = document.getElementById("about-nav");
const solutionsNav = document.getElementById("solutions-nav");

function closeNav() {
  sideNav.classList.add("translate-x-full");
}

function openNav() {
  sideNav.classList.remove("translate-x-full");
}

function slideIn() {
  aboutNav.classList.add("translate-y-[21rem]");
  aboutNav.classList.remove("opacity-0");
}

function slideOut() {
  aboutNav.classList.remove("translate-y-[21rem]");
  aboutNav.classList.add("opacity-0");
}

function slideSolutionsNavIn() {
  solutionsNav.classList.add("translate-y-[21rem]");
  solutionsNav.classList.remove("opacity-0");
}

function slideSolutionsNavOut() {
  solutionsNav.classList.remove("translate-y-[21rem]");
  solutionsNav.classList.add("opacity-0");
}

function joinNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById("emailInput").value;
  console.log("Email:", email);
  document.getElementById("newsletterForm").reset();
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        businessEmail: document.getElementById("businessEmail").value,
        jobTitle: document.getElementById("jobTitle").value,
        country: document.getElementById("country").value,
        message: document.getElementById("message").value,
      };
      console.log("Form Data:", formData);
      contactForm.reset();
    });
  }

  // Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    // Password toggle
    function togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
    }
    const visibilityButton = document.getElementById(
      "togglePasswordVisibility",
    );
    visibilityButton.addEventListener("click", togglePasswordVisibility);

    // Login Form logging
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      console.log({ username });
      loginForm.reset();
    });
  }
});
