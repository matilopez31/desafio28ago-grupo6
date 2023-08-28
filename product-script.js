document.addEventListener("DOMContentLoaded", function () 
{
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");

    const productId = localStorage.getItem("ProdID");

    const product = PRODUCTS.find(item => item.id === parseInt(productId));

    if (product) 
    {
        productName.textContent = `Nombre del producto: ${product.name}`;
        productDescription.textContent = `Descripción del producto: ${product.description}`;
    } 
    else 
    {
        productName.textContent = "Producto no encontrado";
        productDescription.textContent = "";
    }
});


 