document.addEventListener("DOMContentLoaded", () => {
  const houseCleanBtn = document.getElementById("house-clean");
  const gardenCleanBtn = document.getElementById("garden-clean");
  const bookPageToggle = document.getElementById("book-page-house");
  const gardenBookPageToggle = document.getElementById("book-page-garden");

  const closeBtn = document.querySelectorAll(".close-btn");
  const hometest = document.getElementById("home-test");

  houseCleanBtn.addEventListener("click", () => {
    console.log("button clicked ");
    bookPageToggle.classList.remove("hidden");
  });

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      bookPageToggle.classList.add("hidden");
    });
  });
  gardenCleanBtn.addEventListener("click", () => {
    gardenBookPageToggle.classList.remove("hidden");
  });

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      gardenBookPageToggle.classList.add("hidden");
    });
  });
});
