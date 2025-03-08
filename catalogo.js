
    document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container"); // Get the div where products will be inserted
  
    products.forEach((product) => {
        const productCard = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card rounded-4 catalogo-card">
                    <img src="${product.image}" class="card-img-top fixed-img" alt="${product.name}">
                    <div class="card-body">
                        <p class="card-title">${product.name}</p>
                        <h4 class="card-title">${product.precio}</h4>
                         <!-- Contenedor flexible para los botones -->
            <ul class="nav list-unstyled d-flex align-items-center mt-auto">
                <li class="me-3">
                    <a href="productos.html?name=${encodeURIComponent(product.name)}" class="btn btn-outline-secondary">Más información</a>
                </li>
                <li>
                    <a class="text-body-secondary" href="https://wa.me/message/EX2BGD6GL7H6K1">
                        <i class="fab fa-whatsapp fa-lg" style="color: #25D366;"></i>
                    </a>
                </li>
            </ul>
                        

                    </div>
                </div>
            </div>
        `;
  
      container.innerHTML += productCard; // Append the card to the container
    });
  });

