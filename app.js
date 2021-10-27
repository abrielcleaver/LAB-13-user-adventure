// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// console.log('hi from home');

import { generateUser, setUser } from './utils.js';

// Get user form (homepage index.html)
const userForm = document.getElementById('user-form');

// On form submit
userForm.addEventListener('submit', (e) => {

  // prevent default
    e.preventDefault();
  // create userData(formData) object
    const userData = new FormData(userForm);
  // pass it to generateUser function
    const newUser = generateUser(userData);
  // save to LS

    setUser(newUser);
    window.location.replace('./map');

});
