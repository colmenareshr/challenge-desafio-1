const textArea = document.getElementById('input-text');
const outputArea = document.getElementById('result-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyBtn = document.getElementById('copy-btn');

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('input-text');
  textarea.focus();
});

textArea.addEventListener('input', () => {
  //We validate that there are no special Mayustulas and characters
  const regex = /^[a-z ,.]*$/;
  const isValid = textArea.value.match(regex);
  if (!isValid) {
    textArea.value = textArea.value.replace(/[^a-z ]/g, '');
  }
});

//We create an object with the key to encrying the text
const mapping = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

// Create the function to encrypt the text
function encrypting(text, mapping) {
  let encryptedText = '';

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    encryptedText += mapping[character] || character;
  }
  return encryptedText;
}

// Create the function to discard the text
function decrypting(text) {
  let decryptedText = '';

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if (character in mapping) {
      decryptedText += character;
      i += mapping[character].length - 1;
    } else {
      decryptedText += character;
    }
  }
  return decryptedText;
}

encryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  // We encrypted the text of textarea
  const encryptText = encrypting(textArea.value, mapping);

  // We create a <p> element to show the encrypted text
  const encryptedTextElement = document.createElement('p');
  encryptedTextElement.classList.add('active');
  encryptedTextElement.textContent = encryptText;

  // We replace the image and text with the <p> element with the encrypted text
  outputArea.innerHTML = '';
  outputArea.appendChild(encryptedTextElement);

  // We show the copy button
  copyBtn.classList.remove('hidden-btn');
  copyBtn.classList.add('visible-btn');
  textArea.value = '';
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(encryptText);
  });
});

decryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  let decryptText = decrypting(textArea.value);
  const decryptedTextElement = document.createElement('p');
  decryptedTextElement.classList.add('active');
  decryptedTextElement.textContent = decryptText;
  outputArea.innerHTML = '';
  outputArea.appendChild(decryptedTextElement);
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(decryptText);
  });
});
