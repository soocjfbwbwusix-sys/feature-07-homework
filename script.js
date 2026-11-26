const googleBtn = document.getElementById("googleBtn");

googleBtn.addEventListener("click", function() {
    window.open("https://www.google.com", "_blank");
});

const allColorBtn = document.getElementById("allColorBtn");

const cards = document.querySelectorAll(".card");

const colors = [
    "#88A965",
    "#35BD61",
    "#B7A51C",
    "#D34560",
    "#8A5680"
];

let colorIndex = 0;

allColorBtn.addEventListener("click", function() {

    cards.forEach(function(card) {
        card.style.backgroundColor = colors[colorIndex];
    });

    colorIndex++;

    if (colorIndex === colors.length) {
        colorIndex = 0;
    }

});

const oneColorBtn = document.getElementById("oneColorBtn");

let selectedCard = null;

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        selectedCard = card;

        cards.forEach(function(item) {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

    });

});

oneColorBtn.addEventListener("click", function() {

    if (selectedCard === null) {
        alert("Сначала выбери карточку!");
        return;
    }

    selectedCard.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

});

const stressBtn = document.getElementById("stressBtn");

stressBtn.addEventListener("click", function() {

    cards.forEach(function(card) {

        card.classList.add("shake");

        card.addEventListener("animationend", function() {
            card.classList.remove("shake");
        }, { once: true });

    });

});