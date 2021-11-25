const string = "Javascript is wonderful. I can create the future of the web with Javascript.";

const replacedString = string.replace("Javascript", "Python");

console.log(`First try: ${replacedString}`);

//New
const replacedString2 = string.replaceAll("Javascript", "Python")

console.log(`Second try: ${replacedString2}`);

class Message {
    #show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show("Hello!");

//promise.any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// class anyClass {
//     constructor(element)
//     this.ref = new WeakRef(element);
// }
//     {...}
// }

//new logic operators
//The logical AND assignment (x &&= y) operator only assigns if x is truthy.
let x = true;
let y = 0;
x &&= 2;
y &&= 3
console.log(x)
console.log(y)

//The logical OR assignment (x ||= y) operator only assigns if x is falsy.
let x = 10;
let y = 0;
x ||= 2;
y ||= 5;
// isTrue = isTrue || isFalse
console.log(x);
console.log(y);

//Only if the value of x is nullish 
//then the value of y will be assigned to x
//that means if the value of x is null or undefined
//then the value of y will be assigned to x.
let x = false;
let y = 3;
x ??= y;
//x = x ?? y;
console.log(x);
console.log(y);

