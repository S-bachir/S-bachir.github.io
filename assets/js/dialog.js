// scripts.js

// Function to open a dialog
function openDialog(dialogId) {
    const dialogOverlay = document.getElementById(dialogId);
    if (dialogOverlay) {
      dialogOverlay.style.display = 'flex';
      // Prevent background scrolling
      document.body.classList.add('dialog-open');
    }
  }
  
  // Function to close a dialog
  function closeDialog(dialogId) {
    const dialogOverlay = document.getElementById(dialogId);
    if (dialogOverlay) {
      dialogOverlay.style.display = 'none';
      // Allow background scrolling
      document.body.classList.remove('dialog-open');
    }
  }
  
  // Close dialog when clicking outside the dialog content
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('dialog-overlay')) {
      closeDialog(event.target.id);
    }
  });
  