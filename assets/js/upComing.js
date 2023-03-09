
const cardContainer = document.getElementById('upComing');
const currentDate = new Date(data.currentDate);
 console.log(currentDate);
for (let i = 0; i < data.events.length; i++) {

  const event = data.events[i];

  const eventsDate = new Date(event.date);
 
  
  if (eventsDate > currentDate) {

    const card = document.createElement('div');
    //  card.classList.add("hola")
    card.innerHTML = `
    <div class="card card__colors mx-2" >
      
        <img src="${event.image}" class="card-img-top card-img px-3 py-3" alt="...">
        <div class="card-body">
          <h5 class="d-flex justify-content-center align-items-center">
            ${event.name}
          </h5>
          <p class="d-flex justify-content-center align-items-center">${event.description}</p>
          <div class="d-flex row-2">
            <p class="card-text col">
              ${event.price}$
            </p>
            <a href="#" class="btn btn-color h-25 ">More </a>
          </div>
        </div>
      
    </div>
   `;
    cardContainer.appendChild(card);

  }

}