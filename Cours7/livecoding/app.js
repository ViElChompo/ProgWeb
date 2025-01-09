"use strict"

// const albums = document.querySelectorAll(".card");

// document.querySelector("img").addEventListener("click", (e) => {
//     e.target.src = "img/ph.jpg"
// })

// albums.forEach((album) => {
//     if(parseInt(album.dataset.listens) < 1000) {
//         album.style.display = "none"
//     }
// }) 


// document.querySelector("button").addEventListener("click", () => {
//     const parent = document.querySelector("main");
//     console.dir(parent)
//     parent.removeChild(parent.lastElementChild);
// })

const albums = [
    {
        title: "Bright Future",
        artist: "Adrianne Lenker",
        year: 2024,
        listens: 1324,
        isItGood: true
    },
    {
        title: "POSTINDUSTRIAL HOMETOWN BLUES",
        artist: "BIG SPECIAL",
        year: 2024,
        listens: 23,
        isItGood: false


    },
    {
        title: "Manning Fireworks",
        artist: "MJ Lenderman",
        year: 2024,
        listens: 357,
        isItGood: true


    },
    {
        title: "EELS",
        artist: "Being Dead",
        year: 2024,
        listens: 95,
        isItGood: false


    },
    {
        title: "Only God Was Above Us",
        artist: "Vampire Weekend",
        year: 2024,
        listens: 865,
        isItGood: true
    }
];

const container = document.querySelector("main");

// const name = "Anna";
// container.insertAdjacentHTML("afterend", `<h1>${name}</h1>`)

// const generateAlbumCard = (album) => {
//     const imageSource = `img/${album.title.toLowerCase().replaceAll(" ", "_")}.webp`
    // const html = `
    //     <div class="card">
    //         <img src="${imageSource}" alt="">
    //         <h3>${album.title}</h3>
    //         <p>${album.artist}</p>
    //         <p>${album.year}</p>
    //     </div>
    // `;
//     container.insertAdjacentHTML("afterbegin", html);
// }

// albums.filter((album) => album.isItGood).toSorted((a, b) =>  a.listens - b.listens).forEach((album) => {
//     generateAlbumCard(album);
// })


const generateAlbumCard = (album) => {
    const card = document.createElement("div");
    card.classList.add("card")

    const image = document.createElement("img")
    image.src = `img/${album.title.toLowerCase().replaceAll(" ", "_")}.webp`
    
    const title = document.createElement("h3")
    title.textContent  = album.title;

    const artist = document.createElement("p")
    artist.textContent  = album.artist;

    const year = document.createElement("p")
    year.textContent  = album.year;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(year);

    container.appendChild(card);
    // container.insertAdjacentElement("afterbegin", card)
}  

// insertAdjacentElement("", el)
// appendChild()

albums.forEach((album) => {
    generateAlbumCard(album);
})