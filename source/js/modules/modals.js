
export function modals(){

    const addItem = document.querySelector('.header__add-item');

  // MODAL 

  // add

  const modalAdd = document.querySelector('.add');
  const closeModalAdd = document.querySelector('.add__close');

    addItem.onclick = function(){
      modalAdd.classList.add("add--active");
    };

    closeModalAdd.onclick = function(){
      modalAdd.classList.remove("add--active");
      
    };
  
  // enter

  const enter = document.querySelector('.header__entry');

  const closeModalEnter = document.querySelector('.enter__close');
  const modalEnter = document.querySelector('.enter');

  if(enter) {
    enter.addEventListener('click', () => {
      modalEnter.classList.add("enter--active");
    });
  }

  if(closeModalEnter) {
    closeModalEnter.addEventListener('click', () => {
      modalEnter.classList.remove("enter--active");
    });
  }

  const newUser = document.querySelector('.modal__link-registration');
  const registration = document.querySelector('.registration');
  const closeRegistration = document.querySelector('.registration__close');

  if(newUser) {
    newUser.addEventListener('click', () => {
      registration.classList.add('registration--active');
      modalEnter.classList.remove("enter--active");

    }); // ?!?!
  }

  


  const forgotPass = document.querySelector('.modal__link-fotgot');


}