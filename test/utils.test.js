// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser } from '../utils.js';

const test = QUnit.test;

test('generateUser returns user object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        Name: 'joy',
        Avatar: 'cloe',
        Blings: 0,
        Lives: 0,
        Completed: {}
    };
    
    const userData = new FormData();
    userData.set('name', 'joy');
    userData.set('avatar', 'cloe');

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(userData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
