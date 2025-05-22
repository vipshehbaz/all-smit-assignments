let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let body = document.getElementById("body");
body.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    return;
  }
  if (
    e.code === "Enter" ||
    e.code === "NumpadEnter" ||
    e.code === "ArrowLeft" ||
    e.code === "ArrowRight"
  ) {
    if (input.value) {
      check = eval(input.value);
      input.value = check;
    } else {
      alert("please Enter Number");
    }
  }
  const validKeys = /^[0-9+\-*/.]$/;
  if (!validKeys.test(event.key)) {
    e.preventDefault();
  }
  input.focus();
});
function calc() {
  let string = input.value;
  let arr = Array.from(buttons);
  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        if (input.value) {
          check = eval(input.value);
          input.value = check;
        } else {
          alert("please Enter Number");
        }
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else {
        string += e.target.innerHTML;
        input.value = string;
      }
    });
  });
}
calc();
