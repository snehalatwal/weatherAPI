const city = document.getElementById("cityN");
const button = document.getElementById("buttonOn");
const apiKey = "4ca9c8389b7e47899ce210030233105";
const locationName=document.getElementById("location");
const countryName=document.getElementById("country");
const temperature=document.getElementById("temp");
const currentTime=document.getElementById("time");

async function getData(cityName) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;
  const response = await fetch(url);
  return await response.json();
}

button.addEventListener("click", async () => {
  const inputValue = city.value;
  const result = await getData(inputValue);
  locationName.innerText=`${result.location.name}`;
  countryName.innerText= ` ${result.location.country}`;
  temperature.innerText=`${result.current.temp_c}`;
  currentTime.innerText=`${result.location.localtime}`;
});
