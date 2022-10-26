function mountainImage(item) {
    const img = document.createElement("img");
    img.src = "images/" + item.img;
    return img;
}

function mountainTitle(item) {
    const text = document.createElement("div");
    text.classList.add("card-title");
    text.innerHTML = item.name;
    return text;
}

function mountainCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(mountainImage(item));
    card.appendChild(mountainTitle(item));
    return card;
}

function diffOption(item) {
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    return option;
}

function mCard(item) {
    let card;
    card = document.createElement("div");


    card.classList.add("card");
    card.innerHTML = item.name;
    return card;
}

function sCards(list, target){
    target.innerHTML = ""; //Clears
    list.forEach(item => target.appendChild(mCard(item)));
}

document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("results");
    const select = document.getElementById("difficulty");


    function apFilters() {
        const v = select.selectedOptions[0].value;
        const match = mountainsArray.filter(item => item.effort == v || v == "");

        sCards(match, result);
    }

    //mountainsArray.forEach(m => document.body.appendChild(mountainCard(m)));
    mountainsDiff.forEach(item=> select.appendChild(diffOption(item)));
    //~~mountainsArray.forEach(item => document.body.appendChild(diffOption(item)));

    select.addEventListener("change", apFilters);
});
