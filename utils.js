export function generateUser(userData) {
   // take in formData oject -- return
    return {
        Name: userData.get('name'),
        Avatar: userData.get('avatar'),
        Hungry: 0,
        Full: 0,
        Completed: {}
    };
}

export function setUser(newUser) {
    const userString = JSON.stringify(newUser);
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

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hungry += choiceObject.hungry;
    userObject.full += choiceObject.full;
    userObject.completed[questId] = true;
}