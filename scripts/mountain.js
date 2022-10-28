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
function mountainElevation(item) {
    const text = document.createElement("div");
    text.classList.add("card-subtitle");
    text.innerHTML = `<b>Elevation:</b><br>` + item.elevation;
    return text;
}
function mountainDesc(item) {
    const text = document.createElement("div");
    text.classList.add("card-description");
    text.innerHTML = `<b>Description:</b><br>`+ item.desc;
    return text;
}


function mountainCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(mountainImage(item));
    card.appendChild(mountainTitle(item));
    card.appendChild(mountainElevation(item));
    card.appendChild(mountainDesc(item));

    return card;
}

function selectMountain(item) {
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    return option;
}

function filter() {
    const effort = document.getElementById("effort");
    const v = effort.selectedOptions[0].value;
    showMountains(mountainsArray.filter(m => m.effort == v));
}

function showMountains(list) {
    window.results.innerHTML = ""; //clear the old
    list.forEach(m => window.results.appendChild(mountainCard(m)));
}

document.addEventListener("DOMContentLoaded", () => {
    const results = document.getElementById("results");
    const select = document.getElementById("chooseMount");

    mountainsArray.forEach(m => select.innerHTML += `<option value="${m.name}">${m.name}</option>`);

    function applyFilters() {
        const v = select.selectedOptions[0].value;
        const match = mountainsArray.find(m => v == m.name);
        const card = mountainCard(match)
        // const cardImg = document.getElementsByTagName("img");
        results.innerHTML = "";
        card.classList.add("big");
        card.setAttribute("id", "big");
        // cardImg.setAttribute("id", "bigImg");
        results.appendChild(card);

    };

    // mountainsArray.forEach(m => window.results.appendChild(mountainCard(m)));
    showMountains(mountainsArray);
    select.addEventListener("change", applyFilters);


    //HOW TO GET UNIQ LIST OF STRING FOR A SELECT FROM A LIST OF OBJECTS
    const allEfforts = mountainsArray.map(m => m.effort);
    const list = [...new Set(allEfforts)] //make unique using ES6 Set

    //SAME AS FOR LISTS ON PARKS
    const effort = document.getElementById("effort");
    effort.size = list.length;
    list.forEach(e => effort.innerHTML += `<option value"${e}">${e}</option>`);
    effort.addEventListener("change", filter);
});

//WHOLE OTHER SECTION


