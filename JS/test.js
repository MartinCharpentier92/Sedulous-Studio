const images = [
    "img/testimg2.jpg",
    "img/testimg3.png",
    "img/testimg4.jpg",
    
    // Ajoute ici les URLs de toutes tes images
];

let currentIndex = 0;

const mainImage = document.getElementById("main-image");

// Fonction pour changer d'image en fonction de l'index
function changeImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
}

// Fonction pour afficher l'image suivante automatiquement
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    changeImage(currentIndex);
}

// Démarrer le défilement automatique toutes les 5 secondes
setInterval(nextImage, 5000); // 5000 ms = 5 secondes

// Si tu veux garder les flèches pour un contrôle manuel, voici comment naviguer :
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

prevArrow.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    changeImage(currentIndex);
});

nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    changeImage(currentIndex);
});
