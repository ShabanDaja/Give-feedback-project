const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');

const inputHandler = () => {
    // max number of characters
    const maxNrchars = 150;
    
    // number of characters currently typed
    const nrCharsTyped = textareaEl.value.length;
    
    //calculate number of characters left
    const charsLeft = maxNrchars - nrCharsTyped;
    
    //show number of char left
    counterEl.textContent = charsLeft;
};

textareaEl.addEventListener('input', inputHandler);