import calcScroll from "./calcScroll";

function popap({ promoBtn, popupClose, popUp }) {
  const btnOpen = document.querySelector(promoBtn);
  const btnClose = document.querySelector(popupClose);
  const popup = document.querySelector(popUp);
  const overflow = document.body;
  const scrolling = calcScroll();

  btnOpen.addEventListener("click", () => {
    popup.classList.add("active");
    overflow.style.overflow = "hidden";
    overflow.style.paddingRight = `${scrolling}px`;
  });

  btnClose.addEventListener("click", () => {
    popup.classList.remove("active");
    overflow.style.overflow = "";
    overflow.style.paddingRight = "0px";
  });
}

export default popap;
