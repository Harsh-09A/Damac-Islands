// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

// amenities

$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

const phoneInput = document.querySelector("#contact_number");
// Initialize intlTelInput
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "ae",
  separateDialCode: true,
});

const phoneInputModal = document.querySelector("#contact_number_modal");
// Initialize intlTelInput
const itiModal = window.intlTelInput(phoneInputModal, {
  initialCountry: "ae",
  separateDialCode: true,
});

// Popup Auto
$(window).ready(function () {
  setTimeout(function () {
    $("#popupModal").modal("show");
  }, 3000);
});
