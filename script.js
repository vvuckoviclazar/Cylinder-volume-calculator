"use strict";

const radius = document.querySelector(".radius");
const height = document.querySelector(".height");
const form = document.querySelector("form");
const result = document.querySelector(".result");

let radiusNumber;
let heightNumber;
let resultNumber;
let p = 3.14;

radius.addEventListener("input", (e) => {
  radiusNumber = e.target.value;
});

height.addEventListener("input", (e) => {
  heightNumber = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultNumber = radiusNumber * radiusNumber * p * heightNumber;
  result.value = resultNumber;
});
