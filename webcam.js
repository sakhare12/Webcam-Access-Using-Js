// Accessing the HTML elements
const video = document.getElementById('videoElement');
const canvas = document.getElementById('canvas');
const capturedImage = document.getElementById('capturedImage');
const captureBtn = document.getElementById('captureBtn');
const whatsappShareBtn = document.getElementById('whatsappShareBtn');

// Request access to the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        // Set the video element's source to the webcam stream
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.log("Error: " + err);
    });

// Capture the photo when the button is clicked
captureBtn.addEventListener('click', function() {
    // Draw the current video frame onto the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data from the canvas and set it as the source for the img element
    const imageData = canvas.toDataURL('image/png');
    capturedImage.src = imageData;

    // Show WhatsApp share button
    whatsappShareBtn.style.display = 'block';

    // Create a downloadable image link
    const downloadLink = document.createElement('a');
    downloadLink.href = imageData;
    downloadLink.download = 'captured-photo.png';
    downloadLink.innerHTML = 'Download Image';
    document.body.appendChild(downloadLink);

    // Set up WhatsApp sharing with a message
    whatsappShareBtn.addEventListener('click', function() {
        // WhatsApp only accepts text, so we can share a message like:
        const whatsappMessage = `Check out this photo I just captured! Download it here: [add hosted link if you upload]`;
        
        // WhatsApp share link
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp sharing link in a new tab
        window.open(whatsappURL, '_blank');
    });
});
