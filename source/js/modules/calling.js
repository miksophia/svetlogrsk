export function calling(){

    const buttonCalling = document.querySelector('.payment-method__rate');
    const buttonCheck = document.querySelectorAll('.table-calling')
    const hiddenBlock = document.querySelector('.organization-choise');
    const arrowUp = document.querySelector('.arow-down');
    

    buttonCalling.onclick = function(){
      hiddenBlock.classList.toggle("organization-choise--active");
      arrowUp.classList.toggle("arow-down--active");
    };

    buttonCheck.forEach((item) => {
      item.addEventListener('click', () => {        

      if (hiddenBlock.classList.contains("organization-choise--active")) {
          hiddenBlock.classList.remove("organization-choise--active");

        } else {
          hiddenBlock.classList.toggle("organization-choise--active");
        }
      });
  });


};