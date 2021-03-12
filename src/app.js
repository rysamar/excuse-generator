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

  let number = Math.floor(Math.random() * 4);

  theExcuse =
    theExcuse + who[number] + did[number] + what[number] + when[number];

  return theExcuse;
}
document.write(generator());
