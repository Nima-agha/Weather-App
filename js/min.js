alert("اگر برنامه اجرا نمی شود، لطفا فیلتر شکن خود را روشن کنید");

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");
const apiKey = "ad2edac29e151f95c125fc68a82e2d25";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function chekweather(city) {
  const respose = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (respose.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await respose.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "image/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "image/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  chekweather(searchbox.value);
});
