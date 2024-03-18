document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtener los valores del formulario
    var productName = document.getElementById('productName').value;
    var description = document.getElementById('description').value;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var image = document.getElementById('image').files[0]; // Selecciona el primer archivo de imagen

    // Crear una nueva card para mostrar la información del producto
    createProductCard(productName, description, quantity, price, image);
});

function createProductCard(productName, description, quantity, price, image) {
    // Crear elementos para la card
    var card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.maxWidth = '540px';

    var row = document.createElement('div');
    row.classList.add('row', 'g-0');
    card.appendChild(row);

    var imageCol = document.createElement('div');
    imageCol.classList.add('col-md-4');
    row.appendChild(imageCol);

    var img = document.createElement('img');
    img.classList.add('img-fluid', 'rounded-start');
    img.alt = productName;
    img.src = URL.createObjectURL(image); // Obtener la URL de la imagen cargada
    imageCol.appendChild(img);

    var textCol = document.createElement('div');
    textCol.classList.add('col-md-8');
    row.appendChild(textCol);

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    textCol.appendChild(cardBody);

    var title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = productName;
    cardBody.appendChild(title);

    var desc = document.createElement('p');
    desc.classList.add('card-text');
    desc.textContent = description;
    cardBody.appendChild(desc);

    var qty = document.createElement('p');
    qty.classList.add('card-text');
    qty.textContent = 'Cantidad: ' + quantity;
    cardBody.appendChild(qty);

    var prc = document.createElement('p');
    prc.classList.add('card-text');
    prc.textContent = 'Precio: ' + price;
    cardBody.appendChild(prc);

    // Agregar la card al contenedor de cards
    document.getElementById('productCardsRow').appendChild(card);
}
