# LAB-13 "Adventure Quest" Plan

## Making a plan

## Home Page
* HTML Elements
- [] text input for name
- [] radio button for user avatar
- [] form submit button
* Events
 - [] On form submit
    - [] generate user object using form data (generateUser)
        * name:
        * class:
        * hp:
        * gold:
        * completed: { quest1: true, quest2: false, quest3: false };
    - [] store user data in LS (setUser)
    - [] redirect to map page

## Map Page
* HTML Elements
- [] List links for for each quest (generated from the quest-data)
    - [] links should not be clicable if user completed quest
    - [] link should contain a URL search parameter containing quest ID
        * using query parameters URL = quest?key=value
- [] Map image
- [] Display avatar info

* Events
- [] On page load
    - [] grab data from LS and display it

## Quest Detail Page
* HTML Elements
- [] Title
- [] Description
- [] Quest image
- [] Quest choices (radio buttons)

- [] Character object display somewhere (name, hp, gold)
 - [] Quest object
        * ID:
        * Title:
        * Img:
        * Description:
        * Map: coordinates to position the link on top of the map image
        * Choices: [{ multipleChoice1}, {multipleChoice2}, {id: , description: , result: , hp: , gold: } }] 
        * Description -> at the option displays before you select it
        * Results -> what happens if you select it
## On page load
- [] Grab data from LS and display it
- [] Reset updated data into LS


* Events
- [] On page load
    - [] get the quest ID from the URL Search Parameter
    - [] load quest data onto page
- [] On form submit
    - [] update user data
    - [] redirect to map page
    - [] if quests completed, redirect to results -- if else redirect to map














## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass