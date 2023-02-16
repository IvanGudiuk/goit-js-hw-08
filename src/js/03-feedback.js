import Throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
let formData = {};
const FORM_DATA_KEY = 'feedback-form-state';
const STORAGE = localStorage;
const handleInputData = ({ target }) => {
  formData[target.name] = target.value;
  STORAGE.setItem(FORM_DATA_KEY, JSON.stringify(formData));
};
if (STORAGE.getItem(FORM_DATA_KEY)) {
  try {
    formData = JSON.parse(STORAGE.getItem(FORM_DATA_KEY));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  for (let data in formData) {
    feedbackForm.elements[data].value = formData[data];
  }
}
const handleFormSubmit = e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  formData = {};
};

feedbackForm.addEventListener('input', Throttle(handleInputData, 500));
feedbackForm.addEventListener('submit', handleFormSubmit);
