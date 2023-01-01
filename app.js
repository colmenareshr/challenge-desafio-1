const textArea = document.getElementById('input-text');
const outputDiv = document.getElementById('output-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const backgroundImage = document.getElementById('background-img');
const copyBtn = document.getElementById('copy-btn');

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('input-text');
  textarea.focus();
});

function validateInput() {
  const textArea = document.getElementById('input-text');
  textArea.addEventListener('input', () => {
    // Validamos que no haya mayúsculas o caracteres especiales
    const regex = /^[a-z ,.]*$/;
    const isValid = textArea.value.match(regex);
    if (!isValid) {
      textArea.value = textArea.value.replace(/[^a-z ]/g, '');
    }
  });
}

// We call the function when the page is loaded
document.addEventListener('DOMContentLoaded', validateInput);