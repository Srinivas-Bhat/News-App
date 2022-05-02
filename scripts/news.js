// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

let navigation = document.querySelector("#navbar");
navigation.innerHTML = navbar();

let news = JSON.parse(localStorage.getItem("news"));
console.log(news);

import { appendnews } from "./fetch.js";

let place = document.querySelector("#detailed_news");
appendnews(news, place);

const search = (k) => {
  if (k.key === "Enter") {
    let input = document.querySelector("#search_input").value;
    localStorage.setItem("value", input);
    window.location.href = "search.html";
  }
};

document.querySelector("#search_input").addEventListener("keydown", search);
