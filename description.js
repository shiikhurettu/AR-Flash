
    // productData.js
const products = [
    {
        id: 1,
        title: "Opal Necklace",
        price: "₹1,99,999",
        description: "Timeless elegance meets modern sophistication...Timeless elegance meets modern sophistication in this stunning freshwater pearl necklace. Each pearl is carefully selected for its lustrous sheen and perfect roundness, creating a piece that's both classic and contemporary. Perfect for special occasions or adding a touch of luxury to your everyday wear.",
        specifications: {
        pearlType: "Freshwater Cultured",
            size: "7-8mm",
            chainLength: "18 inches",
            clasp: "14K Gold",
            color: "White/Cream"
        },
        image: "img2.JPG"
    },
    {
        id: 2,
        title: "Emerald Pendant",
        price: "₹60,999",
        description: "Timeless elegance meets modern sophistication in this stunning freshwater pearl necklace. Each pearl is carefully selected for its lustrous sheen and perfect roundness, creating a piece that's both classic and contemporary. Perfect for special occasions or adding a touch of luxury to your everyday wear.",
        specifications: {
            stoneType: "Emerald",
            size: "6-7mm",
            chainLength: "20 inches",
            clasp: "Platinum",
            color: "Green"
        },
        image: "img3.JPG"
    },
    {
        id: 3,
        title: "Egyptian necklace",
        price: "₹99,999",
        description: "Timeless elegance meets modern sophistication in this stunning freshwater pearl necklace. Each pearl is carefully selected for its lustrous sheen and perfect roundness, creating a piece that's both classic and contemporary. Perfect for special occasions or adding a touch of luxury to your everyday wear.",
        specifications: {
            stoneType: "Emerald",
            size: "6-7mm",
            chainLength: "20 inches",
            clasp: "Platinum",
            color: "Green"
        },
        image: "img3.JPG"
    }
    // Add more products as needed
];
// renderProduct.js
function renderProduct() {
    // Get product ID from the URL parameter
    const productId = new URLSearchParams(window.location.search).get("id");
    const product = products.find(p => p.id == productId);

    if (!product) {
        document.getElementById("product-container").innerHTML = "<p>Product not found</p>";
        return;
    }

    // Set product details
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("main-image").src = product.image;

    // Set specifications list
    const specList = document.getElementById("spec-list");
    specList.innerHTML = "";  // Clear any existing specifications
    for (const [key, value] of Object.entries(product.specifications)) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${key}</span><span>${value}</span>`;
        specList.appendChild(listItem);
    }

    // Optional: Set rating or any additional details here
    document.getElementById("rating").textContent = "★★★★★ (124 reviews)";
}

window.onload = renderProduct;
