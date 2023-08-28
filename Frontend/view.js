$(document).ready(function() {
   
    var apiUrl = 'http://localhost:8080/users'; 
  
   
    $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        displayData(data);
      },
      error: function(error) {
        console.error('Error fetching data:', error);
      }
    });
  
   
    function displayData(data) {
        var dataContainer = $('#dataContainer');
        if (data.length > 0) {
          var tableHtml = '<table class="table"><thead><tr><th>ID</th><th>Suffix</th><th>First Name</th><th>Middle Name</th><th>Last Name</th><th>Gender</th><th>Date of Birth</th><th>Phone Number</th><th>Email</th><th>Address</th><th>City</th><th>State</th><th>Zip</th><th>Comments</th></tr></thead><tbody>';
          data.forEach(function(item) {
            tableHtml += '<tr><td>' + item.id + '</td><td>' + item.suffix + '</td><td>' + item.firstname + '</td><td>' + item.middlename + '</td><td>' + item.lastname + '</td><td>' + item.gender + '</td><td>' + item.dob + '</td><td>' + item.number + '</td><td>' + item.email + '</td><td>' + item.address + '</td><td>' + item.city + '</td><td>' + item.state + '</td><td>' + item.zip + '</td><td>' + item.comments + '</td></tr>';
          });
          tableHtml += '</tbody></table>';
          dataContainer.html(tableHtml);
        } else {
          dataContainer.html('<p>No data available.</p>');
        }
      }
      
  });
  