let writeCountry = document.querySelector(".writeCountry");
let informationContainer = document.querySelector(".information");
let submitButton = document.querySelector(".button");
let messageContainer = document.querySelector(".messageContainer");
let iconContainer = document.querySelector(".image");


submitButton.addEventListener("click", async () => {
    showYourCountry(writeCountry.value)
})

writeCountry.addEventListener("input", async () => {
})


async function allCountries(inputValue) {


    let apiKey = "a231c70e062643399fc13718250402"
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}&aqi=no`);

    if (!response.ok) {

        console.log(`Error ${response.status}: ${response.statusText}`);
        return
    }
    let data = await response.json();

    let total = {
        name: data["location"]["country"],
        place: data["location"]["name"],
        time: data["location"]["localtime"],
        temp: data["current"]["temp_c"],
        condition: data["current"]["condition"]["text"],
        image: data["current"]["condition"]["icon"],
    }

    return total
}

async function showYourCountry(inputValue) {
    messageContainer.innerHTML = "";
    informationContainer.innerHTML = "";
    iconContainer.innerHTML = "";

    let countries = await allCountries(inputValue);

    if (countries == null) {
        alert("SOMETHING IN THE NAME COUNTRY IS WRONG")
        return
    }
    let nameCountry = document.createElement("p");
    nameCountry.classList.add("nameCountry");
    nameCountry.innerHTML = countries["name"];

    let placeName = document.createElement("p");
    placeName.classList.add("placeName");
    placeName.innerHTML = countries["place"];

    let time = document.createElement("p");
    time.classList.add("time");
    time.innerHTML = countries["time"];

    let tempC = document.createElement("p");
    tempC.classList.add("tempC");
    tempC.innerHTML = `${countries["temp"]}°`;

    let condition = document.createElement("span");
    condition.classList.add("condition");
    condition.innerHTML = `Have a happy ${countries["condition"]} day:)`;

    let icon = document.createElement("img");
    icon.src = `https://${countries["image"]}`;
    icon.classList.add("icon");

    informationContainer.appendChild(nameCountry);
    informationContainer.appendChild(placeName);
    informationContainer.appendChild(time);
    informationContainer.appendChild(tempC);
    messageContainer.appendChild(condition);
    iconContainer.appendChild(icon);
}

function updatePlaceholder() {

    if (window.matchMedia("(max-width: 700px)").matches) {
        writeCountry.placeholder = "Write here";
    } else {
        writeCountry.placeholder = "Write your country";
    }
}

window.addEventListener('resize', updatePlaceholder);
window.addEventListener('load', updatePlaceholder);
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




// async function changeTheIcon(inputValue) {
//     let apiKey = "a231c70e062643399fc13718250402"
//     let apiInfo = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}&aqi=no`);

//     let data = apiInfo.json();
//     let status = data.condition;

//     if (status === "cloudy") {
//         iconContainer.src = "assets/image/cloudy"
//     }
// }




