let writeCountry = document.querySelector(".writeCountry");

let countryName = document.querySelector(".countryName");

let placeName = document.querySelector(".placeName");

let localTime = document.querySelector(".localTime");

let tempF = document.querySelector(".tempF");

let condition = document.querySelector(".condition");





async function writeYourCountry() {
    let response = await fetch("http://api.weatherapi.com/v1/current.json?key=a231c70e062643399fc13718250402&q=uruguay&aqi=no");
    let data = await response.json();

    return data
}
writeYourCountry();


async function filtred() {
    let infoData = await writeYourCountry();
    let countryName = infoData["location"]["country"];
    let placeName = infoData["location"]["name"];

    let localTime = infoData["location"]["localtime"];

    let tempF = infoData["current"]["temp_f"];
    let condition = infoData["current"]["condition"]["text"];
    let icon = infoData["current"]["condition"]["icon"]

    let total = {
        name: countryName,
        place: placeName,
        time: localTime,
        temp: tempF,
        condition: condition,
        image: icon,
    }

    return total
}




writeCountry.addEventListener("input", async () => {

    let final = await filtred()
    if (final && writeCountry.value.toLowerCase() == final.name) {
        countryName.innerHTML = final.name;
        placeName.innerHTML = final.place;
        localTime.innerHTML = final.time;
        tempF.innerHTML = final.temp + "c°";
        condition.innerHTML = final.condition;
    }
})








