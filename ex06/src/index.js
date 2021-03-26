let rockStar = new Map([
    [1, 'artist', "The Rolling Stones"],
    [2, 'song', "Angie"],
    [3, 'album', "Goats Head Soup"],
    [4, 'singer', "Mick Jagger"]
]);
let array = [...rockStar.keys()];

console.log(rockStar(1,'artis', "The Rolling Stones"));
console.log(rockStar(2,'song', "Angie"));
console.log(rockStar(3,'album', "Goats Head Soup"));
console.log(rockStar(4,'singer', "Mick Jagger"));

module.exports = { rockStar, newRock };