document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");
  const toggleDark = document.getElementById("toggleDark");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
