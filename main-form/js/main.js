const prevBtns = document.querySelectorAll(".btn-back");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  // when click on btn next
  btn.addEventListener("click", () => {
    // increase +1
    formStepsNum++;
    // To update the Form Step in the form:
    updateFormSteps();
    // To update the progress bar in the form:
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  // when click on btn back
  btn.addEventListener("click", () => {
    // decrease -1
    formStepsNum--;
    // update the form srtep in the form
    updateFormSteps();
    // update the progress bar in the form
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    //  remove the element that contains the class "form-step-active"
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  //  add the class"form-step-active" to the element
  formSteps[formStepsNum].classList.add("form-step-active");
}

// This function updates the progress bar in the form to show the steps
function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    //  if thix page < or >  progress-step
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });
}
