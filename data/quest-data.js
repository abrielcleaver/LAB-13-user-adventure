// consts Shokugeki Arena, Polar Star Dormitory, Moon Banquet Festival, Stagiaire
// id, title, map location, image, description, choices, hungry, full

const shokugeki = {
    id: 'shokugeki',
    title: 'Shokugeki Arena',
    // map: {},
    image: 'sns-Soma-vs-Ikumi-shokugeki-quest.png',
    description: 'The Shokugeki between Mito Ikumi and Yukihira Soma has begun! Everyone is convinced that Ikumi, the Meat Master, will win. Yukihira, on the other hand, is greeted by jeers the moment he enters the arena. Will Soma be able to win this Shokugeki and save the Don RS club?',
    choices: [{
        // id: 'yukihira-wins',
        description: 'Yukihira will win and save Don RS!',
        // result: 'Yukihira wins the shokugeki with his creative cooking abilities even though his meat is not as high of quality as Ikumi\'s so you gain 10 full points and you lose 5 hungry points.',
        // hungry: -5,
        // full: 10,
    }, {
       // id: 'ikumi-wins',
        description: 'Ikumi, the Meat Master, wins!',
        // result: 'While Ikumi\'s meat is top tier, Yukihira's creative dish wins the Shokugeki and he saves Don RS so you gain 10 hungry points and lose 5 full points.',
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
        result: 'Uh oh.. Erina is not pleased with Yukihira\'s dish and dismisses it as unworthy so you gain 2 hungry points. However, Nakiri ate all of the dish Yukihira presented so you gain 5 full points.',
        hungry: 2,
        full: 5,
    }, {
        id: 'nakiri-hates',
        description: 'Nakiri will dislike it and dismiss Yukihira\'s dish.',
        result: 'Nakiri is unpleased and dismisses the dish as unworthy so you gain 10 full points! However, even thoguh Erina is not satisfied with Soma\'s creation, she is still hungry so you gain 5 hungry points. The dish Yukihira prepared was “diner food”!? Will any of his dishes ever match a plate that has been recognized by the “God’s Tongue”?',
        hungry: 5,
        full: 10,
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
        description: 'Come up with new recipes and continue to go up against the Chinese cusisine RS\'s stand alone.',
        // result: 'Soma is able to get himself out of the red just enough to not get expelled with the help of his new recipes so you gain 5 full points. But he is still unable to defeat the Chinese cusine RS so you gain 5 hungry points.',
        // hungry: 10,
        // full: 0,
    }, {
       // id: 'call-friends',
        description: 'Ask friends to help with challenging the Chinese cuisine RS\'s stand.',
        // result: 'Yukihira Soma asks some of his friends to help him with his stand during the last couple days of the festival. With all the help he receives he's able to defeat the Chinese cusisine RS so you gain 10 full points. Soma is also able to get out of the red and make profit during the festival so you lose 10 hungry points.',
        // hungry: -10,
        // full: 10,
    }]
};

const stagiaire = {
    id: 'stagiaire',
    title: 'The Stagiaire',
    // map: {},
    image: 'sns-stagiaire-quest.png',
    description: 'Following the Fall Elections, Yukihira Soma\'s class is sent off to the Stagiare, a training program out in the real world where students must succeed in leaving visible results at their training location. Soma ends up at a Western restaurant with Arato. Can these two even work together?!',
    choices: [{
        // id: 'yes',
        description: 'Soma and Arato will work well together!',
        // result: 'Soma and Arato are able to work together and help increase the sales of the Western restaurant.',
        // hungry: 0,
        // full: 5,
    }, {
       // id: 'no',
        description: 'Soma and Arato will not be able to work together.',
        // result: 'Soma and Arato are not able to work together and do not succeed in leaving visible results at the Western restaurant they trained at. Their stagiaire host is di',
        // hungry: 5,
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