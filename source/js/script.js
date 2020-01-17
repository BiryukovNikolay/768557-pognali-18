var burgerX = document.querySelector(".page-header__toggle");

var pageHeader = document.querySelector(".page-header");
var pageHeadWrap = document.querySelector(".page-header__wrapper");
var logo = document.querySelector(".page-header__logo-wrapper");
var mainNav = document.querySelector(".main-nav__wrapper");
var siteList = document.querySelector(".main-nav__list");
var userList = document.querySelector(".user-list");
var phone = document.querySelector(".user-list__phone");
var linke = document.querySelector(".user-list__link");
var phoneLink = document.querySelector(".user-list__link--phone");
var mail = document.querySelector(".user-list__mail");
var mailLink = document.querySelector(".user-list__link--mail");
var authen = document.querySelector(".user-list__authentication");
var authenBtn = document.querySelector(".user-list__btn");
var social = document.querySelector(".main-nav__social");
var userPage = document.querySelector(".user-list--page");
var userDescript = document.querySelector(".user-list__link-description1");
var userDescript2 = document.querySelector(".user-list__link-description2");
var logoWhite = document.querySelector(".page-header__logo-image-white");
var logoBlue = document.querySelector(".page-header__logo-image-blue");
var businessBtn = document.querySelector(".add-profile__business");
var businessModal = document.querySelector(".business-modal");
var businessClose = document.querySelector(".business-modal__button");
var window = window.innerWidth;
document.addEventListener("resize", function() {
        if (window => 1440){
          console.log("hello")
        }
    });

  burgerX.classList.toggle("page-header__toggle--hidden");
  pageHeader.classList.toggle("page-header--hidden");
  pageHeadWrap.classList.toggle("page-header__wrapper--hidden");
  logo.classList.toggle("page-header__logo-wrapper--hidden");
  mainNav.classList.toggle("main-nav__wrapper--hidden");
  siteList.classList.toggle("visually-hidden");
  userList.classList.toggle("user-list--hidden");
  phone.classList.toggle("user-list__phone--hidden");
  linke.classList.toggle("user-list__link--hidden");
  phoneLink.classList.toggle("user-list__link--phone--hidden");
  mail.classList.toggle("user-list__mail--hidden");
  mailLink.classList.toggle("user-list__link--mail--hidden");
  authen.classList.toggle("user-list__authentication--hidden");
  authenBtn.classList.toggle("user-list__btn--hidden");
  social.classList.toggle("visually-hidden");
  if (userPage){
    userPage.classList.toggle("user-list--page--hidden");
  }
  if (userDescript){
    userDescript.classList.toggle("user-list__link-description1--hidden");
  }
  if (userDescript2){
    userDescript2.classList.toggle("user-list__link-description2--hidden");
  }

  if (businessBtn) {
    businessBtn.addEventListener("click", function(evt) {
      evt.preventDefault();
      businessModal.classList.toggle("business-modal--open");
    })
  }

  if (businessClose) {
    businessClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      businessModal.classList.remove("business-modal--open");
    })
  }

burgerX.addEventListener("click", function(evt) {
  evt.preventDefault();
  burgerX.classList.toggle("page-header__toggle--hidden");
  pageHeader.classList.toggle("page-header--hidden");
  pageHeadWrap.classList.toggle("page-header__wrapper--hidden");
  logo.classList.toggle("page-header__logo-wrapper--hidden");
  mainNav.classList.toggle("main-nav__wrapper--hidden");
  siteList.classList.toggle("visually-hidden");
  userList.classList.toggle("user-list--hidden");
  phone.classList.toggle("user-list__phone--hidden");
  linke.classList.toggle("user-list__link--hidden");
  phoneLink.classList.toggle("user-list__link--phone--hidden");
  mail.classList.toggle("user-list__mail--hidden");
  mailLink.classList.toggle("user-list__link--mail--hidden");
  authen.classList.toggle("user-list__authentication--hidden");
  authenBtn.classList.toggle("user-list__btn--hidden");
  social.classList.toggle("visually-hidden");
  logoWhite.classList.toggle("page-header__logo-image-white--hidden");
  logoBlue.classList.toggle("page-header__logo-image-blue--hidden");
  if (userPage){
    userPage.classList.toggle("user-list--page--hidden");
  }
  if (userDescript){
    userDescript.classList.toggle("user-list__link-description1--hidden");
  }
  if (userDescript2){
    userDescript2.classList.toggle("user-list__link-description2--hidden");
  }
})

