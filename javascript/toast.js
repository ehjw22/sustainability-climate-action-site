// list for some fun facts 
const sustainabilityFacts = [
  "Switching from the font ‘Arial’ to ‘Century Gothic’ saves 30% ink on printing",
  "Recycling a single 330 ml aluminium drink can saves enough energy to power a TV for over 3 hours",
  "It takes more energy to make 1 kg of paper than it takes to make 1 kg of steel",
  "A hot water faucet that leaks one drop per second can add up to 165 gallons a month. That's more than one person uses in two weeks.",
  "Every time you open the refrigerator door, up to 30 percent of the cold air can escape."
]

// getting the respective elements needed
const liveToastTest = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToastTest);
const toastContent = document.getElementById("factContent");

// set display to none if user presses dont show again
const dontShowBtn = document.getElementById("toastDisappear").addEventListener('click', ()=>{
  document.getElementById("funFactContainer").style.display = 'none';
})

// display toast if user presses show
const showBtn = document.getElementById("toastAppear").addEventListener('click', ()=>{
  document.getElementById("funFactContainer").style.display = 'block';
})

// make sure toasts appear at a set interval and retrieve a random fact
setInterval(() => {
  toastContent.textContent = sustainabilityFacts[Math.floor(Math.random()*sustainabilityFacts.length)]
  toastBootstrap.show();
}, 30000)



