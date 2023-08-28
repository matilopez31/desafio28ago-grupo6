const PRODUCTS = [
    { id: 1, name: "Teléfono inteligente", description: "Excelente teléfono, gran pantalla y cámaras." },
    { id: 2, name: "Laptop", description: "Diseño elegante, procesador rápido y gran capacidad de almacenamiento." },
    { id: 3, name: "Audífonos inalámbricos", description: "Calidad de sonido envolvente tanto para música como para llamadas" }
];

document.addEventListener("DOMContentLoaded", function () 
{
    const productList = document.getElementById("productList");

    for (const product of PRODUCTS) 
    {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `product-info.html?id=${product.id}`;
        link.textContent = product.name;

        link.addEventListener("click", function () 
        {
            localStorage.setItem("ProdID", product.id);
        });

        listItem.appendChild(link);
        productList.appendChild(listItem);
    }
});
