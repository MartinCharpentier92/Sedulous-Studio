// const carousel = document.querySelector(".carousel");
// const carouselImages = carousel.querySelectorAll("img");

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if (!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
//     highlightImage(); // Appelle la fonction pour mettre en évidence l'image la plus au centre
// }

// const highlightImage = () => {
//     let carouselCenter = carousel.offsetWidth / 2;
//     let closestImage = null;
//     let closestDistance = Infinity;

//     carouselImages.forEach((img) => {
//         let imgCenter = img.offsetLeft + img.offsetWidth / 2 - carousel.scrollLeft;
//         let distance = Math.abs(carouselCenter - imgCenter);

//         if (distance < closestDistance) {
//             closestDistance = distance;
//             closestImage = img;
//         }
//     });

//     // Retirer la classe 'active' de toutes les images, puis l'ajouter à l'image la plus proche du centre
//     carouselImages.forEach((img) => img.classList.remove('active'));
//     if (closestImage) closestImage.classList.add('active');
// }

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mouseleave", dragStop); // Ajoute un événement pour arrêter le drag lorsqu'on quitte le carousel



// const carousel = document.querySelector(".carousel");
// const firstImg = carousel.querySelectorAll("img")[0];
// const arrowIcons = document.querySelectorAll(".wrapper i"); // Correction ici

// let isDragStart = false, prevPageX, prevScrollLeft;
// let firstImgWidth = firstImg.clientWidth + 14;

// arrowIcons.forEach(icon => { // Utilisation correcte de forEach
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
// }

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);


const carousel = document.querySelector(".carousel");
    const firstImg = carousel.querySelectorAll("img")[0];
    const arrowIcons = document.querySelectorAll(".wrapper i"); // Correction ici

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg.clientWidth + 14;

    arrowIcons.forEach(icon => { // Utilisation correcte de forEach
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        isDragStart = false;
    }

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);



let box =
document.querySelector(".box");
let observer =
new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translate(0)";
        }
    }) 
})

observer.observe(box)
