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
            <div class="col-12 mb-4">
                <div class="card shadow">
                    <img src="${paquete.image}" class="card-img-top" alt="${paquete.name}" style="max-width: 300px;">
                    <div class="card-body">
                        <h5 class="card-title">${paquete.name}</h5>
                        <p class="card-text">${paquete.description}</p>
                        <h5 class="fw-bold text-primary">${paquete.precio}</h5>
                        <a href="#" class="btn btn-primary">Reservar</a>
                    </div>
                </div>
            </div>
        `;
  
      container.innerHTML += paqueteCard; // Append the card to the container
    });
  });
