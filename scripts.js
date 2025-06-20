// Toggle sidebar functionality

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const wrapper = document.getElementById("wrapper");

  if (toggleButton && wrapper) {
    toggleButton.addEventListener("click", function () {
      wrapper.classList.toggle("toggled");
    });
  }
});
