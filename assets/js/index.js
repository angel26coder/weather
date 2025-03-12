let writeCountry = document.querySelector(".writeCountry");

let informationContainer = document.querySelector(".information");

writeCountry.addEventListener("input", async () => {
    filtred(writeCountry.value)
})


async function allCountries() {
    let apiKey = "a231c70e062643399fc13718250402";
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=uruguay&aqi=no`);
    let data = await response.json();

    return data;
}

async function filtred(inputValue) {
    informationContainer.innerHTML = "";
    let infoData = await allCountries();

    let filtredCountries = infoData.filter(element => {
        return element.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    let total = {
        name: filtredCountries["location"]["country"],
        place: filtredCountries["location"]["name"],
        time: filtredCountries["location"]["localtime"],
        temp: filtredCountries["current"]["temp_c"],
        condition: filtredCountries["current"]["condition"]["text"],
        image: filtredCountries["current"]["condition"]["icon"],
    }

    let nameCountry = document.createElement("p");
    nameCountry.classList.add("nameCountry");
    nameCountry.innerHTML = total["name"];

    let placeName = document.createElement("p");
    placeName.classList.add("placeName");
    placeName.innerHTML = total["place"];

    let time = document.createElement("p");
    time.classList.add("time");
    time.innerHTML = total["time"];

    let tempC = document.createElement("p");
    tempC.classList.add("tempC");
    tempC.innerHTML = total["temp"];

    let condition = document.createElement("p");
    condition.classList.add("condition");
    condition.innerHTML = total["condition"];

    let icon = document.createElement("img");
    icon.scr = total["image"];
    icon.classList.add("icon");

    informationContainer.appendChild(nameCountry);
    informationContainer.appendChild(placeName);
    informationContainer.appendChild(time);
    informationContainer.appendChild(tempC);
    informationContainer.appendChild(condition);
    informationContainer.appendChild(icon);


    console.log(icon)
    return icon
}
filtred();

function showAllCountries() {

}








/*

escribo en el input
se despliega una lista de paises
escojo el mio 
aparece la info en pantalla 
se cambia el fondo de color y el mensaje de la page 
si vuelvo a escribir, se borra todo de nuevo




reunir toda la informacion 
filtrar la informacion 
imprimir la informacion filtrada

*/



