$(document).ready(function () {
    // Parse the query parameter to retrieve the item ID
    const urlParams = new URLSearchParams(window.location.search);
    const selectedItemId = urlParams.get('id');
    console.log(selectedItemId);
  
    // Update user data on form submission
    $("#updateform").submit(function (event) {
      event.preventDefault();
  
      const form = document.querySelector('form');
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
      $.ajax({
        url: 'http://localhost:8080/update' + '/' + selectedItemId, // Use the retrieved item ID here
        method: "PUT",
        contentType: 'application/json', // Set the content type
        data: JSON.stringify(formObject),
        success: function () {
          alert("User data updated successfully.");
        },
        error: function () {
          alert("Error updating user data.");
        },
      });
    });
  });
  