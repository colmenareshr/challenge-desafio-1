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
    // We validate that there are no capital letters or special characters
    const regex = /^[a-z ,.]*$/;
    const isValid = textArea.value.match(regex);
    if (!isValid) {
      textArea.value = textArea.value.replace(/[^a-z ]/g, '');
    }
  });
}

// We call the function when the page is loaded
document.addEventListener('DOMContentLoaded', validateInput);

// This object contains the character mapping to encrypt
const mapping = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

// We create an inverse mapping to facilitate the deciphering
const inverseMapping = {};
for (const [key, value] of Object.entries(mapping)) {
  inverseMapping[value] = key;
  console.log(inverseMapping);
}

// This function transforms a text using the specified mapping
function transformText(text, mapping) {
  let transformedText = '';
  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    transformedText += mapping[character] || character;
  }
  return transformedText;
}

