const products = [
    {
      name: "Inflable",
      description: "Alberca de pelotas opcional.",
      image: "multimedia/inflable2.jpeg",
      precio: "$700",
      images: [
        "multimedia/inflable2.jpeg",
        "multimedia/inflable.png",
        "multimedia/inflable3.jpeg"
      ]
    },
    {
      name: "Carrito de paletas",
      description: "Pregunta por los paquetes.",
      image: "multimedia/carrito1.jpeg",
      precio: "$300",
      images: [
        "multimedia/carrito1.jpeg",
        "multimedia/carrito2.jpeg",
      ]
    },
    {
      name: "Mesa de futbolito",
      description: "Pelotas incluidas.",
      image: "multimedia/fut1.jpeg",
      precio: "$600",
      images: [
        "multimedia/fut1.jpeg",
        "multimedia/fut2.jpeg",
      ]


    },
    {
        name: "Juego de sillas y mesas",
        description: " Juego de una mesa con 4 sillas. Mantel blanco con sobremantel de color incluido.",
        image: "multimedia/mesa.jpeg",
        precio: "$140",
        images: [
          "multimedia/mesa.jpeg",
          "multimedia/mesa2.jpeg",
        ]

      },
      {
        name: "Cooler",
        description: " ___.",
        image: "multimedia/cooler.jpeg",
        precio: "$700",
        images: [
          "multimedia/cooler.jpeg"        ]

      },
  ];
  


// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name"); // Look for the product name

// Find the product in the array
const product = products.find(p => p.name === productName);

// If product is found, update the HTML
if (product) {
    // Set the main product details
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.precio;

    // Select the main image element
    let mainImage = document.getElementById("product-image");

    // Set the first image as the main image (default)
    if (product.images.length > 0) {
        mainImage.src = product.images[0];
    }

    // Select the thumbnail container
    let thumbnailContainer = document.getElementById("thumbnailContainer");
    thumbnailContainer.innerHTML = ""; // Clear previous thumbnails

    // Generate thumbnails
    product.images.forEach((imageSrc, idx) => {
        let imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        imgElement.classList.add("thumb-img", "me-2");
        imgElement.onclick = function () {
            changeImage(this);
        };

        // Add "active" class to the first thumbnail
        if (idx === 0) imgElement.classList.add("active");

        thumbnailContainer.appendChild(imgElement);
    });

} else {
    document.querySelector(".container").innerHTML = "<h3>Producto no encontrado</h3>";
}

// Function to change the main image when clicking a thumbnail
function changeImage(element) {
    let mainImage = document.getElementById("product-image");
    if (mainImage) {
        mainImage.src = element.src;
    }
}
