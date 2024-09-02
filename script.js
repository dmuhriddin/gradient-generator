const gradientBox = document.querySelector(".gradient-box"),
  select = document.querySelector(".select-box select"),
  colors = document.querySelectorAll(".inputs input"),
  textarea = document.querySelector("textarea"),
  copy = document.querySelector(".copy");

let SELECT = "to left top";
let COLOR1 = "#5665e9";
let COLOR2 = "#a271f8";

function gradientData(
  select = "to left top",
  color1 = "#5665e9",
  color2 = "#a271f8"
) {
  gradientBox.style.background = `linear-gradient(${select}, ${color1}, ${color2})`;
  textarea.textContent = `background: linear-gradient(${select}, ${color1}, ${color2})`;
}

select.addEventListener("change", (e) => {
  SELECT = e.target.value;
  gradientData(e.target.value, COLOR1, COLOR2);
});

colors[0].addEventListener("input", (e) => {
  COLOR1 = e.target.value;
  gradientData(SELECT, e.target.value);
});

colors[1].addEventListener("input", (e) => {
  COLOR2 = e.target.value;
  gradientData(SELECT, COLOR1, e.target.value);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `background: linear-gradient(${SELECT}, ${COLOR1}, ${COLOR2})`
  );
  copy.textContent = "Code Copied";
  setTimeout(() => {
    copy.textContent = "Copy Code";
  }, 500);
});
