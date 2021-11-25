// function newFunction(name, age, country) {
//     var name = name || "pony";
//     var age = age || 23;
//     var country = country || "CO";
//     console.log(name, age, country);
// }

// //es6
// function newFunction2(name = "pony", age = 23, country = "CO") {
//     console.log(name, age, country);
// }

// newFunction2();

// newFunction2("Alejandra", "22", "CO");

// //before es6
// let hello = "Hello";
// let world = "World";

// let epicPhrase = hello + " " + world
// console.log(epicPhrase);

// //es6
// let hello = "Hello";
// let world = "World";

// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);


// //Before es6
// let lorem = "Suggested Use: Work several drops between your palms and massage into the desired area.\n"
//     + "For the face, after cleansing, massage 3-5 drops of 100% Pure Almond Oil into your skin, paying particular attention to the area around your eyes."

//es6
let lorem2 = `another epic phrase that we need
jk
now, here goes another epic phrase`;

// console.log(lorem);
console.log(lorem2);


// let person = {
//     "name": "Connie",
//     "age": 23,
//     "country": "CO"
// }
// //before es6
// console.log(person.name, person.age);

// //es6
// let { name, country } = person;
// console.log(name, age);


// //es6
// let team1 = ["Oscar", "Julian", "Ricardo"];
// let team2 = ["Valeria", "Jessica", "Camila"];

// let education = ["David", ...team1, ...team2];

// console.log(education);

// {
//     var globalVar = "Global Variable";
// }

// {
//     let globalLet = "Global Let";
//     console.log(globalLet);
// }

// console.log(globalVar);

// const a = "b";
// console.log(a);

// const a = "c";
// console.log(a);

// var a = "b";
// console.log(a);
// a = "a";
// console.log(a);


// let name = "Connie";
// let age = 23;

// //es5
// obj = { name: name, age: age };
// //es6
// obj2 = { name, age };

// console.log(obj2);

// const names = [{ name: "Connie", age: 23, }, { name: "Sebas", age: 24 }]

// let listOfNames = names.map(function (item) {
//     console.log(item.name)
// })

// let listOfNames2 = names.map(item => console.log(item.name))

// //const listOfNames3 = (name, age, country) => {
// //    ...
// //};

// //const listOfNames4 = name => {
// //    ...
// //};

// const helloPromise = () => {
//     return new Promise((resolve, reject) => {
//         if (false) {
//             resolve("Hey!");
//         } else {
//             reject("Ups!!");
//         }
//     });
// }


// helloPromise()
//     .then(response => console.log(response))
//     .then(() => console.log("hello"))
//     .catch(error => console.log(error));


// class calculator {
//     constructor() {
//         this.valueA = 0;
//         this.valueB = 0;
//     }
//     sum(valueA, valueB) {
//         this.valueA = valueA;
//         this.valueB = valueB;
//         return this.valueA + this.valueB;
//     }
// }

// const calc = new calculator();
// console.log(calc.sum(2, 2));

// import hello from "./module";

const hello = () => {
    return "hello!"
}

hello();

function* helloWorld() {
    if (true) {
        yield "Hello, ";
    }
    if (true) {
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
// console.log(generatorHello.next().value);
// console.log(generatorHello.next().value);