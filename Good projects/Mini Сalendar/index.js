const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayNumEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")
let clockEl = document.getElementById("clock")


const date = new Date();
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en" , {month:"long"})
dayNumEl.innerText = date.toLocaleString("en", {day:"2-digit"} ) //or date.getDate()
yearEl.innerText = date.toLocaleString("en" , {year:"numeric"}) //or date.getFullYear()
dayNameEl.innerText = date.toLocaleString("en", {weekday:"long"})

