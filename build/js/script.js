var burgerX=document.querySelector(".page-header__toggle"),pageHeader=document.querySelector(".page-header"),pageHeadWrap=document.querySelector(".page-header__wrapper"),logo=document.querySelector(".page-header__logo-wrapper"),mainNav=document.querySelector(".main-nav__wrapper"),siteList=document.querySelector(".main-nav__list"),userList=document.querySelector(".user-list"),phone=document.querySelector(".user-list__phone"),linke=document.querySelector(".user-list__link"),phoneLink=document.querySelector(".user-list__link--phone"),mail=document.querySelector(".user-list__mail"),mailLink=document.querySelector(".user-list__link--mail"),authen=document.querySelector(".user-list__authentication"),authenBtn=document.querySelector(".user-list__btn"),social=document.querySelector(".main-nav__social"),userPage=document.querySelector(".user-list--page"),userDescript=document.querySelector(".user-list__link-description1"),userDescript2=document.querySelector(".user-list__link-description2"),logoWhite=document.querySelector(".page-header__logo-image-white"),logoBlue=document.querySelector(".page-header__logo-image-blue"),businessBtn=document.querySelector(".add-profile__business"),businessModal=document.querySelector(".business-modal"),businessClose=document.querySelector(".business-modal__button");burgerX.classList.toggle("page-header__toggle--hidden"),pageHeader.classList.toggle("page-header--hidden"),pageHeadWrap.classList.toggle("page-header__wrapper--hidden"),logo.classList.toggle("page-header__logo-wrapper--hidden"),mainNav.classList.toggle("main-nav__wrapper--hidden"),siteList.classList.toggle("main-nav__list--hidden"),userList.classList.toggle("user-list--hidden"),phone.classList.toggle("user-list__phone--hidden"),linke.classList.toggle("user-list__link--hidden"),phoneLink.classList.toggle("user-list__link--phone--hidden"),mail.classList.toggle("user-list__mail--hidden"),mailLink.classList.toggle("user-list__link--mail--hidden"),authen.classList.toggle("user-list__authentication--hidden"),authenBtn.classList.toggle("user-list__btn--hidden"),social.classList.toggle("visually-hidden"),userPage&&userPage.classList.toggle("user-list--page--hidden"),userDescript&&userDescript.classList.toggle("user-list__link-description1--hidden"),userDescript2&&userDescript2.classList.toggle("user-list__link-description2--hidden"),businessBtn&&businessBtn.addEventListener("click",function(e){e.preventDefault(),businessModal.classList.toggle("business-modal--open")}),businessClose&&businessClose.addEventListener("click",function(e){e.preventDefault(),businessModal.classList.remove("business-modal--open")}),burgerX.addEventListener("click",function(e){e.preventDefault(),burgerX.classList.toggle("page-header__toggle--hidden"),pageHeader.classList.toggle("page-header--hidden"),pageHeadWrap.classList.toggle("page-header__wrapper--hidden"),logo.classList.toggle("page-header__logo-wrapper--hidden"),mainNav.classList.toggle("main-nav__wrapper--hidden"),siteList.classList.toggle("main-nav__list--hidden"),userList.classList.toggle("user-list--hidden"),phone.classList.toggle("user-list__phone--hidden"),linke.classList.toggle("user-list__link--hidden"),phoneLink.classList.toggle("user-list__link--phone--hidden"),mail.classList.toggle("user-list__mail--hidden"),mailLink.classList.toggle("user-list__link--mail--hidden"),authen.classList.toggle("user-list__authentication--hidden"),authenBtn.classList.toggle("user-list__btn--hidden"),social.classList.toggle("visually-hidden"),logoWhite.classList.toggle("page-header__logo-image-white--hidden"),logoBlue.classList.toggle("page-header__logo-image-blue--hidden"),userPage&&userPage.classList.toggle("user-list--page--hidden"),userDescript&&userDescript.classList.toggle("user-list__link-description1--hidden"),userDescript2&&userDescript2.classList.toggle("user-list__link-description2--hidden")});var filterOpen=document.querySelector(".country-filter__toggle"),filterClose=document.querySelector(".country-filter__close"),countryFilter=document.querySelector(".country-filter__region-list"),filterWrapper=document.querySelector(".country-filter__body-wrapper"),filterTitle=document.querySelector(".country-filter__title"),titleBlock=document.querySelector(".country-filter__title-block"),filterIcon=document.querySelector(".country-filter__icon"),buttonClose=document.querySelector(".country-filter__button"),catalogWrapper=document.querySelector(".catalog-page__wrapper");filterOpen&&filterOpen.addEventListener("click",function(e){e.preventDefault(),catalogWrapper.classList.remove("catalog-page__wrapper--close"),buttonClose.classList.remove("country-filter__button--close"),titleBlock.classList.remove("country-filter__title-block--close"),filterIcon.classList.remove("country-filter__icon--close"),filterTitle.classList.remove("country-filter__title--close"),filterWrapper.classList.remove("country-filter__body-wrapper--close"),countryFilter.classList.remove("country-filter__region-list--close"),filterClose.classList.remove("country-filter__close--close"),filterOpen.classList.remove("country-filter__toggle--close")}),buttonClose&&buttonClose.addEventListener("click",function(e){e.preventDefault(),catalogWrapper.classList.add("catalog-page__wrapper--close"),buttonClose.classList.add("country-filter__button--close"),titleBlock.classList.add("country-filter__title-block--close"),filterIcon.classList.add("country-filter__icon--close"),filterTitle.classList.add("country-filter__title--close"),filterWrapper.classList.add("country-filter__body-wrapper--close"),countryFilter.classList.add("country-filter__region-list--close"),filterClose.classList.add("country-filter__close--close"),filterOpen.classList.add("country-filter__toggle--close")}),filterClose&&filterClose.addEventListener("click",function(e){e.preventDefault(),catalogWrapper.classList.add("catalog-page__wrapper--close"),buttonClose.classList.add("country-filter__button--close"),titleBlock.classList.add("country-filter__title-block--close"),filterIcon.classList.add("country-filter__icon--close"),filterTitle.classList.add("country-filter__title--close"),filterWrapper.classList.add("country-filter__body-wrapper--close"),countryFilter.classList.add("country-filter__region-list--close"),filterClose.classList.add("country-filter__close--close"),filterOpen.classList.add("country-filter__toggle--close")});var choiceCountry=document.querySelector(".add-plan__country-choice-start"),formDropdown=document.querySelector(".add-plan__dropdown");if(choiceCountry){var countriesField=choiceCountry.querySelector(".add-plan__countries"),hiddenMenu=choiceCountry.querySelector(".add-plan__hidden-menu"),hiddenMenuIcon=choiceCountry.querySelector(".add-plan__hidden-menu-icon"),formClose=choiceCountry.querySelector(".add-plan__close"),formCloseIcon=choiceCountry.querySelector(".add-plan__close-icon");choiceCountry.addEventListener("click",function(e){e.preventDefault(),formClose.classList.toggle("add-plan__close--open"),formDropdown.classList.toggle("add-plan__dropdown--open"),formCloseIcon.classList.toggle("add-plan__close-icon--open"),hiddenMenuIcon.classList.toggle("add-plan__hidden-menu-icon--open"),hiddenMenu.classList.toggle("add-plan__hidden-menu--open"),countriesField.classList.toggle("add-plan__countries--open"),choiceCountry.classList.toggle("add-plan__country-choice-start--open")})}for(var transportIcon=document.querySelectorAll(".transport-list__icon"),i=0;i<transportIcon.length;i++)transportIcon[i].addEventListener("click",function(e){e.preventDefault(),transportIcon.classList.toggle("transport-list__icon--active")});