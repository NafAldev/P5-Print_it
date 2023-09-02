const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Sélection de : 
let prev = document.querySelector(".arrow_left")  // la flèche précédente
let next = document.querySelector(".arrow_right") // la flèche suivante
let bannerImage = document.querySelector("#img-banner") //  l'image 
let bannerText = document.querySelector("#text-banner") // texte 
const path = "./assets/images/slideshow/" // Chemin vers le dossier d'images


let i = 0 // compteur 

// Appel de la fonction dotsAdd (création de dots)
dotsAdd()
dotsSlides()

// Écouteur d'événement 'click' pour le bouton suivant
next.addEventListener("click", slideNext);
function slideNext() {
   // console.log(i);console.log(slides.length);
   
    // Instruction pour passer à la diapositive suivante
    if (i < slides.length - 1) {
        i++;
    } else {
        i = 0; // Revenir à la première diapositive si on atteint la fin
    }
    
    // Met à jour les dots
    dotsSlides();
    
    // Met à jour l'image du diaporama
    let currentImage = slides[i];
    bannerImage.setAttribute("src", path + currentImage.image);
    
    // Met à jour le texte du diaporama
    let currentText = slides[i];
    bannerText.innerHTML = currentText.tagLine;
}

// Écouteur d'événement 'click' pour le bouton précédent
prev.addEventListener("click", slidePrev);
function slidePrev() {
    // Vérifie si on peut passer à la diapositive précédente
    if (i > 0) {
        i--;
    } else {
        i = slides.length - 1; // Revenir à la dernière diapositive si on est sur la première
    }
    
    // Mise à jour des points 
    dotsSlides();
    
    // Mise à jour de l'image
    let currentImage = slides[i];
    bannerImage.setAttribute("src", path + currentImage.image);
    
    // Mise à jour du texte 
    let currentText = slides[i];
    bannerText.innerHTML = currentText.tagLine;
}

iDots = 0

// Fonction pour crée les dots
function dotsAdd() {
    const dotsContainer = document.querySelector(".dots");
    for (let iDots = 0; iDots < slides.length; iDots++) {
        const dot = document.createElement("div"); // Crée un div pour chaque dot
        dot.classList.add("dot"); // Ajoute la classe "dot" à chaque point
        dotsContainer.appendChild(dot); // Ajoute le point au conteneur parent 
    }
}

// Fonction pour mettre à jour les dots
function dotsSlides() {
    const dots = document.querySelectorAll(".dot"); // Sélectionne tous les dots
    for (let iDots = 0; iDots < slides.length; iDots++) {
        if (iDots == i) {
            dots[iDots].classList.add("dot_selected"); // Ajoute la classe "dot_selected" au point actuel
        } else {
            dots[iDots].classList.remove("dot_selected"); // Supprime la classe "dot_selected" des autres points
        }
    }
}
