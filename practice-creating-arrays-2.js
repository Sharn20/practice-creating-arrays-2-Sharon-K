let emptyArray = Array(7);
let filledArray = Array(7).fill("Hello");
console.log(filledArray);

let updatedArray = emptyArray.fill("28", 4, 7);
console.log(updatedArray);

let anotherArray = Array(5);
for (let i = 0; i < anotherArray.length; i++) {
    anotherArray[i] = i * 10;
}
console.log(anotherArray);