var filterOpen = document.querySelector(".country-filter__toggle");
var filterClose = document.querySelector(".country-filter__close");
var countryFilter = document.querySelector(".country-filter__region-list");
var filterWrapper = document.querySelector(".country-filter__body-wrapper");
var filterTitle = document.querySelector(".country-filter__title");
var titleBlock = document.querySelector(".country-filter__title-block");
var filterIcon = document.querySelector(".country-filter__icon");
var buttonClose = document.querySelector(".country-filter__button");
var catalogWrapper = document.querySelector(".catalog-page__wrapper");

if (filterOpen) {
filterOpen.addEventListener("click", function(evt) {
  console.log("ee");
  evt.preventDefault();
  catalogWrapper.classList.remove("catalog-page__wrapper--close");
  buttonClose.classList.remove("country-filter__button--close");
  titleBlock.classList.remove("country-filter__title-block--close");
  filterIcon.classList.remove("country-filter__icon--close");
  filterTitle.classList.remove("country-filter__title--close");
  filterWrapper.classList.remove("country-filter__body-wrapper--close");
  countryFilter.classList.remove("country-filter__region-list--close");
  filterClose.classList.remove("country-filter__close--close");
  filterOpen.classList.remove("country-filter__toggle--close");
})}

if (buttonClose) {
buttonClose.addEventListener("click", function(evt) {
  console.log("eeEEE");
  evt.preventDefault();
  catalogWrapper.classList.add("catalog-page__wrapper--close");
  buttonClose.classList.add("country-filter__button--close");
  titleBlock.classList.add("country-filter__title-block--close");
  filterIcon.classList.add("country-filter__icon--close");
  filterTitle.classList.add("country-filter__title--close");
  filterWrapper.classList.add("country-filter__body-wrapper--close");
  countryFilter.classList.add("country-filter__region-list--close");
  filterClose.classList.add("country-filter__close--close");
  filterOpen.classList.add("country-filter__toggle--close");
})}

if (filterClose) {
filterClose.addEventListener("click", function(evt) {
  console.log("eeEEE");
  evt.preventDefault();
  catalogWrapper.classList.add("catalog-page__wrapper--close");
  buttonClose.classList.add("country-filter__button--close");
  titleBlock.classList.add("country-filter__title-block--close");
  filterIcon.classList.add("country-filter__icon--close");
  filterTitle.classList.add("country-filter__title--close");
  filterWrapper.classList.add("country-filter__body-wrapper--close");
  countryFilter.classList.add("country-filter__region-list--close");
  filterClose.classList.add("country-filter__close--close");
  filterOpen.classList.add("country-filter__toggle--close");
})}

var choiceCountry = document.querySelector(".add-plan__country-choice-start");
var formDropdown = document.querySelector(".add-plan__dropdown");

var countriesField = choiceCountry.querySelector(".add-plan__countries");
var hiddenMenu = choiceCountry.querySelector(".add-plan__hidden-menu");
var hiddenMenuIcon = choiceCountry.querySelector(".add-plan__hidden-menu-icon");
var formClose = choiceCountry.querySelector(".add-plan__close");
var formCloseIcon = choiceCountry.querySelector(".add-plan__close-icon");
var transportIcon = document.querySelectorAll(".transport-list__icon");


for (var i = 0; i < transportIcon.length; i++) {

  transportIcon[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    transportIcon.classList.toggle("transport-list__icon--active");
  })
}

choiceCountry.addEventListener("click", function(evt) {
  evt.preventDefault();
  formClose.classList.toggle("add-plan__close--open");
  formDropdown.classList.toggle("add-plan__dropdown--open");
  formCloseIcon.classList.toggle("add-plan__close-icon--open");
  hiddenMenuIcon.classList.toggle("add-plan__hidden-menu-icon--open");
  hiddenMenu.classList.toggle("add-plan__hidden-menu--open");
  countriesField.classList.toggle("add-plan__countries--open");
  choiceCountry.classList.toggle("add-plan__country-choice-start--open");
})
