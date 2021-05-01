//jshint esversion:6

//function select element
const selectElement = (node) => document.querySelector(node);

const menuOpen = document.querySelector(".open");
const navList = document.querySelector(".nav-list");

menuOpen.addEventListener("click", function(){
 navList.classList.add('active');
});
 
selectElement(".close").addEventListener("click", function(){
 navList.classList.remove('active');
});
 