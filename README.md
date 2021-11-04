# LAB-13 userAdventure 
- [ ] Build a user adventure, quiz, or game that follows this pattern:
    * User Info Page - starting information for user
    * Map Page - user presented with list of quests (generated from metadata)
    * Quest Detail Page with Options - user completes quest by picking choice from list of choice (generated from metadata and URLSearchParams)
    * Repeat thru steps #2 and #3 until end conditions (HP less than zero or all quests completed)
    * Final results page on end condition(s)

## Making a plan

### Home Page
* HTML Foundational Elements
- [x] text input for name
- [x] radio button for user avatar
- [x] add image of avatars for radio button
- [x] form submit button
* Events
 - [x] On form submit
    - [x] generate user object using form data (generateUser)
        * Name:
        * Avatar:
        * Hungry:
        * Full:
        * Completed: { quest1: true, quest2: false, quest3: false };
    - [x] store user data in LS (setUser)
    - [x] redirect to map page

* Misc:
    - [x] adjust sizing on avatar images
    - [ ] remove input button and have user select character image instead
    - [ ] add userProfile to header w/name, avatar, hungry, & full

### Map Page
* HTML Elements
- [x] List links for for each quest (generated from the quest-data)
    - [x] generate an <a> for each quest with href = "/quest?id=<questId>"
      - [x] ex: < a href = "/quest?id=shokugeki>Shokugeki Battle< /a>
    - [ ] links should not be clickable if user completed quest
    - [x] link should contain a URL search parameter containing quest ID
        * using query parameters URL = quest?key=value
- [ ] Map image
- [ ] Display avatar info

* Events
- [ ] On page load
    - [ ] grab data from LS and display it
    - [ ] If user has completed all quests -- redirect to end game page
    - [ ] If user has negative hungry -- redirect to end game page

### Quest Detail Page
* HTML Elements
- [x] Title
- [x] Description
- [x] Quest image
- [x] Quest choices (radio buttons)

- [ ] Character object display (name, hungry, full) -- put in header
- [ ] Quest object
        * ID:
        * Title:
        * Img:
        * Description:
        * Map: coordinates to position the link on top of the map image
        * Choices: [{ multipleChoice1}, {multipleChoice2}, {id: , description: , result: , hungry: , full: } }] 
        * Description -> what the option displays before you select it
        * Results -> what happens if you select it

* Events
- [x] On page load
    - [x] get the quest ID from the URL Search Parameter
    - [x] load quest data onto page
- [] On form submit
    - [x] update user data
    - [x] redirect to map page
    - [ ] if quests completed, redirect to results -- if else redirect to map

### End page
* Report to the user how they did
- [ ] Load userObj
- [ ] TDD: write function(s) to test conditions of user object
- [ ] Update presentation to reflect results:
    - [ ] Text/messages
    - [ ] Images
    - [ ] Show/Hide Things
- [ ] Offer link to "Play Again"
---

## Part-One Grading Checklist

- [x] Hosted on GitHub with URL in About section (1 pt)
    - [ ] https://abrielcleaver.github.io/LAB-13-user-adventure/
- [x] Meta Data: 3 or more quests 
        - [ ] plus user choices	(1 pt)
- [x] Home Page: Collect User Information	(1 pt)
- [x] Storage Functions: TDD Functions to create User (generateUser) & store User (setUser) in LS (2 pt)
- [x] Map Page / Quest List: List of Quests using URLSearchParam links (2 pt)
- [x] Quest Detail Page uses query id to load correct data (1 pt)
- [x] Quest Detail Page: Shows quest information (images, description)	(1 pt)
- [x] Quest Detail Page: Presents Quest Choices	(1 pt)


## Part-Two Grading Checklist

- [ ] Handle form submit on quest page and update user object (3 pts)
- [ ] List Page handles completed tasks	(2 pts)
- [ ] List Page detects end conditions and navigates to end page (1 pt)
- [ ] Evaluation of result (2 pts)
- [ ] End Page design and information display (2 pts)
---

## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass