const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
let formData = {};
const handleInputData = ({ target }) => {
  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (let data in formData) {
    feedbackForm.elements[data].value = formData[data];
  }
}
const handleFormSubmit = e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
};

feedbackForm.addEventListener('input', throttle(handleInputData, 500));
feedbackForm.addEventListener('submit', handleFormSubmit);
