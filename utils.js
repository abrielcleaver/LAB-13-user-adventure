// import quests from quest-data
import quests from './data/quest-data.js';

export function generateUser(userData) {
   // take in formData oject -- return
    return {
        Name: userData.get('name'),
        Avatar: userData.get('avatar'),
        Hungry: 40,
        Full: 0,
        Completed: {}
    };
}

export function setUser(userObj) {
    const userString = JSON.stringify(userObj);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function scoreQuest(choiceObject, questId, userObj){
    userObj.hungry += choiceObject.hungry;
    userObj.full += choiceObject.full;
    userObj.completed[questId] = true;
}

// export function allQuestsCompleted(userObj) {
// // loop -  if (!userObj.completed[quest.id]) return false, else return true
//     for (let quest of quests){
//         if (!userObj.completed[quest.id]){
//             return false;
//         }
//     } 
//     return true;
// }

export function allQuestsCompleted(userObj){
    for (let quest of quests){
        if (!userObj.completed[quest.id]){
            return false;
        }
    }
    return true;
}