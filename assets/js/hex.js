// Array of all possible hex characters.
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
// '#' to indicate that the value will be hex.
let hexCode = '#';

// DOM Variables
const colorDisplay = document.getElementById("color");
const button = document.getElementById("btn");

// Generates and displays the hex code upon clicking the "Generate Color" button
button.addEventListener('click', () => {
    // Adds a hashtag to create a hex code.
    hexCode = "#";
    // For loop to generate a random hex code.
    for (i = 0; i < 6; i++) {
        hexCode += hexArray[Math.floor(Math.random() * hexArray.length)];

        // When the full code has been generated, it displays the hex code.
        if (hexCode.length = 7) {
            colorDisplay.textContent = hexCode;
            document.body.style.backgroundColor = hexCode;
            colorDisplay.style.color = hexCode;
        }
    }
});
