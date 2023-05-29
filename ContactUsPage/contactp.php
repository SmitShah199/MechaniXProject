<?php
$name = $_POST['name']; // Retrieve the value of the 'name' 
$email = $_POST['email']; // Retrieve the value of the 'email' 
$subject = $ POST['subject'] // Retrieve the value of the 'subject' field from the submitted form 
$message = $_POST['message']; // Retrieve the value of the 'message' 
// Send the email
$to = "mechanix24x7@gmail.com"; // Replace with your email address or the desired recipient email address
$subject = "Contact form submission"; // Set the subject line for the email
$body = "Name: $name\nEmail: $email\n\n$message"; // Compose the body of the email, including the submitted form data
$headers = "From: $name <$email>" . "\r\n"; // Set the "From" header for the email, including the name and email of the sender
$headers .= "Reply-To: $email" . "\r\n"; // Set the "Reply-To" header for the email, indicating the email to which replies should be sent

// Send the email using the mail() function
$mailSent = mail($to, $subject, $body, $headers);

// Check if the email was sent successfully and display a success message
if ($mailSent) {
  echo "Thank you for contacting us. We will get back to you soon.";
} else {
  echo "Oops! Something went wrong. Please try again later.";
}
?>