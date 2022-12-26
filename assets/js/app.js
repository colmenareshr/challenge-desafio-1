const textArea = document.getElementById('input-text');
const outputDiv = document.getElementById('output-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');

textArea.addEventListener('input', () => {
  //We validate that there are no special Mayustulas and characters
  const regex = /^[a-z ,.]*$/;
  const isValid = textArea.value.match(regex);
  if (!isValid) {
    textArea.value = textArea.value.replace(/[^a-z ]/g, '');
  }
  //We are it for all the characters of the input
});

const mapping = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

function encrypting(text) {
  let encryptedText = '';

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    encryptedText += mapping[character] || character;
  }
  return encryptedText;
}

function decrypting(text) {
  let decryptedText = '';

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if(character in mapping) {
      decryptedText += character;
      i += mapping[character].length - 1
    }else {
      decryptedText += character
    }
  }
  return decryptedText;
}

encryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  let encryptText = encrypting(textArea.value);
  outputDiv.textContent = encryptText;
  textArea.value = '';
});

decryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  let decryptText = decrypting(textArea.value);
  outputDiv.textContent = '';
  outputDiv.textContent = decryptText;
  textArea.value = '';
});
