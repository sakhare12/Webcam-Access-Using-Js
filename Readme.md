# Title
Code For Accessing Webcam

# Description
Code For Accessing Webcam using JS

HTML Structure

1) HTML Elements:
a) videoElement: Displays the live video feed from the webcam.
b) captureBtn: Button for capturing a still image from the webcam.
c) canvas: An off-screen element used to temporarily hold the captured image before displaying it on the page.
d) capturedImage: Displays the captured image.
e) whatsappShareBtn: Button to share the captured image on WhatsApp.
2) Styling: Basic CSS styles are applied to center the elements, set dimensions for the video feed and canvas, and style the buttons.

JavaScript Code
The JavaScript functionality, stored in a file named webcam.js, interacts with the webcam and enables photo capture and sharing. 

1) The getUserMedia function requests access to the webcam. If granted, it streams the video directly into the       videoElement. 
2) If there is an error accessing the webcam, it logs an error message.
3) When captureBtn is clicked, this code captures the current video frame from the webcam and draws it onto the canvas.
4) The canvas.toDataURL method converts the canvas content into a base64-encoded image (in PNG format), which is then set as the source for the capturedImage element to display the captured photo.
5) The whatsappShareBtn is set to display: block to make it visible after capturing the photo.
6) A new a (anchor) element is created, set with href linking to the image data, and configured to download as "captured-photo.png".
7) The link is added to the page, allowing users to download their captured photo.
8) When whatsappShareBtn is clicked, it prepares a message for WhatsApp sharing.
9) Since WhatsApp doesn't allow direct image sharing through URL schemes, this code instead shares a text message with a placeholder link.
10) The message and the URL are encoded and opened in a new tab, launching WhatsApp if available.

