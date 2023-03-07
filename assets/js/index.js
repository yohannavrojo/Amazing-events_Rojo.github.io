

function indexCards(events) { 

fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    const currentDate = data.currentDate;
    const events = data.events;

    events.forEach(event => {
      const id = event._id;
      const image = event.image;
      const name = event.name;
      const date = event.date;
      const description = event.description;
      const category = event.category;
      const place = event.place;
      const capacity = event.capacity;
      const assistance = event.assistance;
      const price = event.price;

      // do something with the event data...

      // generar  carta 
      const div = document.getElementById('card')
      div.classList.add('row','row-cols-2','sm-12','col-md-12','row-cols-md-4','g-3','pr-2','mx-2','pb-4','d-flex','justify-content-center');
      const cardG = document.createElement('div');
      cardG.classList.add('card','card__colors','mx-2','pt-2');
      // imagenes 

      const picture = document.createElement('img');
      picture.classList.add("card-img-top","card-img");
      picture.src = image

      // contenido
      const content = document.createElement('div');
      content.classList.add('card-body');
      
      const title = document.createElement('h5');
      title.classList.add("d-flex","justify-content-center","align-items-center")
      title.textContent = name;
      
      const descrip = document.createElement('p')
      descrip.classList.add("d-flex","justify-content-center","align-items-center")
      descrip.textContent = description
      

      const priceG = document.createElement('div');
      priceG.classList.add("d-flex","row-2");
      
      const priceD= document.createElement('p');
      priceD.classList.add("card-text","col");
      priceD.textContent=price+'$';
      // button
      const button = document.createElement('button');
      // button.type='button';
      button.classList.add('btn','btn-dark','h-25')
      button.innerHTML='More';
      button.href=
      
      priceG.appendChild(priceD);
      priceG.appendChild(button); 

      content.appendChild(title);
      content.appendChild(descrip);
      content.appendChild(priceG);
     

      cardG.appendChild(picture)
      cardG.appendChild(content)

      div.appendChild(cardG)


    });
  })
  .catch(error => console.error(error));

}


indexCards()

