"use strict";

const button = document.querySelector(".btn");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class based on if the media query matches
function toggleDarkMode(state) {
  console.log(state);
  if (state === true) {
    document.querySelector("#toggle").innerHTML = "toggle_on";
    document.querySelector(".dark").classList.remove("material-icons-outlined");
    document.querySelector(".dark").classList.add("material-icons");
  } else {
    document.querySelector("#toggle").innerHTML = "toggle_off";
    document.querySelector(".light").classList.remove("material-icons-outlined");
    document.querySelector(".light").classList.add("material-icons");
  }
  document.documentElement.classList.toggle("dark-mode", state);
}

// Initial setting
toggleDarkMode(useDark.matches);

// Listen for changes in the OS settings
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click
button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  if (document.documentElement.classList.contains("dark-mode")) {
    console.log("dark mode on");
    document.querySelector("#toggle").innerHTML = "toggle_on";
    document.querySelector(".dark").classList.remove("material-icons-outlined");
    document.querySelector(".dark").classList.add("material-icons");
    document.querySelector(".light").classList.add("material-icons-outlined");
    document.querySelector(".light").classList.remove("material-icons");
  } else {
    console.log("light mode on");
    document.querySelector("#toggle").innerHTML = "toggle_off";
    document.querySelector(".light").classList.remove("material-icons-outlined");
    document.querySelector(".light").classList.add("material-icons");
    document.querySelector(".dark").classList.add("material-icons-outlined");
    document.querySelector(".dark").classList.remove("material-icons");
  }
});

window.addEventListener("DOMContentLoaded", load);

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

window.addEventListener("DOMContentLoaded", load);

function load() {
  console.log("start");
  hamburger.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
