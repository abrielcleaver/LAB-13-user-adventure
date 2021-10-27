// consts Shokugeki Arena, Polar Star Dormitory, Moon Banquet Festival, Stagiaire
// id, title, map location, image, description, choices, hungry, full

const shokugeki = {
    id: 'shokugeki',
    title: 'Shokugeki Arena',
    // map: {},
    image: 'sns-Soma-vs-Ikumi-shokugeki-quest.png',
    description: 'The Shokugeki between Mito Ikumi and Yukihira Soma has begun! Everyone is convinced that Ikumi, the Meat Master, will win. Yukihira, on the other hand, is greeted by jeers the moment he enters the arena. Will Soma be able to win this Shokugeki and save Don RS?',
    choices: [{
        // id: 'yukihira-wins',
        description: 'choice 1',
        // result: 'gain 10 full points, ',
        // hungry: ,
        // full: 10,
    }, {
       // id: 'ikumi-wins',
        description: 'choice 2',
        // result: '',
        // hungry: 10,
        // full: -5,

    }]
};

const dormitory = {
    id: 'dormitory',
    title: 'Polar Star Dormitory',
    // map: {},
    image: 'sns-polarstar-quest.jpeg',
    description: 'The 1st years at the Totsuki Culinary Institute are facing the biggest event of the 2nd semester, “The Advancement Exam”! However, the mood is gloomy at Polar Star dormitory as it is rumored that those who won\'t obey Azami\'s regime will face elimination. As Soma reflects on the situation, he is visited by Erina Nakiri. When he hears her thoughts, he starts to cook a “Yukihira dish” and asks her to taste! Will she like it?',
    choices: [{
        id: 'nakiri-likes',
        description: 'Nakiri will like it and eat all of Yukihira\'s dish!',
        result: 'Uh oh.. Nakiri eats the dish Yukihira presented so you gain 5 full points. However, Erina is not pleased with Yukihira\'s dish and dismisses it as unworthy so you lose 1 hungry point.',
        hungry: -1,
        full: 5,
    }, {
        id: 'nakiri-hates',
        description: 'Nakiri will dislike it and dismiss Yukihira\'s dish.',
        result: 'Correct! Nakiri dismisses his dish as unworthy so you gain 20 full points! However, even thoguh Erina is not satisfied with Soma\'s creation, she is still hungry so you lose 10 hungry points. The dish Yukihira prepared was “diner food”!? Will any of his dishes ever match a plate that has been recognized by the “God’s Tongue”?',
        hungry: -10,
        full: 20,
    }]
};

const moonFest = {
    id: 'moon-festival',
    title: 'Moon Banquet Festival',
    // map: {},
    image: 'sns-moonfestmain-questpage.jpeg',
    description: 'The Moon Festival finally begins! The dish that Soma decides to make for his stand are black pepper pork buns that are made in a stone oven. However, the crowd keeps going over to the more luxurious Chinese cuisine RS\'s stand instead. Soma ends up in the red on the first day. Students who end up with losses during this school festival will be expelled, so Soma is already in trouble. How will he be able to turn things around?!',
    choices: [{
        // id: 'work-alone',
        description: 'choice 1',
        // result: '',
        // hungry: 20,
        // full: 0,
    }, {
       // id: 'call-friends',
        description: 'choice 2',
        // result: '',
        // hungry: 0,
        // full: 30,
    }]
};

const stagiaire = {
    id: 'stagiaire',
    title: 'The Stagiaire',
    // map: {},
    image: 'sns-stagiaire-quest.png',
    description: 'Following the Fall Elections, Soma\'s class is sent off to the Stagiare, a training program out in the real world where students must succeed in leaving visible results at their training location. Soma ends up at a Western restaurant with Arato. Can these two even work together?!',
    choices: [{
        // id: 'yes',
        description: 'choice 1',
        // result: '',
        // hungry: 0,
        // full: 20,
    }, {
       // id: 'no',
        description: 'choice 2',
        // result: '',
        // hungry: -20,
        // full: 0,
    }]
};

const quests = [
    shokugeki, 
    dormitory, 
    moonFest,
    stagiaire
];
export default quests;