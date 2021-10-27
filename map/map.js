// import quest data
import quests from '../data/quest-data.js';
// console.log(quests);

const mapLinks = document.getElementById('map-links');
// console.log(mapLinks);

// loop through each quest -- for (let quest of quests){};
for (let quest of quests){

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

