import _throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
feedbackFormRef.addEventListener('input', _throttle(onFormInputText, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);

const SAVE_KEY = "feedback-form-state";
let formData = {
    email: '',
    message: ''
};

startPage()

function onFormInputText(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(SAVE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault()
    if (formData.email === '' || formData.message === '') {
        alert('Заповніть поля!')
        return
    }
    console.log(formData)

    Object.keys(formData).forEach(key => (formData[key] = ''));

    event.currentTarget.reset();
    localStorage.removeItem(SAVE_KEY)
};

function startPage(event) {
    const saveMessage = localStorage.getItem(SAVE_KEY);
    const stringMessage = JSON.parse(saveMessage);

    for (const key in stringMessage) {
        feedbackFormRef.elements[key].value = stringMessage[key];
        formData[key] = stringMessage[key];
    }

};

