"use strict"

// console.log("This is the first message")

// setTimeout(() => {
//     console.log("This is the second message")
// }, 3000)
// // alert("ALERT!!!!!")
// console.log("This is the third message")

const req = new XMLHttpRequest();
const SEARCH = "fra"

req.open("GET", `https://restcountries.com/v3.1/name/${SEARCH}`)
req.send();

req.addEventListener("load", () => {
    // console.log(req.responseText);
    const data = JSON.parse(req.response);
    data.forEach(country => {
        renderCountry(country);
        if (country.borders) {
            country.borders.forEach((border) => {
                const borderReq = new XMLHttpRequest();
                borderReq.open("GET", `https://restcountries.com/v3.1/alpha/${border}`);
                borderReq.send();
                borderReq.addEventListener("load", () => {
                    renderCountry(JSON.parse(borderReq.response)[0]);
                })
            })
        }
    });
    document.querySelector(".countries").classList.add("loaded");
})


const renderCountry = (country) => {
    console.log(country)
    const html = `
        <article class="country">
            <img class="country__img" src="${country.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${country.name.common}</h3>
              <h4 class="country__region">${country.region}</h4>
              <p class="country__row"><span>👫</span>POP ${country.population}</p>
              <p class="country__row"><span>🗣️</span>${Object.values(country.languages)}</p>
              <p class="country__row"><span>💰</span>${Object.keys(country.currencies)}</p>
            </div>
        </article>`

    document.querySelector(".countries").insertAdjacentHTML("beforeend", html);
}

