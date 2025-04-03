// Definice produktů
const products = [
    {
        id: 1,
        image: "a-blue-hoodie-hanging-on-a-clothesline-photo.jpeg",
        title: "UrbanFlex Hoodie",
        description: "Stylová oversized mikina s minimalistickým designem, ideální na každý den.",
        price: "1 499 Kč"
    },
    {
        id: 2,
        image: "images%20(3).jpg",
        title: "SF Cargo Pants",
        description: "Moderní cargo kalhoty s odolným materiálem a praktickými kapsami na zip.",
        price: "1 199 Kč"
    },
    {
        id: 3,
        image: "close-up-view-of-runner-sport-shoes-sprint-running-on-track-training-for-marathon-generative-ai-photo.jpg",
        title: "TB Velocity Sneakers",
        description: "Lehoučké futuristické tenisky s prodyšnou síťovinou a stylovým vzhledem.",
        price: "2 299 Kč"
    }
];

// Funkce pro otevření modálního okna
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("modal-image").src = product.image;
        document.getElementById("modal-title").innerText = product.title;
        document.getElementById("modal-description").innerText = product.description;
        document.getElementById("modal-price").innerText = `Cena: ${product.price}`;
        document.getElementById("productModal").style.display = "block";
    }
}

// Funkce pro zavření modálního okna
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Event listener pro zavření modálního okna při kliknutí na "X"
document.querySelector(".close").addEventListener("click", closeModal);

// Event listener pro produkty
const productElements = document.querySelectorAll(".product");
productElements.forEach(productElement => {
    productElement.addEventListener("click", () => {
        const productId = parseInt(productElement.getAttribute("data-id"));
        openModal(productId);
    });
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        closeModal();
    }
});
