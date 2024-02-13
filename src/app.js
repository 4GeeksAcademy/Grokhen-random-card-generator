/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    `<img src="src/assets/img/reina.png" />`,
    `<img src="src/assets/img/rey.png" />`
  ];
  const cardSuits = ["♦", "♥", "♠", "♣"];

  document.querySelector("#button").addEventListener("click", () => {
    let randomNumber =
      cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
    let randomCardSuit =
      cardSuits[Math.floor(Math.random() * cardSuits.length)];
    document.querySelector("#suitTop").innerHTML = randomCardSuit;
    document.querySelector("#suitBotton").innerHTML = randomCardSuit;
    document.querySelector("#number").innerHTML = randomNumber;
    if (randomCardSuit === "♦" || randomCardSuit === "♥") {
      document.querySelector("#suitTop").style.color = "red";
      console.log("rojo1");
      document.querySelector("#suitBotton").style.color = "red";
      console.log("rojo2");
    } else {
      document.querySelector("#suitTop").style.color = "black";
      console.log("negro1");
      document.querySelector("#suitBotton").style.color = "black";
      console.log("negro2");
    }
  });
};
