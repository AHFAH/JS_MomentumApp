const API_KEY = "9aa26de142c6a7a28623c6cdd9a8ee19";


function onGeoSucc(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    weather.innerText = `${data.main.temp}℃ ${data.weather[0].main} @${data.name}`;
  });
}
function onGeoError(){
  alert("날씨 정보에 접근하지 못 했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSucc, onGeoError);