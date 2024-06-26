const backDrop = document.querySelector(".modal-backdrop");
const modalWrapper = document.querySelector(".modal");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentButton = e.currentTarget.classList;

    if (currentButton.contains("close-btn")) {
      backDrop.style.display = "none";
      modalWrapper.style.display = "block";
    } else if (currentButton.contains("open-btn")) {
      backDrop.style.display = "grid";
      modalWrapper.style.display = "none";
    }
  });
});
