// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser } from '../utils.js';

const test = QUnit.test;

test('generateUser returns user object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        Name: 'Joy',
        Avatar: 'Cloe',
        Blings: 0,
        Completed: {}
    };
    
    const formData = new FormData();
    formData.set('name', 'joy');
    formData.set('avatar', 'cloe');

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
