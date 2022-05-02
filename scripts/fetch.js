
let searchImages = async (value) => {
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);
        let data = await res.json();
        // console.log(data);
        return data;
    }
    catch(err) {
        console.log(err);
    }
}

let searchNews = async (query) => {
    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let data = await res.json();
        // console.log(data);
        return data;
    }
    catch(err) {
        console.log(err);
    }
}

let append = (data, place) => {
    data.forEach(({urlToImage, title, description}) => {
        let box = document.createElement("div");
        box.setAttribute("id", "news");
        let data = {
            urlToImage,
            title,
            description,
        }
        box.onclick =() => {
            showNews(data);
        };

        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("class", "images")

        let heading = document.createElement("h3");
        heading.innerText = title;

        let info = document.createElement("p");
        info.innerText = description;

        box.append(image, heading, info);

        place.append(box);
    })
}

const showNews = (a) => {
    localStorage.setItem("news", JSON.stringify(a));
    window.location.href = "news.html";
}


let appendnews = (data, place) => {
   
        let box = document.createElement("div");
        // box.setAttribute("id", "news");
        // let data = {
        //     urlToImage,
        //     title,
        //     description,
        // }
        // box.onclick =() => {
        //     showNews(data);
        // };

        let image = document.createElement("img");
        image.src = data.urlToImage;
        image.setAttribute("class", "images")

        let heading = document.createElement("h3");
        heading.innerText = data.title;

        let info = document.createElement("p");
        info.innerText = data.description;

        box.append(image, heading, info);

        place.append(box);
    
}

export {appendnews};
export {searchImages}; 
export {searchNews};
export { append};