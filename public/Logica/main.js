const btn = document.getElementById("btn");
const productsList = document.getElementById("products");

btn.addEventListener("click", async () => {
    mostrarProductos();
});

const btn_agregar = document.getElementById("btn_agregar");

btn_agregar.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/api/products/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "gorra",
            price: 1500,
            description: "gorra negra",
            stock: 5
        })
    });

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Respuesta:", data);
    mostrarProductos();
});

const btn_eliminar = document.getElementById("btn_eliminar");
const input_id = document.getElementById("input_id");

btn_eliminar.addEventListener("click", async () => {
    const id = input_id.value;
    if (!id) {
        alert("Por favor, ingrese el ID del producto a eliminar.");
        return;
    }

    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE"
    });

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Respuesta:", data);
    mostrarProductos();
});

function mostrarProductos() {
    fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(products => {
            const productsList = document.getElementById("products");
            productsList.innerHTML = "";
            products.forEach(product => {
                productsList.innerHTML += `
                    <li>
                       id: (${product.id}) nombre: ${product.name} - $${product.price}
                    </li>
                `;
            });
        })
        .catch(error => {
            console.error("Error al obtener los productos:", error);
        });
}