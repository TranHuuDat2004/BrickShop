  // Get elements
const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeSidebar = document.getElementById('closeSidebar');

// Open the sidebar when clicking the "Giỏ hàng" button
cartButton.addEventListener('click', function() {
  cartSidebar.classList.add('open');
});

// Close the sidebar when clicking the close button
closeSidebar.addEventListener('click', function() {
  cartSidebar.classList.remove('open');
});

// Optionally close the sidebar when clicking outside of it
window.addEventListener('click', function(event) {
  if (!cartSidebar.contains(event.target) && !cartButton.contains(event.target)) {
    cartSidebar.classList.remove('open');
  }
});

