export default class BurgerMenu {

  openMenu(menu) {
    menu.style.display = "flex";
  }

  closeMenu(menu) {
    menu.style.display = "none";
  }
  
  setEvents() {
    const btnMenu = document.querySelector('.header__burgerMenu');
    const btnClose = document.querySelector('.header__burgerClose');
    const menu = document.querySelector('.header__burgerMenuBar');

    btnMenu.addEventListener("click", () => {
      this.openMenu(menu);
    })

    btnClose.addEventListener("click", () => {
      this.closeMenu(menu);
    })
  }
};
