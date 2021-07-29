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
        BtnServ.classList.remove("sidebar__header--active");
        OrgAct();
      }
    });
  }
}
