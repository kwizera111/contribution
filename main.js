const input = document.getElementById('input');
const result = document.getElementById('result');

function output() {
    window.alert("You searched for: " + input.value);
    input.value = ""; // Clear the input field after alert
}