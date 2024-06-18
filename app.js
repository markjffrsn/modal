const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const backDrop = document.querySelector(".modal-backdrop");
const modalWrapper = document.querySelector(".modal");

closeBtn.addEventListener("click", () => {
  backDrop.style.display = "none";
  modalWrapper.style.display = "block";
});

openBtn.addEventListener("click", () => {
  backDrop.style.display = "grid";
  modalWrapper.style.display = "none";
});
