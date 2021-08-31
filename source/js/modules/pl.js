export function pl() {
  const BtnOrgn = document.querySelector(".sidebar__orgn");
  const BtnServ = document.querySelector(".sidebar__serv");
  let MenuOrg = document.querySelector(".sidebar__menu--orgn");
  let MenuServ = document.querySelector(".sidebar__menu--serv");
  const HedOrgn = document.querySelector(".companies__header--orgn");
  const HedServ = document.querySelector(".companies__header--serv");
  const ListOrgn = document.querySelector(".companies__list__wrap");
  const ListServ = document.querySelector(".serv__list__wrap");
  const MainComp = document.querySelector(".companies");
  function OrgAct() {
    MenuServ.style.display = "none";
    MenuOrg.style.display = "block";
    HedServ.style.display = "none";
    HedOrgn.style.display = "flex";
    ListServ.style.display = "none";
    ListOrgn.style.display = "block";
  }
  function ServAct() {
    MenuOrg.style.display = "none";
    MenuServ.style.display = "block";
    HedOrgn.style.display = "none";
    HedServ.style.display = "flex";
    ListOrgn.style.display = "none";
    ListServ.style.display = "block";
  }
  if (MainComp) {
    if (BtnOrgn.classList.contains("sidebar__header--active")) {
      OrgAct();
    }
    if (BtnServ.classList.contains("sidebar__header--active")) {
      ServAct();
    }
    BtnServ.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (BtnServ.classList.contains("sidebar__header--active")) {
        ServAct();
      } else {
        BtnServ.classList.add("sidebar__header--active");
        BtnOrgn.classList.remove("sidebar__header--active");
        ServAct();
      }
    });
    BtnOrgn.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (BtnOrgn.classList.contains("sidebar__header--active")) {
        OrgAct();
      } else {
        BtnOrgn.classList.add("sidebar__header--active");
        BtnOrgn.classList.add("fancy");
        BtnServ.classList.remove("sidebar__header--active");
        OrgAct();
      }
    });
  }

  const BurgerBtn = document.querySelector(".main-header__burger");
  const BurgerMenu = document.querySelector(".header__nav nav");
  const BurgerMask = document.querySelector(".mask");

  BurgerBtn.addEventListener("click", function (evt) {
    if (BurgerBtn.classList.contains("main-header__burger--active")) {
      evt.preventDefault();
      BurgerBtn.classList.remove("main-header__burger--active");
      BurgerMenu.classList.remove("header-menu--active");
      BurgerMask.style.display = "none";
    } else {
      BurgerBtn.classList.add("main-header__burger--active");
      BurgerMenu.classList.add("header-menu--active");
      BurgerMask.style.display = "block";
    }
  });

  BurgerMask.addEventListener("click", function (evt) {
    evt.preventDefault();
    BurgerBtn.classList.remove("main-header__burger--active");
    BurgerMenu.classList.remove("header-menu--active");
    BurgerMask.style.display = "none";
  });

  const dropBtn = document.querySelectorAll(".drop");
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
}
