export function calling(){

    const buttonCalling = document.querySelector('.payment-method__rate'); //add
    const buttonCheck = document.querySelectorAll('.table-calling') // radio
    const hiddenBlock = document.querySelector('.chapter-choise'); //table
    const hiddenInfo = document.querySelector('.adv-info'); // info sdv
    const arrowUp = document.querySelector('.arow-down'); // arrow
    

    buttonCalling.onclick = function(){
      hiddenBlock.classList.toggle("chapter-choise--active");
      arrowUp.classList.toggle("arow-down--active");
    };


    buttonCalling.onclick = function(){
      hiddenInfo.classList.toggle("adv-info--active");
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