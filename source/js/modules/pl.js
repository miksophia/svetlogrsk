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

  const sideBarItem = document.querySelector(".sidebar__item--active");
  const sideBarArrow = document.querySelector(".sidebar__item-arrow");
  const sideBarMenu = document.querySelector(".sidebar__menu--ad");

  if (sideBarMenu) {
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
}
