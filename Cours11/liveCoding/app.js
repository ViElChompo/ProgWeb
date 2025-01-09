// const promises = Promise.all([fetch("https://restcountries.com/v3.1/name/switzerland"), 
//                               fetch("https://restcountries.com/v3.1/name/france")])
//                 .then(responses => console.log(responses));


const truc = [[1,2,3], [4,5,6], [8,9, [10, 11, 12]]];
const flattenedTruc = truc.flat();

fetch("https://restcountries.com/v3.1/name/switzerland")
  .then((response) => {
    if (response.status !== 200) throw new Error("Something is not quite right...")
    return response.json()
  })
  .then((data) => {
    renderCountry(data[0]);
    if (!data[0].borders) throw new Error("THIS COUNTRY IS AN ISLAND!!! 🌴")
    return Promise.all(data[0].borders.map((borderCode) => fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)))
  })
  .then((responses) => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then((data) => {
    console.log(data)
    data.flat().forEach(neighbour => {
      renderCountry(neighbour, "neighbour");

    });
  })
  .catch((err) => {
    document.querySelector(".errors").innerHTML = err;
  })
  .finally(() => {
    document.querySelector(".countries").style.opacity = 1;
  })

// const getCountryData = (country) => {
//   const req = new XMLHttpRequest();
//   req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   req.send();
//   req.addEventListener("load", () => {
//     const data = JSON.parse(req.responseText);
//     data.forEach(country => {
//       renderCountry(country)
//       if (!country.borders) return
//       country.borders.forEach((neighbour) => {
//         const nReq = new XMLHttpRequest();
//         nReq.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         nReq.send();
//         nReq.addEventListener("load", () => {
//           const nData = JSON.parse(nReq.responseText);
//           nData.forEach(neighbour => {
//             renderCountry(neighbour, "neighbour");
//           })
//           // countriesContainer.style.opacity = "1";
//         });
//       });
//     });
//   });
// };

// getCountryData("fra")

const renderCountry = (data, className) => {
  const countriesContainer = document.querySelector("section")
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row">
          <span>👫</span>${Math.round(data.population / 1000000)} million people
        </p>
        <p class="country__row">
          <span>🗣️</span>${Object.values(data.languages).join(", ")}
              
        </p>
        <p class="country__row">
          <span>💰</span>${Object.values(data.currencies)[0].name}
        </p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML("afterbegin", html);
  return html;
};