const navBar = document.createElement('nav');
navBar.className = "d-flex jc-space-between ac-center"
const brandName = document.createElement('h1');
brandName.innerText ="Emsam";
navBar.appendChild(brandName);
const ul = document.createElement("ul");
ul.className = 'd-flex';
let navText = ["Home", "Menu", "Contact"]
for (let i = 1; i <= 3; i++){
    let li = document.createElement("li");  
    li.className = "nav-links";
    li.innerText = navText[i-1]
    ul.appendChild(li);
}
navBar.appendChild(ul);
export default navBar;