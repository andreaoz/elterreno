const paquetes = [
    {
      name: "Paquete 1",
      description: "----",
      image: "multimedia/inflable2.jpeg",
      precio: "$5000",
    },
    {
      name: "Paquete 2",
      description: "-----",
      image: "multimedia/carrito1.jpeg",
      precio: "$2500",
    },
    {
      name: "Paquete 3",
      description: "-------.",
      image: "multimedia/fut1.jpeg",
      precio: "$3000",

    },
  ];
  
    document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("paquetes-container"); // Get the div where products will be inserted
  
    paquetes.forEach((paquete) => {
        const paqueteCard = `
          <div class="card mb-3 w-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <div class="row g-0">
              <div class="col-md-3 col-12">
                     <img src="${paquete.image}" class="img-fluid rounded-start" style="max-height: 300px; object-fit: cover;" alt="${paquete.name}">
              </div>
              <div class="col-md-8 col-12">
                  <div class="card-body">
                    <h5 class="card-title">${paquete.name}</h5>
                    <p class="card-text">${paquete.description}</p>
                    <h5 class="fw-bold text-primary">${paquete.precio}</h5>
                    <a href="#" class="btn btn-primary">Reservar</a>
                  </div>
              </div>
            </div>
          </div>
        `;
  
      container.innerHTML += paqueteCard; // Append the card to the container
    });
  });
