/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generator() {
  let theExcuse = "";
  let who = ["Me ", "My mom ", "My dad ", "My friend "];
  let did = ["jump ", "sing ", "cook ", "walk "];
  let what = ["my sandwich ", "my computer ", "my phone ", "my face "];
  let when = ["today", "yesterday", "an hour ago", "a year ago"];

  let number1 = Math.floor(Math.random() * 4);
  let number2 = Math.floor(Math.random() * 4);
  let number3 = Math.floor(Math.random() * 4);
  let number4 = Math.floor(Math.random() * 4);

  theExcuse = who[number1] + did[number2] + what[number3] + when[number4];

  return theExcuse;
}
document.write(generator());
console.log(generator);
