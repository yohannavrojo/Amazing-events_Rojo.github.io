
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

// filtro checkbox 
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
  const searchText = event.target.value.toLowerCase().trim();

  // Recorrer todas las cartas y mostrar/ocultar según el texto ingresado
  cards.forEach((card) => {
    const cardName = card.querySelector('h5').textContent.toLowerCase();

    if (cardName.includes(searchText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});