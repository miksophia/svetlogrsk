export function modals() {
  // const addItem = document.querySelector(".header__add-item");
  //
  // // MODAL
  //
  // // add
  //
  // const modalAdd = document.querySelector(".add");
  // const closeModalAdd = document.querySelector(".add__close");
  //
  // addItem.onclick = function () {
  //   modalAdd.classList.add("add--active");
  //   document.body.style.overflow = "hidden";
  // };
  //
  // modalAdd.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   modalAdd.classList.remove("add--active");
  //   // modalAdd.classList.remove("enter--active");
  //   document.body.style.overflow = "";
  // });

  const modalTrigger = document.querySelectorAll(".header__add-item"),
    modal = document.querySelector(".add"),
    modalCloseBtn = document.querySelector(".add__close");

  if (modal != null) {
    modalTrigger.forEach((btn) => {
      btn.addEventListener("click", function () {
        modal.classList.add("add--active");
        modal.classList.remove("hide");
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = "hidden";
      });
    });

    function closeModal() {
      modal.classList.add("hide");
      modal.classList.remove("add--active");
      // Либо вариант с toggle - но тогда назначить класс в верстке
      document.body.style.overflow = "";
    }

    modalCloseBtn.addEventListener("click", () => {
      closeModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape" && modal.classList.contains("add--active")) {
        closeModal();
      }
    });

    // enter

    const enter = document.querySelector(".header__entry");

    const closeModalEnter = document.querySelector(".enter__close");
    const modalEnter = document.querySelector(".enter");

    if (enter) {
      enter.addEventListener("click", () => {
        modalEnter.classList.add("enter--active");
        document.body.style.overflow = "hidden";
      });
    }

    if (closeModalEnter) {
      closeModalEnter.addEventListener("click", () => {
        modalEnter.classList.remove("enter--active");
        document.body.style.overflow = "";
      });
    }

    // registration

    const newUser = document.querySelector(".modal__link-registration");
    const registration = document.querySelector(".registration");
    const closeRegistration = document.querySelector(".registration__close");
    const closeRegistrationButton = document.querySelector(
      ".modal__button-cancel"
    );

    if (newUser) {
      newUser.addEventListener("click", () => {
        registration.classList.add("registration--active");
        modalEnter.classList.remove("enter--active");
      });
    }

    if (closeRegistration) {
      closeRegistration.addEventListener("click", () => {
        registration.classList.remove("registration--active");
        document.body.style.overflow = "";
      });
    }

    if (closeRegistrationButton) {
      closeRegistrationButton.addEventListener("click", () => {
        registration.classList.remove("registration--active");
        document.body.style.overflow = "";
      });
    }

    // recovery

    const recoveryPass = document.querySelector(".modal__link-fotgot");
    const recoveryModal = document.querySelector(".recovery");
    const recoveryClose = document.querySelector(".recovery__close");

    if (recoveryPass) {
      recoveryPass.addEventListener("click", () => {
        recoveryModal.classList.add("recovery--active");
        modalEnter.classList.remove("enter--active");
      });
    }

    if (recoveryClose) {
      recoveryClose.addEventListener("click", () => {
        recoveryModal.classList.remove("recovery--active");
        document.body.style.overflow = "";
      });
    }
  }
  // УДАЛЕНИЕ ОБЪЯВЛЕНИЙ, ВАКАНСИЙ, УСЛУГ И Т.Д.

  const deleteAdv = document.querySelector(".delete__adv");
  const deleteAdvButton = document.querySelector(".delete__adv-button");
  const deleteAdvClose = document.querySelector(".delete__adv-cancel");

  const deletedAdv = document.querySelector(".deleted__adv");
  const deletedClose = document.querySelector(".deleted__adv__close");

  if (deleteAdvButton) {
    deleteAdvButton.addEventListener("click", () => {
      deleteAdv.classList.remove("delete__adv--active");
      deletedAdv.classList.add("deleted__adv--active");
    });
  }

  if (deleteAdvClose) {
    deleteAdvClose.addEventListener("click", () => {
      deleteAdv.classList.remove("delete__adv--active");
    });
  }

  if (deletedClose) {
    deletedClose.addEventListener("click", () => {
      deletedAdv.classList.remove("deleted__adv--active");
    });
  }
}
