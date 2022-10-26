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
        results.innerHTML = "";
        card.classList.add("big");
        results.appendChild(card);
    };

    mountainsArray.forEach(m => results.appendChild(mountainCard(m)));

    select.addEventListener("change", applyFilters);
});


