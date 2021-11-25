let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(3));

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

let hello = "       Hello World";
console.log(hello);
console.log(hello.trimStart());

let hello = "Hello World            ";
console.log(hello);
console.log(hello.trimEnd());

//before
try {

} catch (error) {
    error
}

//now (we don't need to use "(error)" before using it)
try {

} catch {
    error
}

let entries = [["name", "Connie"], ["age", 23]];
console.log(Object.fromEntries(entries));

let mySymbl = "My Symbol";
let symbol = Symbol(mySymbl);
console.log(symbol.description);