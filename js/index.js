// closes the burger-menu panel when a link is clicked
console.log(document.querySelectorAll(".nav-links"));
document.querySelectorAll(".nav-links").forEach((lnk) => {
  lnk.addEventListener('click', () => {
    document.querySelector('#nav-check').checked = false;
  })
})
