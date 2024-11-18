const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const sideMenu = document.querySelector(".navbar");
const darkMode=document.querySelector(".dark-mode")
const lightMode=document.querySelector(".light-mode")
const body=document.querySelector("body")
// select all a tags
const links = document.querySelectorAll("a");
const lis=document.querySelectorAll(".links")

openMenu.addEventListener("click", function () {
  sideMenu.style.display = "block";
  // sideMenu.style.right="100%";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
  sideMenu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});

// add event listener to links
lis.forEach((menulink) => {
  menulink.addEventListener("click", function () {
    sideMenu.style.display = "none";
    closeMenu.style.display="none"
    openMenu.style.display = "block";
  })
})
darkMode.addEventListener("click",function(){
  body.style.backgroundColor="#333"
  body.style.color="#fff"
  //set color for links
  links.forEach(link=>link.style.color="#fff")
  darkMode.style.display="none"
  lightMode.style.display="block"
})
lightMode.addEventListener("click",function(){
  body.style.backgroundColor="#fff"
  body.style.color="#333"
  links.forEach(link=>link.style.color="#333")
  lightMode.style.display="none"
  darkMode.style.display="block"
  })
