// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import { navbar } from "../components/navbar.js";

let navi = document.querySelector("#navbar")
navi.innerHTML = navbar();

let query = localStorage.getItem("value");
console.log(query);


import {searchNews} from "./fetch.js";
import {append} from "./fetch.js";


searchNews(query).then((data) => {
    console.log(data.articles);
    let place = document.querySelector("#results");
    append(data.articles, place);
})

const search = (k) => {
    if(k.key === "Enter") {
        let input = document.querySelector("#search_input").value;
        localStorage.setItem("value", input);
        window.location.href = "search.html";
    }
}

document.querySelector("#search_input").addEventListener("keydown", search);