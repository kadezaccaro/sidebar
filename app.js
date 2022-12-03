const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hide-sidebar");
  document.body.classList.toggle("change-bg");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hide-sidebar");
  document.body.classList.toggle("change-bg");
});
