export function calling(){

    // ТАБЛИЦА
  
    const buttonCalling = document.querySelector('.payment-method__rate'); //add
    const buttonCallingInfo = document.querySelector('.payment-method__rate payment-method__rate--info'); //add info

    const hiddenBlock = document.querySelector('.adv__item__wrap'); //table
    const arrowUp = document.querySelector('.arow-down'); // arrow
    const hiddenInfo = document.querySelector('.adv-info');// info
    

    buttonCalling.addEventListener('click', () => {
        hiddenBlock.classList.toggle("adv__item__wrap--active");  
        arrowUp.classList.toggle("arow-down--active");
    });

    
    buttonCallingInfo.addEventListener('click', () => {
        hiddenInfo.classList.toggle("adv-info--active");
        arrowUp.classList.toggle("arow-down--active");
    }); // ?!?!



    const tableCalling = document.querySelectorAll('.table-calling'); // радио кнопки вызова таблицы с тарифами
    
    tableCalling.forEach((item) => {
      item.addEventListener('click', () => {
        hiddenBlock.classList.toggle("adv__item__wrap--active");  
        arrowUp.classList.toggle("arow-down--active");
      });
    }); // ?!?!


  // ДОБАВИТЬ ОБЪЯВЛЕНИЕ

  const commentMax = document.querySelector(".form__card--maxy");

  const realEstate = document.querySelector('#real-estate');
  const realEstateBlock = document.querySelector('.real-estate');


  realEstate.addEventListener('click', () => {
    realEstateBlock.style.display = 'block';
    commentMax.style.display = 'block';
  });


};