window.addEventListener("resize", () => {
  closeMenuBar();
});

window.addEventListener("scroll", () => {
  closeMenuBar();
});
window.addEventListener("click", (event) => {
  if (document.getElementById("link-lists")?.contains(event?.target)) {
    closeMenuBar();
  }
});

function closeMenuBar() {
  const toggle = document.getElementById("nav-toggle");
  if (toggle) {
    toggle.checked = false;
  }
}
