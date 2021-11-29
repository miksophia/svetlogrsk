export function pl() {
  // const BtnOrgn = document.querySelector(".sidebar__orgn");
  // const BtnServ = document.querySelector(".sidebar__serv");
  // let MenuOrg = document.querySelector(".sidebar__menu--orgn");
  // let MenuServ = document.querySelector(".sidebar__menu--serv");
  // const HedOrgn = document.querySelector(".companies__header--orgn");
  // const HedServ = document.querySelector(".companies__header--serv");
  // const ListOrgn = document.querySelector(".companies__list__wrap");
  // const ListServ = document.querySelector(".serv__list__wrap");
  // const MainComp = document.querySelector(".companies");
  // function OrgAct() {
  //   MenuServ.style.display = "none";
  //   MenuOrg.style.display = "grid";
  //   HedServ.style.display = "none";
  //   HedOrgn.style.display = "flex";
  //   ListServ.style.display = "none";
  //   ListOrgn.style.display = "block";
  // }
  // function ServAct() {
  //   MenuOrg.style.display = "none";
  //   MenuServ.style.display = "grid";
  //   HedOrgn.style.display = "none";
  //   HedServ.style.display = "flex";
  //   ListOrgn.style.display = "none";
  //   ListServ.style.display = "block";
  // }
  // if (MainComp) {
  //   if (BtnOrgn.classList.contains("sidebar__header--active")) {
  //     OrgAct();
  //   }
  //   if (BtnServ.classList.contains("sidebar__header--active")) {
  //     ServAct();
  //   }
  //   BtnServ.addEventListener("click", function (evt) {
  //     evt.preventDefault();
  //     if (BtnServ.classList.contains("sidebar__header--active")) {
  //       ServAct();
  //     } else {
  //       BtnServ.classList.add("sidebar__header--active");
  //       BtnOrgn.classList.remove("sidebar__header--active");
  //       ServAct();
  //     }
  //   });
  //   BtnOrgn.addEventListener("click", function (evt) {
  //     evt.preventDefault();
  //     if (BtnOrgn.classList.contains("sidebar__header--active")) {
  //       OrgAct();
  //     } else {
  //       BtnOrgn.classList.add("sidebar__header--active");
  //       BtnServ.classList.remove("sidebar__header--active");
  //       OrgAct();
  //     }
  //   });
  // }

  const BurgerBtn = document.querySelector(".main-header__burger");
  const BurgerMenu = document.querySelector(".header__nav nav");
  const BurgerMask = document.querySelector(".mask");
  const navMenu = document.querySelector(".main-header__wrapper");
  const navLinks = document.querySelector(".header__links");

  BurgerBtn.addEventListener("click", function (evt) {
    if (BurgerBtn.classList.contains("main-header__burger--active")) {
      evt.preventDefault();
      BurgerBtn.classList.remove("main-header__burger--active");
      BurgerMenu.classList.remove("header-menu--active");
      navMenu.classList.remove("main-header__wrapper--active");
      navLinks.classList.remove("header__links--active");
      BurgerMask.style.display = "none";
      if (window.innerWidth < 768) {
        document.body.style.overflow = "";
      }
    } else {
      BurgerBtn.classList.add("main-header__burger--active");
      BurgerMenu.classList.add("header-menu--active");
      navMenu.classList.add("main-header__wrapper--active");
      navLinks.classList.add("header__links--active");
      BurgerMask.style.display = "block";
      if (window.innerWidth < 768) {
        BurgerMask.style.display = "none";
        document.body.style.overflow = "hidden";
      }
    }
  });

  BurgerMask.addEventListener("click", function (evt) {
    evt.preventDefault();
    BurgerBtn.classList.remove("main-header__burger--active");
    BurgerMenu.classList.remove("header-menu--active");
    navMenu.classList.remove("main-header__wrapper--active");
    BurgerMask.style.display = "none";
  });

  const dropBtn = document.querySelectorAll(".drop__item");
  const dropMenu = document.querySelectorAll(".drop__menu");
  if (window.innerWidth < 1200) {
    dropBtn.forEach(function (item, i) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (dropBtn[i].classList.contains("drop--active")) {
          dropBtn[i].classList.remove("drop--active");
          dropMenu[i].style.display = "none";
        } else {
          dropBtn[i].classList.add("drop--active");
          dropMenu[i].style.display = "flex";
        }
      });
    });
  }
  const sideBarItem = document.querySelector(".sidebar__item--active");
  const sideBarArrow = document.querySelector(".sidebar__item-arrow");
  const sideBarMenu = document.querySelector(".sidebar__menu--ad");

  if (sideBarArrow) {
    if (sideBarItem && window.innerWidth < 1200) {
      sideBarArrow.style.display = "block";
      sideBarMenu.classList.remove("sidebar__menu--ord");
    } else {
      sideBarArrow.style.display = "none";
      sideBarMenu.classList.add("sidebar__menu--ord");
    }
  }

  const compFilt = document.querySelectorAll(".comp__header__filter input");
  const compLinks = document.querySelectorAll(".comp__header__links a");

  if (compFilt) {
    let removeActive = function (array) {
      array.forEach(function (item) {
        item.style.display = "none";
      });
      return;
    };

    compFilt.forEach(function (item, i) {
      item.addEventListener("click", function (evt) {
        removeActive(compLinks);
        compLinks[i].style.display = "flex";
      });
    });
  }

  const AdvButton = document.querySelectorAll(".adv__button");
  const AdvImg = document.querySelectorAll(".adv__img");

  if (AdvButton) {
    AdvButton.forEach(function (item, i) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();

        if (AdvImg[i].classList.contains("adv__img--active")) {
          AdvImg[i].style.height = "0px";
          AdvImg[i].addEventListener(
            "transitionend",
            () => {
              AdvImg[i].classList.remove("adv__img--active");
            },
            { once: true }
          );
        } else {
          AdvImg[i].classList.add("adv__img--active");
          AdvImg[i].style.height = "auto";
          let height = AdvImg[i].clientHeight + "px";
          AdvImg[i].style.height = "0px";
          setTimeout(() => {
            AdvImg[i].style.height = height;
          }, 0);
        }
      });
    });
  }

  let hideClock = document.querySelector(".product-clock");

  if (hideClock !== null) {
    hideClock.addEventListener("focus", (e) => {
      hideClock.classList.add("product-clock--active");
    });

    hideClock.addEventListener("blur", (e) => {
      hideClock.classList.remove("product-clock--active");
    });
  }

  let productTabsHeader = document.querySelectorAll(
    ".product-tabs__header > li"
  );

  let productTabsContent = document.querySelectorAll(".tabs-content--item");

  if (productTabsHeader.length > 0) {
    productTabsHeader.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        for (let val of productTabsHeader) {
          val.classList.remove("product-tabs__header--active");
        }
        productTabsHeader[index].classList.add("product-tabs__header--active");

        for (let val of productTabsContent) {
          val.style.display = "none";
        }

        productTabsContent[index].style.display = "block";
      });
    });
  }

  let hideSocial = document.querySelector(".social-trigger");

  if (hideSocial !== null) {
    hideSocial.addEventListener("focus", (e) => {
      hideSocial.classList.add("social-trigger--active");
    });

    hideSocial.addEventListener("blur", (e) => {
      hideSocial.classList.remove("social-trigger--active");
    });
  }

  let productTabsHeaderMob = document.querySelectorAll(".tabs-header--mob");

  let productTabsContentMob = document.querySelectorAll(".tabs-content--mob");

  if (productTabsHeaderMob !== null) {
    productTabsHeaderMob.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (btn.classList.contains("product-tabs__header--active")) {
          btn.classList.remove("product-tabs__header--active");
          productTabsContentMob[index].classList.remove(
            "tabs-content--mob--active"
          );
        } else {
          for (let val of productTabsHeaderMob) {
            val.classList.remove("product-tabs__header--active");
          }

          productTabsHeaderMob[index].classList.add(
            "product-tabs__header--active"
          );

          for (let val of productTabsContentMob) {
            val.classList.remove("tabs-content--mob--active");
          }

          productTabsContentMob[index].classList.add(
            "tabs-content--mob--active"
          );
        }
      });
    });
  }

  const checkVal = document.querySelector(".check-text");

  const currentVal = document.querySelector(".current-count");

  if (checkVal !== null) {
    let maxlength = checkVal.dataset.max !== "" ? checkVal.dataset.max : 1500;

    document.querySelector(".max-length").innerHTML = maxlength;

    checkVal.addEventListener("input", (e) => {
      e.preventDefault();
      if (checkVal.value.length <= maxlength) {
        currentVal.innerText = checkVal.value.length;
      } else {
        e.target.value = e.target.value.slice(0, maxlength);
      }
    });
  }

  const filterItem = document.querySelectorAll(".filter__item");
  const filterLabel = document.querySelectorAll(".filter__label");
  const filterConst = document.querySelectorAll(".filter__cont");

  // filterLabel.forEach(function (item, i) {
  //   item.addEventListener("click", function (evt) {
  //     evt.preventDefault();
  //     filterItem[i].classList.toggle("filter__item--active");
  //   });
  // });
  // const calendar = document.querySelectorAll(".calendar__content > li");
  // const calendarContent = document.querySelectorAll(".calendar__content__desc");

  if (filterItem.length > 0) {
    filterLabel.forEach((btn, index) => {
      filterConst[index].style.height = "0px";
      btn.addEventListener("click", () => {
        if (filterItem[index].classList.contains("filter__item--active")) {
          filterItem[index].classList.remove("filter__item--active");
          filterConst[index].style.height = "0px";
        } else {
          // for (let fac of filterItem) {
          //   fac.classList.remove("filter__item--active");
          // }
          // for (let facCon of filterConst) {
          //   facCon.style.height = "0px";
          // }
          let height = filterConst[index].scrollHeight;
          // height = 0;
          filterConst[index].style.height = height + "px";

          filterItem[index].classList.add("filter__item--active");
        }
      });
    });
  }

  const allAnn = document.querySelector(".sidebar__sec-header");
  const filterHeader = document.querySelector(".filter__header");
  const annList = document.querySelector(".sidebar__menu--ann");
  const filterForm = document.querySelector(".filter__form");

  if (window.innerWidth < 1200 && filterForm) {
    allAnn.addEventListener("click", function (evt) {
      if (annList.classList.contains("sidebar--active")) {
      } else {
        filterForm.classList.remove("sidebar--active");
        annList.classList.add("sidebar--active");
        annList.style.display = "block";
        filterForm.style.display = "none";
      }
    });
    filterHeader.addEventListener("click", function (evt) {
      if (filterForm.classList.contains("sidebar--active")) {
      } else {
        filterForm.classList.add("sidebar--active");
        annList.classList.remove("sidebar--active");
        filterForm.style.display = "block";
        annList.style.display = "none";
      }
    });
  }
}
