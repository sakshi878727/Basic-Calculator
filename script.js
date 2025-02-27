// JavaScript file: script.js

// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to evaluate and display the result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error"; // Handle invalid expressions
    }
}
