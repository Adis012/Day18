let myArr = [];
// Only change code below this line

function* multiplication(x){
    for (let i = 0; i < 3; i++) {
        x *= 2;
        yield x;
        myArr.push(x);
    }
    return x;
}
var num = multiplication(3);

for (number of num) {
    console.log(num.next().value);
}

// Only change code above this line
module.exports = multiplication;