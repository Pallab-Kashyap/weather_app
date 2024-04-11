let search = document.querySelector(".ri-search-2-line");
let input = document.querySelector('input');
let temp = document.querySelector('#temp');
let city = document.querySelector('#city');
let cityName = 'Delhi';

search.addEventListener('click',() => {
    cityName = input.value;
    fetchData(cityName)
});



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19a653346cmsh2405d310b579107p1bf8edjsn208da04d0aa4',
		'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData(cityName){
    let res = await fetch(`https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${cityName}`, options);
        res = await res.json();
    let lon = res[0].longitude;
    let lat = res[0].latitude;
        res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'d744423578f78820fa0ee465391dc379'}`)
        res = await res.json();
        
        city.innerHTML = cityName;
        temp.innerHTML = Math.ceil(parseInt(res.main.temp) -  273.15);
        input.value = 'city name';
}

fetchData(cityName)


