import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const formData = {};

formRef.addEventListener('input', throttle(setDataForm, 500));
getDataForm(STORAGE_KEY);
formRef.addEventListener('submit', onFormSubmit);

function setDataForm(event) {    
    // console.log(event.target);
    formData[event.target.name] = event.target.value;
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));           
};

function getDataForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // console.log(savedData);
    if (savedData) {
        emailRef.value = savedData.email;
        messageRef.value = savedData.message;
    }
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};