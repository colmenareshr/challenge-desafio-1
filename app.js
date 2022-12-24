const textArea = document.getElementById('input-text');
const outputDiv = document.getElementById('output-text');
const criptographButton = document.getElementById('cryptograph-button');

textArea.addEventListener('input', ()=> {
  const textInput = textArea.value
  // console.log(text);
  function code(text) {
    // Create a variable to store the encrypted text
    let encryptedText = '';

    // Tour each character in the entry text
    for (let i = 0; i < textInput.length; i++) {
      //get the text
      let character = text.charAt(i);
      //If it is a tiny letter, apply encryption
      if (character >= 'a' && character <= 'z') {
        switch (character) {
          case 'e':
            encryptedText = 'enter';
            break;
          case 'i':
            encryptedText = 'imes';
            break;
          case 'a':
            encryptedText = 'ai';
            break;
          case 'o':
            encryptedText = 'ober';
            break;
          case 'u':
            encryptedText = 'ufat';
            break;
          default:
            encryptedText += character;
        }
      } else {
        //If it is not lowercase
        encryptedText += character;
      }
    }
    // Returns the encrypted text
    return encryptedText;
  }
  criptographButton.addEventListener('click', (e) => {
    e.preventDefault();
    const encryptedText = code(textInput);
    outputDiv.textContent += encryptedText;
    
    textArea.value = '';


    console.log('Boton clicado', encryptedText);
  });
})





