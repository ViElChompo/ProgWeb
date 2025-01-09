"use strict";

const req = new XMLHttpRequest();
const departure = "Lausanne"; 

req.open("GET", `http://transport.opendata.ch/v1/stationboard?station=${departure}`);
req.send(); 

//console.log(req);

req.addEventListener("load", ()=>{

    const data = JSON.parse(req.response); 
    console.log(data); 

    data.stationboard.forEach(departure => {

        const timeStamp = departure.stop.departure; 
        const time = new Date(timeStamp); 
        const hours = time.toLocaleTimeString();
        const category = departure.category;
        
        const destination = departure.to;

        const dataCategory = departure.category === "S" ? "S": "default";


        const html = `
    <article>
        <div class="time">${hours}</div>
        <div class="category" data-category="${dataCategory}">${category}</div>
        <div class="destination">${destination}</div>
    </article>
`
    document.querySelector("#board").insertAdjacentHTML("beforeend", html);
    });
    
});


const renderDepartures = (departure) => {

    console.log(departure);

 



};

