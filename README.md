console.log("--- Page 4 ---");

const productUrl = "../data/products.json";

function generateProductCard(product) {
    const card = `
        <div class="card">
            <div class="product-information">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p class="product-price">â¬${product.price}-</p>
            </div>
            <div class="product-image">
                <img src="../images/product.png" alt="product" srcset="" width="60" height="60">
            </div>
        </div>
    `;
    return card;
}

// Fetch data from products.json
fetch(productUrl)
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.querySelector('.container');

        // Loop through each product and generate cards
        data.forEach(product => {
            const cardMarkup = generateProductCard(product);
            cardContainer.innerHTML += cardMarkup;
        });
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    });
