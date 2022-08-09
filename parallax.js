const parallax = document.querySelector(".parallax");
const navbar = document.querySelector(".navbar");

window.onscroll = () => {
 let scrollTop = document.documentElement.scrollTop;

 navbar.style.top = scrollTop * 0.3 + "px";
 parallax.style.backgroundPositionY = scrollTop * 0.3 + "px";
 console.log(scrollTop);
};
