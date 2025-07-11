// // questions
// 1
// function createAdder(x) {
//     return function(y) {
//         return x+y;
//     }

// }
// const add5 = createAdder(5);
// console.log(add5(10)); 

// // 4. 
// function greet(name) {
//   return function() {
//     console.log(`Hello ${name}`);
//   }
// }


// const greetKavya = greet("Kavya");
// greetKavya(); 

// // 5.
// function outer() {
//     let x =5;
//     return function inner() {
//         console.log(x);
//     }
// }
// const fn = outer();
// fn();

// 3.
function counter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  return { increment, decrement };
}


const c = counter();
console.log(c.increment()); 
console.log(c.increment());
console.log(c.decrement());
console.log(c.decrement());
console.log(c.increment());
console.log(c.increment());

// 2
function callTracker() {
  let count = 0;
  return function () {
    count++;
    console.log(`Called ${count} times`);
  };
}


const tracker = callTracker();
tracker(); 
tracker(); 