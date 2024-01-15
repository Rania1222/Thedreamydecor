function Send() {
    // Get form values
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var message = document.getElementById("field").value;

    // Validate form fields
    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a data object to send to the server
    var data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Send the data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "processForm.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            // You can add further actions here if needed
        }
    };
    xhr.send(JSON.stringify(data));
}
