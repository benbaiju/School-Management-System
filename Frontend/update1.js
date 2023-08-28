$(document).ready(function() {
    var API_URL = 'http://localhost:8080/users'; 


    function fetchData() {
        $.ajax({
            url: API_URL,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                displayData(data);
            },
            error: function(error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    
    function displayData(data) {
        var dataContainer = $('#dataContainer');
        if (data.length > 0) {
            var tableHtml = '<table class="table"><thead><tr><th>ID</th><th>Suffix</th><th>First Name</th><th>Middle Name</th><th>Last Name</th><th>Gender</th><th>Date of Birth</th><th>Phone Number</th><th>Email</th><th>Address</th><th>City</th><th>State</th><th>Zip</th><th>Comments</th><th>Actions</th></tr></thead><tbody>';
            data.forEach(function(item) {
                tableHtml += '<tr><td>' + item.id + '</td><td>' + item.suffix + '</td><td>' + item.firstname + '</td><td>' + item.middlename + '</td><td>' + item.lastname + '</td><td>' + item.gender + '</td><td>' + item.dob + '</td><td>' + item.number + '</td><td>' + item.email + '</td><td>' + item.address + '</td><td>' + item.city + '</td><td>' + item.state + '</td><td>' + item.zip + '</td><td>' + item.comments + '</td><td><button class="btn btn-primary update-btn" data-id="' + item.id + '">Update</button></td></tr>';
            });
            tableHtml += '</tbody></table>';
            dataContainer.html(tableHtml);

            $('.update-btn').on('click', function() {
                // var itemId = $(this).data('id');  
                // localStorage.setItem('selectedItemId', itemId);
                var itemId = $(this).data('id');
                window.location.href = "updateform.html?id=" + itemId;
               // window.location.href = "updateform.html";
            });
        } else {
            dataContainer.html('<p>No data available.</p>');
        }
    }


   

    // Initial fetch and display data
    fetchData();
});
