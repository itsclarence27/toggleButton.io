let toggleBtn = document.getElementById("toggle-btn");
let toggleBox = document.querySelector(".toggle-box");

toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    toggleBox.style.backgroundColor = "white";
    document.body.style.backgroundColor = "black";
  } else {
    toggleBox.style.backgroundColor = "black";
    document.body.style.backgroundColor = "";
  }
});
