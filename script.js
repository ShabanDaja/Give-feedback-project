const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbackListEl = document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');


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

    const hashtag = text.split(' ').find(word => word.includes('#'));
    const company = hashtag.substring(1);
    const badgeLetter = company.substring(0, 1).toUpperCase();
    const upvoteCount = 0;
    const daysAGO = 0;

    const feedbackItemHTML = `
        <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                 <p class="feedback__letter">${badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${company}</p>
                <p class="feedback__text">${text}</p>
            </div>
            <p class="feedback__date">${daysAGO === 0 ? 'NEW' : `${daysAgo}d` }</p>
        </li>
    `;

    feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML);

    // Clear text area after i click submit and blur it
    textareaEl.value = '';
    submitBtnEl.blur();
    counterEl.textContent = '150';
};

formEl.addEventListener('submit', submitHandler);