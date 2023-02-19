const hamburgerIcon = document.querySelector(".hamburger-icon");
const overlayMenu = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closebtn");

const simpleBookmarking = document.querySelector(".simple-bookmarking");
const speedySearching = document.querySelector(".speedy-searching");
const easySharing = document.querySelector(".easy-sharing");
const featuresTab1 = document.querySelector(".features-tab-1");
const featuresTab2 = document.querySelector(".features-tab-2");
const featuresTab3 = document.querySelector(".features-tab-3");

const selectedFeatureLine = document.querySelectorAll(
  ".feature-selected-line"
);
const faqQuestions = document.querySelectorAll(".FAQ-questions");
const faqAnswers = document.querySelectorAll(".FAQ-answers")
const downArrow = document.querySelectorAll(".arrow");
const upArrow = document.querySelectorAll(".up-arrow");



featuresTab1.classList.add("display-active");
selectedFeatureLine[0].classList.add("display-active");

hamburgerIcon.addEventListener("click", () => { 
  overlayMenu.classList.add("overlay-active");
})

closeBtn.addEventListener("click", () => { 
  overlayMenu.classList.remove("overlay-active");
})

simpleBookmarking.addEventListener('click', () => { 
  switchTabs(featuresTab1, featuresTab2, featuresTab3, 0);
})

speedySearching.addEventListener("click", () => {
  switchTabs(featuresTab2, featuresTab1, featuresTab3, 1);
});

easySharing.addEventListener("click", () => {
  switchTabs(featuresTab3, featuresTab2, featuresTab1, 2);
});

for (let i = 0; i < faqQuestions.length; i ++) { 
  faqQuestions[i].addEventListener("click", () => {
    if (!faqAnswers[i].classList.contains("display-active")) {
      displayAnswer(i);
    } else {
      closeAnswer(i);
    }
  });
}

function switchTabs(newTab, oldTab1, oldTab2, activeLineNumber) { 
  newTab.classList.add("display-active");
  for (let i = 0; i < 3; i++) { 
    if (selectedFeatureLine[i].classList.contains("display-active")) { 
      selectedFeatureLine[i].classList.remove("display-active");
    }
  }
  selectedFeatureLine[activeLineNumber].classList.add("display-active");
  
  if (oldTab1.classList.contains("display-active")){ 
    oldTab1.classList.remove("display-active");
  }
  if (oldTab2.classList.contains("display-active")){ 
    oldTab2.classList.remove("display-active");
  }
}

function displayAnswer(questionClicked) { 
  for (let faqAnswer of faqAnswers) { 
    if (faqAnswer.classList.contains("display-active")) { 
      faqAnswer.classList.remove("display-active");
    }
  }
  faqAnswers[questionClicked].classList.add("display-active");
  upArrow[questionClicked].classList.add("display-active");
  downArrow[questionClicked].classList.add("display-inactive");
}

function closeAnswer(answerClicked) { 
  faqAnswers[answerClicked].classList.remove("display-active");
  upArrow[answerClicked].classList.remove("display-active");
  downArrow[answerClicked].classList.remove("display-inactive");
}