function menuBarChange(x) {
    x.classList.toggle("change");
}
//We can work on this later
//This is JS for the nav bar
const navURLs = [
    { name: "BTG", url: "index.html" },
    { name: "National Parks", url: "parks.html" },
    { name: "Mountains", url: "mountains.html" },
];

//helper/factory function makes a new DOM Element 
function navLink(item) {
    const div = document.createElement("div");
    div.classList.add("nav-block");
    const a = document.createElement("a");
    a.href = item.url;
    div.innerHTML = item.name;
    a.appendChild(div);
    return a;
}
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    //innerHTML += appending strings from js template ``
    //navURLs.forEach(item => nav.innerHTML += `<a href="${item.url}">${item.name}</a>`)
    navURLs.forEach(item => nav.appendChild(navLink(item)));
});