

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(1,7));