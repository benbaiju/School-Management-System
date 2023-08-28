document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      const formData = new FormData(form); 
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
  
      const apiUrl = 'http://localhost:8080/save';
  

      fetch(apiUrl, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      })
        .then(response => response.json())
        .then(data => {
        
          console.log(data);
        })
        .catch(error => {
      
          console.log('Error:', error);
        });
    });
  });
  