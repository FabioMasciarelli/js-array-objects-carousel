const $one = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


//****** MILESTONE 1 ******
// Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

let curIndex = 0;
let image;
let title;
let text;


images.forEach((curObject, index) => {

  image = curObject.image;
  title = curObject.title;
  text  = curObject.text;
  let isActive = index === 0 ? "active" : "";

  let result = `
  <div class="my-carousel-item ${isActive}" carousel-item="${index}">
      <img class="img-fluid" src="./${image}" alt="Marvel's Spiderman Miles Morale picture" />
    <div class="item-description px-3">
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  </div>`;

//stampo in pagina
  let print = $one(".my-carousel-images");

  print.innerHTML += result;
});

//****** MILESTONE 2 ******
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const btnNext = $one(".my-next-hook");
const btnBefore = $one(".my-prev-hook");

btnNext.addEventListener("click", () => {
  $one(".active").classList.remove("active");
  
  curIndex = curIndex < images.length - 1 ? ++curIndex : 0;

  console.log(curIndex);

  $one("[carousel-item='" + curIndex + "']").classList.add("active");

});

btnBefore.addEventListener("click", () => {
  $one(".active").classList.remove("active");

  curIndex = curIndex === 0 ? images.length - 1 : --curIndex;
  console.log(curIndex);

  $one("[carousel-item='" + curIndex + "']").classList.add("active");
});

// aggiungere immagini interne

const thumbnail = $one(".my-thumbnails");

images.forEach((curImage) => {

  innerImage = curImage.image;

  result = `<img
  class="img-fluid my-thumbnail"
  src="./${innerImage}"
  alt=""/>`;
  
  
  // thumbnail.innerHTML += result;
});