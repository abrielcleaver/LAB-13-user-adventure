# LAB-13 userAdventure 
- Build a user adventure, quiz, or game that follows this pattern:
    * User Info Page - starting information for user
    * Map Page - user presented with list of quests (generated from metadata)
    * Quest Detail Page with Options - user completes quest by picking choice from list of choice (generated from metadata and URLSearchParams)
    * Repeat thru steps #2 and #3 until end conditions (HP less than zero or all quests completed)
    * Final results page on end condition(s)

## Making a plan

### Home Page
* HTML Elements
- [x] text input for name
- [x] radio button for user avatar
- [] add image of avatars for radio button
- [x] form submit button
* Events
 - [] On form submit
    - [x] generate user object using form data (generateUser)
        * name:
        * avatar:
        * bling:
        * lives:
        * completed: { quest1: true, quest2: false, quest3: false };
    - [x] store user data in LS (setUser)
    - [] redirect to map page

### Map Page
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

### Quest Detail Page
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


* Events
- [] On page load
    - [] Grab data from LS and display it
    - [] Reset updated data into LS
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