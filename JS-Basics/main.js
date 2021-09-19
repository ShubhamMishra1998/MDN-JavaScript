"use strict";
const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");
const btn = document.querySelector("button");
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2-icon.jpg");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };
function setUserName() {
  let userName = prompt("enter your name");
  if (!userName) setUserName();
  localStorage.setItem("name", userName);
  myHeading.textContent = `Mozilla is cool ${userName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
btn.onclick = function () {
  setUserName();
};
