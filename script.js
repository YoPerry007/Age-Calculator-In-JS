const btn = document.querySelector(".separator-img");
const inputs = document.getElementsByTagName("input");
const ageOutputs = document.getElementsByTagName("span");
let isValid = false;

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const validate = () => {
  const checkInputs = document.querySelectorAll("input");
  let validator = true;
  checkInputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This is a required field!";
      validator = false;
    } else if (inputs[1].value > 12) {
      inputs[1].style.borderColor = "red";
      inputs[1].parentElement.querySelector("small").innerText =
        "Must be a Valid Month!";
      validator = false;
    } else if (inputs[0].value > 31) {
      inputs[0].style.borderColor = "red";
      inputs[0].parentElement.querySelector("small").innerText =
        "Must be a Valid Day!";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
};

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (inputs[0].value > day) {
      day = day + months[month - 1];
      month = month - 1;
      // inputs[1] = inputs[1] - 1;
    }
    if (inputs[1].value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - inputs[0].value;
    const m = month - inputs[1].value;
    const y = year - inputs[2].value;

    ageOutputs[2].innerHTML = d;
    ageOutputs[1].innerHTML = m;
    ageOutputs[0].innerHTML = y;
  }
}
inputs[0].addEventListener("input", () => {
  inputs[0].value = inputs[0].value.slice(0, 2);
});
inputs[1].addEventListener("input", () => {
  inputs[1].value = inputs[1].value.slice(0, 2);
});
inputs[2].addEventListener("input", () => {
  inputs[2].value = inputs[2].value.slice(0, 4);
});

btn.addEventListener("click", handleSubmit);

const hideText = document.querySelector(".hide-text");

setInterval(() => {
  hideText.style.display = "flex";
}, 5000);
setInterval(() => {
  hideText.style.display = "none";
}, 10000);

// (calculateAge = () => {
//   // if (isValid) {
//   let actualAge = `${inputs[1].value}/${inputs[0].value}/${inputs[2].value}`;
//   let ageObj = new Date(actualAge);
//   let ageDifference = Date.now() - ageObj;
//   ageDate = new Date(ageDifference);

//   let yearsOfAge = ageDate.getUTCFullYear() - 1970;
//   let monthsOfAge = ageDate.getUTCMonth();
//   let daysOfAge = ageDate.getUTCDay() - 1;
//   ageOutputs[0].textContent = yearsOfAge;
//   ageOutputs[1].textContent = monthsOfAge;
//   ageOutputs[2].textContent = daysOfAge;
//   // }
//   //  else {
//   //   alert("Error! Your date seems incorrect");
//   // }
// })
