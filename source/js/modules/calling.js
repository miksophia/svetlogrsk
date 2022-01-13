export function calling() {
  // ТАБЛИЦА

  const buttonCalling = document.querySelector(".payment-method__rate"); //add
  const buttonCallingInfo = document.querySelector(
    ".payment-method__rate--info"
  ); //add info

  const hiddenBlock = document.querySelector(".adv__item__wrap"); //table
  const arrowUp = document.querySelector(".arow-down"); // arrow
  const hiddenInfo = document.querySelector(".adv-info"); // info

  if (hiddenBlock) {
    buttonCalling.addEventListener("click", () => {
      hiddenBlock.classList.toggle("adv__item__wrap--active");
      arrowUp.classList.toggle("arow-down--active");
    });
  }
  if (hiddenInfo) {
    buttonCallingInfo.addEventListener("click", () => {
      hiddenInfo.classList.toggle("adv-info--active");
      arrowUp.classList.toggle("arow-down--active");
    });
  }

  // ДОБАВИТЬ ОБЪЯВЛЕНИЕ

  const commentMax = document.querySelector(".form__card--maxy");

  var massOne = document.querySelectorAll(".block--hidden");
  var massTwo = document.querySelectorAll(".card-click");

  let removeActive = function (array, activeClass) {
    array.forEach(function (item) {
      item.classList.remove(activeClass);
    });
    return;
  };
  massOne.forEach(function (item, i) {
    item.addEventListener("click", function (evt) {
      removeActive(massTwo, "card-click--active");
      removeActive(massOne, "block--active");
      commentMax.style.display = "block";
      if (massOne[i].classList.contains("block--active")) {
      } else {
        massOne[i].classList.add("block--active");
        massTwo[i].classList.add("card-click--active");
      }
    });
  });

  // const workHiddenBlok = document.querySelector('.work__hidden-blok');
  // const workBlock = document.querySelector('.work');
  //
  // if (workBlock.classList.contains("card-click--active")) {
  //   workHiddenBlok.style.display = 'block';
  // };

  // ADD NUMBER
  let pdl = document.querySelector(".form__add-number");
  if (pdl) {
    var d = document;
    d.querySelector(".form__add-number").addEventListener(
      "click",
      function () {
        var addNumber = d.createElement("div");
        addNumber.className = "form__numbers-create";
        addNumber.innerHTML =
          '<input class="form__numbers" type="tel" name="asv-number" placeholder="Номер телефона">';
        d.querySelector(".form__card-addNum").appendChild(addNumber);
      },
      false
    );
  }
}
