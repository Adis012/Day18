let arena = new Map();

arena.set("author", "Gigi");
arena.set("publisher", "Mistral");
arena.set("numberOfPages", 28);
arena.set("year", 2021);

console.log(arena.size); 
// Only change code below this line

// Only change code above this line
console.log(arena.set("author", "Gigi"));
console.log(arena.set("publisher", "Mistral"));
console.log(arena.set("numberOfPages", 28));
console.log(arena.set("year", 2021));

for (let value of arena) console.log(value);
module.exports = arena;