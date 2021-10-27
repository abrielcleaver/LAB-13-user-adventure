// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser, setUser, getUser, scoreQuest } from '../utils.js';

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

test('scoreQuest should update hungry, full, & completed on userObj', (expect)=>{
    // Arrange
    // Set up your arguments and expectations
    const userObj = {
        name: 'joy',
        avatar: 'nakiri',
        hungry: 45,
        full: 0,
        completed: {}
    };

    const choiceObj = {
        id: 'nakiri-likes',
        description: 'Nakiri will like it and eat all of Yukihira\'s dish!',
        result: 'Uh oh.. Nakiri eats the dish Yukihira presented so you gain 5 full points. However, Erina is not pleased with Yukihira\'s dish and dismisses it as unworthy so you lose 1 hungry point.',
        hungry: -1,
        full: 5,

    };
    const questId = 'dormitory';

    // Act
       // Call the function you're testing and set the result to a const
    scoreQuest(choiceObj, questId, userObj);

    // Assert
    expect.equal(userObj.hungry, 44);
    expect.equal(userObj.full, 5);
    expect.equal(userObj.completed[questId], true);
});