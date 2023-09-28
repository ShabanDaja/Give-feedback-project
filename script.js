const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbackListEl = document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');
const MAX_CHARS = 150;
const spinnerEl = document.querySelector('.spinner');

// COUNTER
const inputHandler = () => {
    // max number of characters
    const maxNrchars = MAX_CHARS;
    
    // number of characters currently typed
    const nrCharsTyped = textareaEl.value.length;
    
    //calculate number of characters left
    const charsLeft = maxNrchars - nrCharsTyped;
    
    //show number of char left
    counterEl.textContent = charsLeft;
};

textareaEl.addEventListener('input', inputHandler);

// SUBMIT 
const showIndicator = textCheck => {

    const className = textCheck === 'valid' ? 'form--valid' : 'form--invalid';

    formEl.classList.add(className);
        setTimeout(() => {
           formEl.classList.remove(className);
        }, 2000);
}
const submitHandler = event => {
    //prevent default browser action
    event.preventDefault();

    // GET TEXT from text area
    const text = textareaEl.value;
    
    // Validate text (#hashtag is present and text is long enough)
    if (text.includes('#') && text.length > 4) {
        showIndicator('valid');
    } else {
        showIndicator('invalid');

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
    counterEl.textContent = MAX_CHARS;
};

formEl.addEventListener('submit', submitHandler);

// FEEDBACK LIST

fetch('https://bytegrad.com/course-assets/js/1/api/feedbacks')
    .then(response => response.json())
    .then(data => {

        //remove spinner
        spinnerEl.remove();

        data.feedbacks.forEach(feedbackItem => {
            
            const feedbackItemHTML = `
                <li class="feedback">
                    <button class="upvote">
                        <i class="fa-solid fa-caret-up upvote__icon"></i>
                        <span class="upvote__count">${feedbackItem.upvoteCount}</span>
                    </button>
                    <section class="feedback__badge">
                        <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
                    </section>
                    <div class="feedback__content">
                        <p class="feedback__company">${feedbackItem.company}</p>
                        <p class="feedback__text">${feedbackItem.text}</p>
                    </div>
                    <p class="feedback__date">${feedbackItem.daysAGO === 0 ? 'NEW' : `${feedbackItem.daysAgo}d` }</p>
                </li>
            `;
    
            feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML);
        });

    });
