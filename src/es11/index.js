const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

//promise.allSettled doesn't care about promises status. Waits until evereyone be resolved.
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

console.log(window);
console.log(self);
console.log(frames);
console.log(this);

console.log(window);
console.log(globalThis);

//null operator "??"
const foo = null ?? "default string";
console.log(foo);

const foo = "hi" ?? "default string";
console.log(foo);



const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log("email")
} else {
    console.log("fail")
};