export default class BurgerMenu {

  openMenu(menu, backDrop) {
    menu.style.right = '0vw';
    menu.style.transform = 'translateX(0vw)';
    backDrop.style.display = 'flex';
  }

  closeMenu(menu, backDrop) {
    menu.style.transform = 'translateX(100vw)';
    backDrop.style.display = 'none';
  }
  
  setEvents() {
    const btnMenu = document.querySelector('.header__burgerMenu');
    const btnClose = document.querySelector('.header__burgerClose');
    const menu = document.querySelector('.header__burgerMenuBar');
    const backDrop = document.querySelector('.header__backDrop');

    btnMenu.addEventListener("click", () => {
      this.openMenu(menu, backDrop);
    })

    btnClose.addEventListener("click", () => {
      this.closeMenu(menu, backDrop);
    })

    backDrop.addEventListener("click", () => {
      this.closeMenu(menu, backDrop);
    })
  }
};
