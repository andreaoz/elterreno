
    document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container"); // Get the div where products will be inserted
  
    products.forEach((product) => {
        const productCard = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <h5 class="card-title">${product.precio}</h5>
                        <a href="productos.html?name=${encodeURIComponent(product.name)}" class="btn btn-primary">Más información</a>

                    </div>
                </div>
            </div>
        `;
  
      container.innerHTML += productCard; // Append the card to the container
    });
  });
