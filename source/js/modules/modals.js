export function modals(){

    const addItem = document.querySelector('.header__add-item');
    const enter = document.querySelector('.header__entry');

    const closeModalAdd = document.querySelector('.add__close');
    const closeModalEnter = document.querySelector('.enter__close');

  
    const modalAdd = document.querySelector('.add');
    const modalEnter = document.querySelector('.enter');

  // НЕ ОТКРЫВАЮТСЯ!!!!!!!!
  
  // add

    addItem.onclick = function(){
      modalAdd.classList.add("add--active");
      disableScroll();
    };

    closeModalAdd.onclick = function(){
      modalAdd.classList.remove("add--active");
      enableScroll();
    };
  
  // enter

  enter.onclick = function(){
    modalEnter.classList.add("enter--active");
    disableScroll();
  };
    
  closeModalEnter.onclick = function(){
    modalAdd.classList.remove("enter--active");
    enableScroll();
  };
}