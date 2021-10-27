// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser, setUser, getUser } from '../utils.js';

const test = QUnit.test;
// const skip = QUnit.skip;

test('generateUser returns user object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        Name: 'joy',
        Avatar: 'nakiri',
        Hungry: 0,
        Full: 0,
        Completed: {}
    };
    
    const userData = new FormData();
    userData.set('name', 'joy');
    userData.set('avatar', 'nakiri');

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(userData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser saves user info to LS', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userObj = {
        Name: 'joy',
        Avatar: 'nakiri',
        Hungry: 0,
        Full: 0,
        Completed: {}
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    setUser(userObj);
    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, userObj);
});

test('getUser should get user info from LS', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userObj = {
        Name: 'joy',
        Avatar: 'nakiri',
        Hungry: 0,
        Full: 0,
        Completed: {}
    };
    setUser(userObj);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, userObj);
});