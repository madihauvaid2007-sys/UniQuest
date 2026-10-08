let currentStep = 1;
const totalSteps = 4;


// ========================================
// SHOW CURRENT STEP
// ========================================

function showStep(step) {

  const steps = document.querySelectorAll(".form-step");

  steps.forEach(function(section) {
    section.classList.remove("active");
  });

  const currentSection =
    document.getElementById("step" + step);

  if (currentSection) {
    currentSection.classList.add("active");
  }

  const stepText =
    document.getElementById("stepText");

  if (stepText) {
    stepText.textContent =
      "Step " + step + " of " + totalSteps;
  }

  const progressFill =
    document.getElementById("progressFill");

  if (progressFill) {
    progressFill.style.width =
      (step / totalSteps * 100) + "%";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ========================================
// NEXT
// ========================================

function nextStep() {

  if (currentStep < totalSteps) {

    currentStep++;

    showStep(currentStep);

  }
}


// ========================================
// BACK
// ========================================

function previousStep() {

  if (currentStep > 1) {

    currentStep--;

    showStep(currentStep);

  }
}


// ========================================
// SKIP FORM
// ========================================

function skipForm() {

  /*
    Change this URL to the page where
    you want users to go when they skip.
  */

  window.location.href = "main.html";

}


// ========================================
// FINISH
// ========================================

function finishForm() {

  alert(
    "Great! We're ready to find your colleges."
  );

}


// ========================================
// INTERESTS
// ========================================

const interestCards =
  document.querySelectorAll(
    'input[name="interest"]'
  );

interestCards.forEach(function(card) {

  card.addEventListener("change", function() {

    const optionMap = {

      engineering: "engineeringOptions",

      management: "managementOptions",

      medicine: "medicineOptions",

      other: "otherOptions"

    };

    const optionId =
      optionMap[this.value];

    const optionsBox =
      document.getElementById(optionId);

    if (!optionsBox) {
      return;
    }


    if (this.checked) {

      optionsBox.classList.add("show");

    } else {

      optionsBox.classList.remove("show");

      const courseCheckboxes =
        optionsBox.querySelectorAll(
          'input[type="checkbox"]'
        );

      courseCheckboxes.forEach(
        function(checkbox) {

          checkbox.checked = false;

        }
      );

    }

  });

});


// ========================================
// START
// ========================================

showStep(1);