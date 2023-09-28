const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');


// COUNTER
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

// SUBMIT 
const submitHandler = event => {
    //prevent default browser action
    event.preventDefault();

    // GET TEXT from text area
    const text = textareaEl.value;
    
    // Validate text (#hashtag is present and text is long enough)
    if (text.includes('#') && text.length > 4) {
        formEl.classList.add('form--valid');
        setTimeout(() => {
           formEl.classList.remove('form--valid') 
        }, 2000);
    } else {
        formEl.classList.add('form--invalid');
        setTimeout(() => {
            formEl.classList.remove('form--invalid') 
         }, 2000);

         textareaEl.focus();
         
         return;
    
    }

    
    

};

formEl.addEventListener('submit', submitHandler);