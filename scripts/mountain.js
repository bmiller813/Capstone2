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
    text.innerHTML = item.elevation;
    return text;
}
function mountainDesc(item) {
    const text = document.createElement("div");
    text.classList.add("card-body");
    text.innerHTML = item.desc;
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

    mountainsArray.forEach(m => results.appendChild(mountainCard(m)));
    select.addEventListener("change", applyFilters);
});

//WHOLE OTHER SECTION


