// Function to update total price for a product
function updateTotalPrice(productId) {
    var quantityInput = $('#quantity_' + productId);
    var totalPriceElement = $('#total_' + productId);
    var priceElement = $('#price_' + productId);

    var quantity = parseInt(quantityInput.val());
    var price = parseFloat(priceElement.text().split('$ ')[1]);

    var totalPrice = quantity * price;
    
    // Round the total price to two decimal places
    totalPrice = totalPrice.toFixed(2);
    
    totalPriceElement.text('$ ' + totalPrice);
}


// Function to handle increase quantity
function increaseQuantity(productId) {
    var quantityInput = $('#quantity_' + productId);
    var currentQuantity = parseInt(quantityInput.val());
    quantityInput.val(currentQuantity + 1);

    // Update total price
    updateTotalPrice(productId);

    // Send AJAX request to update quantity in database
    updateQuantity(productId, quantityInput.val());
}

// Function to handle decrease quantity
function decreaseQuantity(productId) {
    var quantityInput = $('#quantity_' + productId);
    var currentQuantity = parseInt(quantityInput.val());
    if (currentQuantity > 1) {
        quantityInput.val(currentQuantity - 1);

        // Update total price
        updateTotalPrice(productId);

        // Send AJAX request to update quantity in database
        updateQuantity(productId, quantityInput.val());
    }
}

// Function to update quantity in database via AJAX
function updateQuantity(productId, newQuantity) {
    $.ajax({
        type: 'POST',
        url: 'update-cart.php',
        data: {
            product_id: productId,
            quantity: newQuantity
        },
        success: function(response) {
            // Handle response from server if needed
        },
        error: function(xhr, status, error) {
            // Handle errors if any
            console.error(error);
        }
    });
}
