function menuBarChange(x){
    x.classList.toggle("change");
}
//We can work on this later
//This is JS for the nav bar
const navURLs = [
    {name: "BTG", url: "index.html"},
    {name: "National Parks", url: "parks.html"}, 
    {name: "Mountains", url: "mountains.html"},
];

//helper/factory function makes a new DOM Element 
function navLink(item){
    document.createElement("a")
    a.href = item.url;
     a.innerHTML = item.name;
    return a;
}
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navL");
    //innerHTML += appending strings from js template ``
    //navURLs.forEach(item => nav.innerHTML += `<a href="${item.url}">${item.name}</a>`)
    navURLs.forEach(item => nav.appendChild(navLink(item)));
});