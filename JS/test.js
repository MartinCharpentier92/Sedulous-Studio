const images = [
    "img/testimg2.jpg",
    "img/testimg3.png",
    "img/testimg4.jpg",
    
    // Ajoute ici les URLs de toutes tes images
];


let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

// Fonction pour changer d'image en fonction de l'index
function changeImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
}

// Naviguer vers l'image précédente
prevArrow.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    changeImage(currentIndex);
});

// Naviguer vers l'image suivante
nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    changeImage(currentIndex);
});
