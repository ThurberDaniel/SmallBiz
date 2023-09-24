// script.js

// Function to toggle a CSS class on/off
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  
  // Add interactivity to the navigation menu (toggle mobile menu)
  const menuButton = document.getElementById("menu-button");
  const navList = document.querySelector("nav ul");
  
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      toggleClass(navList, "show");
    });
  }
  