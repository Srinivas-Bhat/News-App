// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar } from "../components/navbar.js";

let navigation = document.querySelector("#navbar")
navigation.innerHTML = navbar();

import {sidebar } from "../components/navbar.js";

let sidebars = document.querySelector("#block-2");
sidebars.innerHTML = sidebar();


import {searchImages} from "./fetch.js";
import { append} from "./fetch.js";


let countries = document.getElementById("sidebar").children;
console.log(countries);

// let place = document.querySelector("#results")
// append()
function cSearch1 () {
    searchImages('in').then((data) => {
        console.log(data.articles);
        let place = document.querySelector("#results");
        append(data.articles, place);
    })
}
cSearch1();

function cSearch () {
    console.log(this.id);
    searchImages(this.id).then((data) => {
        console.log(data.articles);
        let place = document.querySelector("#results");
        place.innerHTML = null;
        append(data.articles, place);
    })
}

for(let el of countries) {
    el.addEventListener("click", cSearch);
}




// searching functionality*************



const search = (k) => {
    if(k.key === "Enter") {
        let input = document.querySelector("#search_input").value;
        localStorage.setItem("value", input);
        window.location.href = "search.html";
    }
}

document.querySelector("#search_input").addEventListener("keydown", search);
















// let searchImages = async (value) => {
//     try{
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);
//         let data = await res.json();
//         // console.log(data);
//         return data;
//     }
//     catch(err) {
//         console.log(err);
//     }
// }