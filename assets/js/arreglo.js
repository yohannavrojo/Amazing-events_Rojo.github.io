
const cardContainer = document.getElementById('card');

let card = '';
for (let i = 0; i < data.events.length; i++) {
  const event = data.events[i];

  card += `
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
            <p class="category card-text col">
            ${event.category}
          </p>
            <a href="#" class="btn btn-color h-25 ">More </a>
          </div>
        </div>
      
    </div>
  `;

  cardContainer.innerHTML = card;
}

//más eficiente, uso de opcion 2: descomentar la funcion y comentar el for anterior.
// function printCards(arrayEvents){
//   for (let i = 0; i < arrayEvents.length; i++) {
//   const event = arrayEvents[i];
//   const card = document.createElement('div');
//   card.innerHTML = `
//     <div class="card card__colors mx-2" >
      
//         <img src="${event.image}" class="card-img-top card-img px-3 py-3" alt="...">
//         <div class="card-body">
//           <h5 class="d-flex justify-content-center align-items-center">
//             ${event.name}
//           </h5>
//           <p class="d-flex justify-content-center align-items-center">${event.description}</p>
//           <div class="d-flex row-2">
//             <p class="card-text col">
//               ${event.price}$
//             </p>
//             <p class="category card-text col">
//             ${event.category}
//           </p>
//             <a href="#" class="btn btn-color h-25 ">More </a>
//           </div>
//         </div>
      
//     </div>
//   `;

//   cardContainer.appendChild(card);
// }

// }

// printCards(data.events)



// Obtener todos los checkbox
const checkboxes = document.querySelectorAll('.filtro input[type="checkbox"]');

// Obtener todas las cartas
const cards = document.querySelectorAll('.card');

// Agregar un EventListener a cada checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    // Obtener los valores de los checkboxes seleccionados
    const checkedValues = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
  console.log(checkedValues);
    // Recorrer todas las cartas y mostrar/ocultar según los filtros seleccionados
    cards.forEach((card) => {
      const cardCategory = card.querySelector('.category').textContent;
   console.log(card);
      if (checkedValues.length > 0 && !checkedValues.includes(cardCategory)) {
        card.style.display = 'none'; 
     
      } else {
        card.style.display= 'block';

      }
    });
  });

});

// filtro search 
const search = document.getElementById('search');
// Agregar un event listener al campo de entrada de búsqueda
search.addEventListener('input', (event) => {
  // Obtener el texto ingresado en el campo de entrada de búsqueda

  // cardContainer.innerHTML = "" opcion 2: descomentar

  const searchText = event.target.value.toLowerCase().trim();
  const filteredEvents = []; //opcion 2: comentar esta linea hasta la 122
  // Recorrer todas las cartas y mostrar/ocultar según el texto ingresado
  cards.forEach((card) => {
    const cardName = card.querySelector('h5').textContent.toLowerCase();

    if (cardName.includes(searchText)) {
      filteredEvents.push(card.style.display = 'block');
    } else {
      filteredEvents.push(card.style.display = 'none');
    }
  });

  cards.style.flexWrap = 'wrap';
  //    const events = data.events.filter(event => event.name.toLowerCase().includes(searchText))
  //    console.log(events);
  //  printCards(events) //opcion 2: descomentar estas 3 lineas
});