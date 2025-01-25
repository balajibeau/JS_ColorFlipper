const body = document.getElementsByTagName("body")[0];
let intervalId = null; // To store the interval ID
let isRunning = false; // Flag to check if the process is running

// Function to change background color
function colorchange(color) {
    if (intervalId) {
        clearInterval(intervalId); // Stop any ongoing RGB cycle
        intervalId = null;
        isRunning = false; // Update flag
        document.getElementById("rgb").textContent = "Start"; // Reset RGB button text
    }
    body.style.backgroundColor = color;
    console.log(`Background color changed to: ${color}`);
}

// Function to generate and set a random background color
function randomcolor() {
    if (intervalId) {
        clearInterval(intervalId); // Stop any ongoing RGB cycle
        intervalId = null;
        isRunning = false; // Update flag
        document.getElementById("rgb").textContent = "Start"; // Reset RGB button text
    }

    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red},${blue},${green})`;

    const rand = document.getElementById("random");
    rand.style.backgroundColor = `rgb(${red},${blue},${green})`;

    console.log(`Random color applied: rgb(${red},${blue},${green})`);
}

// Function to toggle the start/stop RGB color change
function toggleRgb() {
    const rgbButton = document.getElementById("rgb");

    if (isRunning) {
        // Stop the interval if it's running
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;

        // Update button text to "Start"
        rgbButton.textContent = "Start";
        console.log("RGB color change stopped.");
    } else {
        // Start the interval if it's stopped
        intervalId = setInterval(() => {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            body.style.backgroundColor = `rgb(${red},${blue},${green})`;

            const temp = document.getElementById("rgb");
            temp.style.backgroundColor = `rgb(${red},${blue},${green})`;

            console.log(`RGB cycle color: rgb(${red},${blue},${green})`);
        }, 300);

        isRunning = true;

        // Update button text to "Stop"
        rgbButton.textContent = "Stop";
        console.log("RGB color change started.");
    }
}
