document.addEventListener("click", (e) => {
  const drawer = document.querySelector(".drawer-content");
  const button = document.querySelector(".drawer-button");

  // Toggle Drawer
  if (e.target === button) {
    drawer.classList.toggle("drawer-open");
  } 
  // Close Drawer on Outside Click
  else if (!drawer.contains(e.target)) {
    drawer.classList.remove("drawer-open");
  }
});

// Close on button click
document.querySelectorAll(".drawer-content button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".drawer-content").classList.remove("drawer-open");
  });
});
