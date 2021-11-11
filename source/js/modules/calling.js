export function calling(){

    const buttonCalling = document.querySelector('.payment-method__rate');
    const buttonCheck = document.querySelectorAll('.table-calling')
    const hiddenBlock = document.querySelector('.add-org-choise');
    const arrowUp = document.querySelector('.arow-down');
    

    buttonCalling.onclick = function(){
      hiddenBlock.classList.toggle("add-org-choise--active");
      arrowUp.classList.toggle("arow-down--active");
    };

    buttonCheck.forEach((item) => {
      item.addEventListener('click', () => {        

      if (hiddenBlock.classList.contains("add-org-choise--active")) {
          hiddenBlock.classList.remove("add-org-choise--active");

        } else {
          hiddenBlock.classList.toggle("add-org-choise--active");
        }
      });
  });

};