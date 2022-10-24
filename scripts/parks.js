function locationOption(item) {
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    return option;
}
document.addEventListener("DOMContentLoaded", () => {

    const select = document.getElementById("location");
    locationsArray.forEach(item => select.appendChild(locationOption(item)));
    select.addEventListener("change", (e) => {
        alert(select.selectOptions[0].value)
    })

function parkCard(item){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = item.LocationName;
    return card;
}
    const results = document.getElementById("results");
    nationalParksArray.forEach(item => results.appendChild(parkCard(item)));
});