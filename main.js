const textArea = document.getElementById('input-text');
const outputArea = document.getElementById('output-area');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const backgroundImage = document.getElementById('background-img');
const copyBtn = document.querySelector('#copy-btn');

function validateInput(text) {
  // Validamos que no haya mayúsculas ni caracteres especiales
  const regex = /^[a-z ,.]*$/;
  const isValid = text.match(regex);
  if (!isValid) {
    text = text.replace(/[^a-z ]/g, '');
  }
  return text;
}

textArea.addEventListener('input', () => {
  textArea.value = validateInput(textArea.value);
});

const mapping = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

const inverseMapping = {};
for (const [key, value] of Object.entries(mapping)) {
  inverseMapping[value] = key;
}

function transformText(text, mapping) {
  let transformedText = '';
  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    transformedText += mapping[character] || character;
  }
  return transformedText;
}

encryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  textArea.value = '';
  let encryptText = transformText(textArea.value, mapping);
  let textoEncriptado = document.createElement('p');
  textoEncriptado.classList.add('active');
  textoEncriptado.textContent = encryptText;
  copyBtn.classList.remove('hidden-btn');
  copyBtn.classList.add('visible-btn');
  textArea.value = '';
  console.log(textoEncriptado);
});

decryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  let decryptText = transformText(textArea.value, inverseMapping);
  outputDiv.textContent = '';
  outputDiv.textContent = decryptText;
  textArea.value = '';
});
