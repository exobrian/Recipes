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
  