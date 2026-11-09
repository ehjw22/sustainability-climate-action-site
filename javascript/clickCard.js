// when user click on the card, change the class for each card that is on the screen
document.querySelectorAll(".card_inner").forEach(card => {
    card.addEventListener("click", ()=>{
        card.classList.toggle("is-flipped");
    });
});