document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtener los valores del formulario
    const image = document.getElementById('image').files[0]; // Selecciona el primer archivo de imagen
    const productName = document.getElementById('productName').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Crear un objeto FormData para enviar datos del formulario incluyendo la imagen
    const formData = new FormData();
    formData.append('image', image);
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('quantity', quantity);
    formData.append('price', price);

    // Crear una nueva card para mostrar la información del producto
    createProductCard(formData);
});

function createProductCard(formData) {
    // Crear elementos para la card
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    // Mostrar imagen del producto si se ha cargado
    const image = formData.get('image');
    if (image) {
        const imageUrl = URL.createObjectURL(image); // Obtener la URL de la imagen cargada
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = imageUrl;
        card.appendChild(img);
    }
    const productName = document.createElement('h5');
    productName.classList.add('card-title');
    productName.textContent = formData.get('productName');

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = formData.get('description');

    const quantity = document.createElement('p');
    quantity.classList.add('card-text');
    quantity.textContent = 'Cantidad: ' + formData.get('quantity');

    const price = document.createElement('p');
    price.classList.add('card-text');
    price.textContent = 'Precio: ' + formData.get('price');

    // Agregar elementos a la card
    cardBody.appendChild(productName);
    cardBody.appendChild(description);
    cardBody.appendChild(quantity);
    cardBody.appendChild(price);
    card.appendChild(cardBody);


    // Agregar la card al DOM
    document.getElementById('productCards').appendChild(card);
}
