import './style.css'
import javascriptLogo from './javascript.svg'

// dom elements
const cityInput = document.querySelector('#js-sCity-input');
const apiDisplay = document.querySelector(".api-display");

function getInputValue(domEl){
  return domEl.value;
}

function eventListeners(){
  window.addEventListener("click", (e) => {
    e.preventDefault();
    const input = getInputValue(cityInput);
    getapi(input);
  })
}

async function getapi(input){
  const api_url = 
`https://api.weatherapi.com/v1/current.json?key=b0a0a895ffbc42528a2184410231508&q=${input}&aqi=no`;
  const response = await fetch(api_url);

  let data = await response.json();
  if(response){
    apiDisplay.textContent = data.location.name;
    console.log(data)
    apiDisplay.textContent += ' ' + data.current.temp_c;
  }
}  

function init(){
  eventListeners();
}

window.onload = () =>{
  init();
}