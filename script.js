document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // You can add your code here to handle form submission, like sending an email using AJAX
        // For simplicity, let's just log the form data to the console
        var formData = new FormData(this);
        console.log(formData);
    });
});
