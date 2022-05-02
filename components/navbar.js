// function navbar() {
//   return `<h2><a href="index.html">News App</a></h2>
//   <div id="search-div">
//     <input type="text" id="search_input" />
//   </div>`;
// }


let navbar = () => {
    return `<h2><a href="index.html">News App</a></h2>
    <div id="search-div">
      <input type="text" id="search_input" />
    </div>`;
};

let sidebar = () => {
    return `      <div id="sidebar">
    <h2>Countries</h2>
    <h3 id="in">India</h3>
    <h3 id="us">USA</h3>
    <h3 id="ch">China</h3>
    <h3 id="uk">UK</h3>
    <h3 id="nz">Newzeland</h3>
  </div>
  <div id="results"></div>`;
};

export{sidebar}


export { navbar };
