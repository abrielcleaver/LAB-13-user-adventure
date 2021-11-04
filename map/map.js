// import quest data
import quests from '../data/quest-data.js';
import { loadProfile } from '../render-utils.js';
import { allQuestsCompleted, getUser } from '../utils.js';
// console.log(quests);

const mapLinks = document.getElementById('map-links');
// console.log(mapLinks);

const user = getUser();

loadProfile();

if (user.hungry <= 0 || allQuestsCompleted(user)){
    window.location.replace('../gameover');
}
// loop through each quest -- for (let quest of quests){};
for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest){
// create links using an <a> element for each quest with href = "/quest?id=<questId>"
    // <a href="/quest?id=shokugeki>Shokugeki Battle</a>
    // <a href="/quest?id=dormitory>Polar Star Dormitory</a>
    // <a href="/quest?id=moon-festival>Moon Festival</a>
    // <a href="/quest?id=stagiaire>Stagiaire</a>
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    // append link to map-links element
    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;

    mapLinks.appendChild(span);
}