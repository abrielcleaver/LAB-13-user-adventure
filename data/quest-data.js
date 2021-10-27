// consts Shokugeki Arena, Polar Star Dormitory, Moon Banquet Festival, Stagiaire
// id, title, map location, image, description, choices, hungry, full

const shokugeki = {
    id: 'shokugeki',
    title: 'Shokugeki Arena',
    // map: {},
    image: 'sns-Soma-vs-Ikumi-shokugeki-quest.png',
    description: 'The Shokugeki between Mito Ikumi and Yukihira Soma has begun! Everyone, including Erina, is convinced that Ikumi, the Meat Master, will win. Soma, on the other hand, is greeted by jeers the moment he enters the arena. Will Soma be able to save Don RS?',
    // choices: [{
       // id: '',
        // description: '',
        // result: '',
        // hungry: ,
        // full: ,
   // }]
};

const dormitory = {
    id: 'dormitory',
    title: 'Polar Star Dormitory',
    // map: {},
    image: 'sns-polar-star-quest.png',
    description: 'The 1st years at the Totsuki Culinary Institute are facing the biggest event of the 2nd semester, “The Advancement Exam”! However, the mood is gloomy at Polar Star dormitory as it is rumored that those who won\'t obey Azami\'s regime will face elimination. As Soma reflects on the situation, he is visited by Erina. When he hears her thoughts, he starts to cook a “Yukihira dish” and asks her to taste! Will she like it?',
    // choices: [{
        // id: '',
        // description: '',
        // result: '',
        // hungry: ,
        // full: ,
   // }]
};

const moonFest = {
    id: 'moon-festival',
    title: 'Moon Banquet Festival',
    // map: {},
    image: 'sns-moonfestmain-questpage.jpeg' ,
    description: 'The Moon Festival finally begins! The dish that Soma decides to make for his stand are black pepper pork buns that are made in a stone oven. However, the crowd keeps going over to the more luxurious Chinese cuisine RS\'s stand instead. Soma ends up in the red on the first day. Students who end up with losses during this school festival will be expelled, so Soma is already in trouble. Will he be able to turn things around?!',
    // choices: [{
        // id: '',
        // description: '',
        // result: '',
        // hungry: ,
        // full: ,
   // }]
};

const stagiaire = {
    id: 'stagiaire',
    title: 'The Stagiaire',
    // map: {},
    image: 'sns-stagiaire-quest.png',
    description: 'Following the Fall Elections, Soma\'s class is sent off to the Stagiare, a training program out in the real world where students must succeed in leaving visible results at their training location. Soma ends up at a Western restaurant with Arato. Can these two even work together?!',
    // choices: [{
       // id: '',
        // description: '',
        // result: '',
        // hungry: ,
        // full: ,
   // }]
};

const quests = [
    shokugeki, 
    dormitory, 
    moonFest,
    stagiaire
];
export default quests;