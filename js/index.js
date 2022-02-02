const navCheck = document.querySelector("#nav-check");
const navLinks = document.querySelectorAll(".nav-links");

// closes the burger-menu panel when a link is clicked
navLinks.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    navCheck.checked = false;
  })
})
