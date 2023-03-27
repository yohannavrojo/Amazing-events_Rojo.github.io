
fetch('https://mindhub-xj03.onrender.com/api/amazing') //../amazing.json
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('table');
        let currentDate = new Date(data.currentDate);

        //  obtener past events 
        const pastEvents = data.events.filter((evento) => {
            return (new Date(evento.date)) < currentDate;
        })
        // obtener upcoming events
        const upComingEvents = data.events.filter((evento) => {
            return (new Date(evento.date)) > currentDate;
        })

        // category 
        // const categoryNameMax= data.events.find(evento => evento.capacity === categoryMax)
        const categories = data.events.map(evento => evento.capacity);
        const categoryMax = Math.max(...categories)
        //    console.log(categoryNameMax.name);

        const categoriesPast = [...new Set(pastEvents.map((evento) => evento.category))]
        const categoriesupComing =[... new Set(upComingEvents.map((evento) => evento.category))]
 
        // porcentaje past events 
        pastEvents.forEach(events => {

            let procentaje = Math.max((events.assistance / events.capacity) * 100)
            
        });

        // porcentaje up coming 
       upComingEvents.forEach(events => {

            let procentaje = Math.max((events.assistance / events.capacity) * 100)
        });

        // max y minimo porcentaje up coming events 
        let eventoMaxUp = {
            porcentaje: 0
        };

        let eventoMinUp = {
            porcentaje: 100
        };

        for (let i = 0; i < upComingEvents.length; i++) {
            const evento = upComingEvents[i];
            const porcentaje = evento.assistance / evento.capacity * 100

            if (porcentaje > eventoMaxUp.porcentaje) {
                eventoMaxUp= {
                    porcentaje,
                    evento
                }
            } else if (porcentaje < eventoMinUp.porcentaje) {
                eventoMinUp= {
                    porcentaje,
                    evento
                }
            }
        }

        // max y minimo porcentaje past events 

        let eventoMax = {
            porcentaje: 0
        };

        let eventoMin = {
            porcentaje: 100
        };

        for (let i = 0; i < pastEvents.length; i++) {
            const evento = pastEvents[i];
            const porcentaje = evento.assistance / evento.capacity * 100
            if (porcentaje > eventoMax.porcentaje) {
                eventoMax = {
                    porcentaje,
                    evento
                }
            } else if (porcentaje < eventoMin.porcentaje) {
                eventoMin = {
                    porcentaje,
                    evento
                }
            }
        }

        // table up 
        const upTable = categoriesupComing.map(category => {

            const eventsCategoryUp = upComingEvents.filter(event => event.category === category);
           const totalReveneuUp = eventsCategoryUp.reduce((total, event) => total + event.price * event.estimate, 0 )
            const averageAttendanceUp = (eventsCategoryUp.reduce((total, event) => total + event.estimate / event.capacity, 0) / eventsCategoryUp.length) * 100;

          
            return {
                category,
                totalReveneuUp,
                averageAttendanceUp,
            };


        });
       

        const tableContentUp = upTable.map(({ category, totalReveneuUp, averageAttendanceUp }) => `
         <tr >
         <td class=" ">${category}</td>
        <td>${totalReveneuUp}</td>
        <td>${averageAttendanceUp.toFixed(2)}%</td>
            </tr>
        `).join('');

    // table pasts

        const pastTable = categoriesPast.map(category => {

            const eventsCategory = pastEvents.filter(event => event.category === category);
            const totalReveneu = eventsCategory.reduce((total, event) => total + event.price * event.assistance, 0)
            const averageAttendance = (eventsCategory.reduce((total, event) => total + event.assistance / event.capacity, 0) / eventsCategory.length) * 100;

            return {
                category,
                totalReveneu,
                averageAttendance,
            };


        });
    

        const tableContent = pastTable.map(({ category, totalReveneu, averageAttendance }) => `
         <tr>
         <td class=" ">${category}</td>
        <td>${totalReveneu}</td>
        <td>${averageAttendance.toFixed(2)}%</td>
            </tr>
        `).join('');


        table.innerHTML = `
    <table class="table table__border mr-3 text-dark">
    <tbody >
        <tr>
            <th colspan="3" class="tbody-title">Events statistics</th>
        </tr>

        <tr style="font-weight:bold;">
            <td>Event with the highest percentaje of attendance</td>
            <td>Event with the lowest percentaje of attendance</td>
            <td>Event with larger capacity</td>
        </tr>

        <tr>
            <td>${eventoMax.evento.name} ${eventoMax.porcentaje}</td>
            <td>${eventoMin.evento.name} ${eventoMin.porcentaje}</td>
            <td>${categoryMax}</td>
        </tr>

        <tr>
             <th colspan="3" class="tbody-title">Up Coming Events </th>
        </tr>
        <tr>
         <tr  style="font-weight:bold;">
            <td>Category</td>
            <td>Total Revenue</td>
            <td>Average Attendance</td>
            </tr>
        <tr>
        ${tableContentUp}
         </tr>
        </tr>


        <tr>
        <th colspan="3" class="tbody-title">Past Events</th>
        </tr>
        <tr>
        <tr>
        <th>Category</th>
        <th>Total Revenue</th>
        <th>Average Attendance</th>
        </tr>
        <tbody>
         ${tableContent}
         </tbody>
        </tr>



       
      
        </tbody>
        </table>
    `
    })









