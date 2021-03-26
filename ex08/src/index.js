let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Mapping:
mappingSet = new Set([...set]. map(x => x * 2));
console.log(mappingSet);
// Resulting set: {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}

// Filtering:
fileteringSet = new Set([...set]. filter(x => (x % 2) == 0));
console.log(fileteringSet);
// Resulting set: {2, 4, 6, 8, 10}
module.exports = { unionSet, intersectionSet, differenceSet };