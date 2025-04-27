 // Function to load the navigation menu dynamically
 function loadNav() {
    const navContainer = document.getElementById('nav-container');
    fetch('./nav.html')  // Fetch the nav.html file
      .then(response => response.text())  // Convert the response to text
      .then(data => {
        navContainer.innerHTML = data;  // Insert the navigation HTML into the page
      })
      .catch(error => console.error('Error loading navigation:', error));
  }
  
  // Call the loadNav function when the page loads
  document.addEventListener('DOMContentLoaded', loadNav);

// Function to show the ingredient image
function showIngredient(imageSrc) {
    const modal = document.getElementById('ingredientModal');
    const img = document.getElementById('ingredientImage');
    
    // Ensure the modal is visible
    modal.style.display = 'flex';  // Show the modal
  
    // Update the image source to the new ingredient
    img.src = imageSrc;
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('ingredientModal');
    modal.style.display = 'none';  // Hide the modal
  }
  
  // Event listener to close the modal when pressing the ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {  // Check if the pressed key is 'Escape'
      closeModal();
    }
  });
  
  // Close modal when clicking the close button
  document.getElementById('closeModal').addEventListener('click', closeModal);
  
 
  