
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let temperatureEl = document.getElementById("temp-el")
let speedEl = document.getElementById("speed-el")
let first = null;
let second = null
let convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function(){
    let inputEl = document.getElementById("input-el").value;
    document.getElementById("input-el").value = "";
     first = inputEl * 3.281;
      second = inputEl / 3.281;

     lengthEl.innerText = `${inputEl} meters = ${first.toFixed(3)} feet | ${inputEl} feet = ${second.toFixed(3)} meters`;


     first = inputEl * 0.264;
     second = inputEl / 0.264;

     volumeEl.innerText = `${inputEl} liters = ${first.toFixed(3)} gallons | ${inputEl} gallons = ${second.toFixed(3)} liters`;


     first = inputEl * 2.204;
     second = inputEl / 2.204;

     massEl.innerText = `${inputEl} kilos = ${first.toFixed(3)} pounds | ${inputEl} pounds = ${second.toFixed(3)} kilos` ;

     first =  (9/5 * inputEl) + 32;
     second =  (inputEl - 32) * (5/9);

     temperatureEl.innerText = `${inputEl} Celsuis = ${first.toFixed(3)} fahrenheit | ${inputEl} fahrenheit = ${second.toFixed(3)} celsuis`;
    
     first = inputEl / 1.609;
     second = inputEl * 1.609;

     speedEl.innerText = `${inputEl} km/hr = ${first.toFixed(3)} mph | ${inputEl} mph = ${second.toFixed(3)} km/hr`

     if(isNaN(inputEl)){
        let inputEl = document.getElementById("input-el").value;
        inputEl = "";
        lengthEl.innerText = `This is not a number, can't convert, Input a number`;
        volumeEl.innerText = `This is not a number, can't convert, Input a number`;
        massEl.innerText = `This is not a number, can't convert, Input a number` ;  
        temperatureEl.innerText = `This is not a number, can't convert, Input a number`;
    }
  
})
