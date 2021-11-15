export function calling(){

    const buttonCalling = document.querySelector('.payment-method__rate');
    const buttonCheck = document.querySelectorAll('.table-calling')
    const hiddenBlock = document.querySelector('.chapter-choise');
    const arrowUp = document.querySelector('.arow-down');
    

    buttonCalling.onclick = function(){
      hiddenBlock.classList.toggle("chapter-choise--active");
      arrowUp.classList.toggle("arow-down--active");
    };

    buttonCheck.forEach((item) => {
      item.addEventListener('click', () => {        

      if (hiddenBlock.classList.contains("chapter-choise--active")) {
          hiddenBlock.classList.remove("chapter-choise--active");

        } else {
          hiddenBlock.classList.toggle("chapter-choise--active");
        }
      });
  });


};