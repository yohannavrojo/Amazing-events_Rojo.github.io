
const cardContainer = document.getElementById('card');
let card = '';
fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {


for (let i = 0; i < data.events.length; i++) {
  const event = data.events[i];

  card+= `
    <div class="card card__colors mx-2" >
      
        <img src="${event.image}" class="card-img-top card-img px-3 py-3" alt="...">
        <div class="card-body">
          <h5 class="d-flex justify-content-center align-items-center">${event.name}</h5>
          <p class="d-flex justify-content-center align-items-center">${event.description}</p>
          <div class="d-flex row-2">
            <p class="card-text col">${event.price}$</p>
            <p class="category card-text col" >${event.category}</p>
            <a href="./pages/details-upComing.html?id=${event._id}" class="btn btn-color h-25 ">More </a>
          </div>
        </div>
      
    </div>
  `;

}

  cardContainer.innerHTML = card;
})


// filtro de checkbox 
const filterCheckboxes = document.querySelectorAll('input[name="filter"]');
const cards = document.querySelectorAll('.card');

filterCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const checkedFilter = document.querySelector('input[name="filter"]:checked').value;
     
    // checked value
    cards.forEach(function(card) {
      let cardClass = card.querySelector(".category").textContent;
      console.log(cardClass, checkedFilter);

      if (checkedFilter === "all") {
        card.style.display = "flex";
      } else {
        if (cardClass === checkedFilter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
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
console.log(searchText);
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


