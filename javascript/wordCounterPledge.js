// adding a character counter
const pledgeText = document.getElementById("pledgeText")
const characters = document.getElementById("count_message")

pledgeText.addEventListener("input", ()=>{
    characters.textContent = pledgeText.value.length
})