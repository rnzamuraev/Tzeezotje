import calcScroll from "./calcScroll.js";

function menu({
  menuOpen,
  menuClose,
  popupMenu,
  menuLinks,
}) {
  const hamburgerIcon = document.querySelector(menuOpen);
  const menu = document.querySelector(popupMenu);
  const closeElem = document.querySelector(menuClose);
  const menuLink = document.querySelectorAll(menuLinks);
  const overflow = document.body;
  const scrolling = calcScroll();

  hamburgerIcon.addEventListener("click", () => {
    menu.classList.add("active");
    overflow.style.overflow = "hidden";
    overflow.style.paddingRight = `${scrolling}px`;
    hamburgerIcon.style.right = `${scrolling + 30}px`;
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
    overflow.style.overflow = "";
    overflow.style.paddingRight = "0px";
    hamburgerIcon.style.right = "30px";
  });

  // menuLink.addEventListener("click", () => {
  //   menu.classList.remove("active");
  // });
  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      overflow.style.overflow = "";
      overflow.style.paddingRight = "0px";
      hamburgerIcon.style.right = "30px";
    });
  });
}

export default menu;
