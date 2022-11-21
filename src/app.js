/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit("♦"));
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let iNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[iNumbers];
};

let generateRandomSuit = () => {
  let figures = ["♦", "♥", "♠", "♣"];
  let numfig = Math.floor(Math.random() * 3);
  let figure = figures[numfig];
  let color = numfig <= 1 ? "red" : "black";

  document.querySelectorAll(".figure").forEach(elm => (elm.innerHTML = figure));
};
