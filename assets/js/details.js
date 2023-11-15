

const querySearch = document.location.search
console.log(querySearch);
const id = new URLSearchParams(querySearch).get("id")
console.log(id);


fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
const eventos = data.events.find(event => event._id == id)
console.log(eventos);

const cardRender = document.getElementById("cards")

    
cardRender.innerHTML =` 
       
<div class="w-100 d-flex flex-row justify-content-center h-75  ">
    <div class=" description card  w-100  ">
        <div class="row g-0 d-flex flex-column align-content-center">
            <div class="col-md-7">
                <img src="${eventos.image}" class="img  d-flex justify-content-center align-items-center" alt="...">
            </div>
            <div class="col-md-7">
                <div class="card-body h-100 d-flex flex-column justify-content-center align-items-center">
                    <h5 class="card-title">${eventos.name}</h5>
                    <p class="card-text">${eventos.description}</p>
                    <div class=" d-flex flex-row gap-3 ">
                    <p class="card-text"><i class="bi bi-archive mx-3"></i>${eventos.category}</p>
                    <p class="card-text"><i class="bi bi-balloon mx-3"></i>${eventos.place}</p>
                    </div>
                   <div class=" d-flex flex-row gap-3 ">
                    <p class="card-text "><i class="bi bi-calendar2-day mx-3"></i>${eventos.date}</p>
                    <p class="card-text "><i class="bi bi-coin mx-3"></i>${eventos.price}</p>

                   </div>
                   
                    
                </div>
            </div>
        </div>
    </div>
</div>` 

});