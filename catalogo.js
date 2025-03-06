const products = [
    {
      name: "Inflable con alberca de pelotas",
      description: "Alberca de pelotas opcional.",
      image: "multimedia/inflable2.jpeg",
      precio: "$700",
    },
    {
      name: "Carrito de paletas",
      description: "Pregunta por los paquetes.",
      image: "multimedia/carrito1.jpeg",
      precio: "$300",
    },
    {
      name: "Mesa de futbolito",
      description: "Pelotas incluidas.",
      image: "multimedia/fut1.jpeg",
      precio: "$600",

    },
    {
        name: "Juego de sillas y mesas",
        description: " Juego de una mesa con 4 sillas. Mantel blanco con sobremantel de color incluido.",
        image: "multimedia/mesa.jpeg",
        precio: "$140",
      },
      {
        name: "Cooler",
        description: " ___.",
        image: "multimedia/cooler.jpeg",
        precio: "$700",
      },
  ];
  
    document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container"); // Get the div where products will be inserted
  
    products.forEach((product) => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <h5 class="card-title">${product.precio}</h5>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        `;
  
      container.innerHTML += productCard; // Append the card to the container
    });
  });
  