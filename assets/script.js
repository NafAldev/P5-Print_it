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

let prev = document.querySelector(".arrow_left");
let next = document.querySelector(".arrow_right");
let bannerImage = document.querySelector("#img-banner");
let bannerText = document.querySelector("#text-banner")
const path = "./assets/images/slideshow/"


let i = 0
let taille = slides.length



dotsAdd()
dotsSlides()

next.addEventListener("click", slideNext);
function slideNext() {	
		console.log(i)
		console.log(slides.length)
		if ( i < slides.length - 1 ){
			i++;
		} else{
			i=0;	
		}
		dotsSlides ()
		let currentImage = slides[i]
		bannerImage.setAttribute("src", path + currentImage.image)
		let currentText = slides[i]
		bannerText.innerHTML = currentText.tagLine
	}

prev.addEventListener("click", slidePrev);
function slidePrev() {
  if (i > 0) {
    i--;
  	} else {
    	i = slides.length - 1;
 	}
		dotsSlides ()
		let currentImage = slides[i];
		bannerImage.setAttribute("src", path + currentImage.image);
		let currentText = slides[i];
		bannerText.innerHTML = currentText.tagLine;
}


function dotsAdd() {
	const dotsContainer = document.querySelector(".dots");
	for (let iDots = 0; iDots < slides.length; iDots++) {
	  const dot = document.createElement("div"); 
	  dot.classList.add("dot"); 
	  dotsContainer.appendChild(dot); 
	}
  }
  
function dotsSlides (){
	const dots = document.querySelectorAll (".dot");
	for(let iDots = 0; iDots < slides.length; iDots++){
		if(iDots == i){
			dots[iDots].classList.add("dot_selected")
		} else {
			dots[iDots].classList.remove("dot_selected")
		}
	}
} 



