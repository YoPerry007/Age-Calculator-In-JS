const btn = document.querySelector(".separator-img");
const inputs = document.getElementsByTagName("input");
const ageOutputs = document.getElementsByTagName("span");
let isValid = false;


btn.addEventListener(
  "click",
  (calculateAge = () => {
    // if (isValid) {
    let actualAge = `${inputs[1].value}/${inputs[0].value}/${inputs[2].value}`;
    let ageObj = new Date(actualAge);
    let ageDifference = Date.now() - ageObj;
    ageDate = new Date(ageDifference);

    // There is a problem with the age calculations
    let yearsOfAge = ageDate.getUTCFullYear() - 1970;
    let monthsOfAge = ageDate.getUTCMonth();
    let daysOfAge = ageDate.getUTCDay() - 1;
    ageOutputs[0].textContent = yearsOfAge;
    ageOutputs[1].textContent = monthsOfAge;
    ageOutputs[2].textContent = daysOfAge;
   
  })
)
