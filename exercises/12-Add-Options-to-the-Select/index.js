let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
function addCountries(list) {
    for (let i = 0; i < list.length; i++) {
        const select = document.getElementById("mySelect");
        const option = document.createElement("option");   
        option.innerHTML = list[i];
        select.appendChild(option);
    }
}
addCountries(countries);

document.getElementById("mySelect").addEventListener("change", function () {
    const selectValue = this.value;
    alert(selectValue);
})

