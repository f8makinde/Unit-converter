
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let first = null;
let second = null
let convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function(){
    let inputEl = document.getElementById("input-el").value;
     first = inputEl * 3.281;
      second = inputEl / 3.281;
     lengthEl.innerText = `${inputEl} meters = ${first.toFixed(3)} feet | ${inputEl} feet = ${second.toFixed(3)} meters`;
     first = inputEl * 0.264;
     second = inputEl / 0.264;
     volumeEl.innerText = `${inputEl} liters = ${first.toFixed(3)} gallons | ${inputEl} gallons = ${second.toFixed(3)} liters`;
     first = inputEl * 2.204;
     second = inputEl / 2.204;
     massEl.innerText = `${inputEl} kilos = ${first.toFixed(3)} pounds | ${inputEl} pounds = ${second.toFixed(3)} kilos` ;
})
