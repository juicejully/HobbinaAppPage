function toggleDrawer() {
  const drawer = document.querySelector(".drawer-content");

  if (drawer.style.maxHeight) {
    drawer.style.maxHeight = null; // Close
  } else {
    drawer.style.maxHeight = drawer.scrollHeight + "px"; // Open
  }
}
