import "../index";
import "../css/style";
import menu from "./components/menu";
import swiper from "./components/slider";
import popap from "./components/popap";
import form from "./components/form";

document.addEventListener("DOMContentLoaded", () => {
  menu({
    menuOpen: ".hamburger",
    menuClose: ".menu__close",
    popupMenu: ".menu",
    menuLinks: ".menu__link",
  });
  swiper;
  popap({
    promoBtn: ".promo__btn",
    popupClose: ".popup__close",
    popUp: ".popup",
  });
  form(".popup__form");
});
