export function calling(){


      // ТАБЛИЦА

      const buttonCalling = document.querySelector('.payment-method__rate'); //add
      const buttonCallingInfo = document.querySelector('.payment-method__rate--info'); //add info
    
      const hiddenBlock = document.querySelector('.adv__item__wrap'); //table
      const arrowUp = document.querySelector('.arow-down'); // arrow
      const hiddenInfo = document.querySelector('.adv-info');// info
    
    if (hiddenBlock) {
      buttonCalling.addEventListener('click', () => {
        hiddenBlock.classList.toggle("adv__item__wrap--active");
        arrowUp.classList.toggle("arow-down--active");
      });
    }
      if (hiddenInfo) {
        buttonCallingInfo.addEventListener('click', () => {
          hiddenInfo.classList.toggle("adv-info--active");
          arrowUp.classList.toggle("arow-down--active");
        });
      }
    
      // ДОБАВИТЬ ОБЪЯВЛЕНИЕ
    
      const commentMax = document.querySelector(".form__card--maxy");
    
      const realEstate = document.querySelector('#real-estate');
      const realEstateBlock = document.querySelector('.real-estate');
    
    if(realEstate) {
      realEstate.addEventListener('click', () => {
        realEstateBlock.style.display = 'block';
        commentMax.style.display = 'block';
      });
    };

    const building = document.querySelector('#building');
    const buildingBlock = document.querySelector('.building');
  
  if(building) {
    building.addEventListener('click', () => {
      buildingBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

    const transport = document.querySelector('#transport');
    const transportBlock = document.querySelector('.transport');
  
  if(transport) {
    transport.addEventListener('click', () => {
      transportBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const electronics = document.querySelector('#electronics');
  const electronicsBlock = document.querySelector('.electronics');

  if(electronics) {
    electronics.addEventListener('click', () => {
      electronicsBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const family = document.querySelector('#family');
  const familyBlock = document.querySelector('.family');

  if(family) {
    family.addEventListener('click', () => {
      familyBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const home = document.querySelector('#home');
  const homeBlock = document.querySelector('.home');

  if(home) {
    home.addEventListener('click', () => {
      homeBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const hobby = document.querySelector('#hobby');
  const hobbyBlock = document.querySelector('.hobby');

  if(hobby) {
    hobby.addEventListener('click', () => {
      hobbyBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const pets = document.querySelector('#pets');
  const petsBlock = document.querySelector('.pets');

  if(pets) {
    pets.addEventListener('click', () => {
      petsBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const lostAndFound = document.querySelector('#lost-and-found');
  const lostAndFoundBlock = document.querySelector('.lost-and-found');

  if(lostAndFound) {
    lostAndFound.addEventListener('click', () => {
      lostAndFoundBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };

  const garden = document.querySelector('#garden');
  const gardenBlock = document.querySelector('.garden');

  if(garden) {
    garden.addEventListener('click', () => {
      gardenBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };


  const work = document.querySelector('#work');
  const workBlock = document.querySelector('.work');
  const hiddenWorkBlock = document.querySelector('.work__hidden-blok');


  if(work) {
    work.addEventListener('click', () => {
      workBlock.style.display = 'block';
      commentMax.style.display = 'block';
      hiddenWorkBlock.style.display = 'block';
    });
  };

  const busines = document.querySelector('#busines');
  const businesBlock = document.querySelector('.busines');

  if(busines) {
    busines.addEventListener('click', () => {
      businesBlock.style.display = 'block';
      commentMax.style.display = 'block';
    });
  };




  

  // ADD NUMBER

  var d = document;
  d.querySelector('.form__add-number').addEventListener('click', function(){
      var addNumber = d.createElement('div');
      addNumber.className = 'form__numbers-create';
      addNumber.innerHTML = '<input class="form__numbers" type="tel" name="asv-number" placeholder="Номер телефона">';
      d.querySelector('.form__card-addNum').appendChild(addNumber);
  }, false);

};