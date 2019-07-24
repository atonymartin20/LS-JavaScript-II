// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const function1 = () => {
  let letsGo = 'LFG';

  const function2 = () => {
    console.log(letsGo += " Sir");
  }
  return function2;
}

const test = function1();
test();
test();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  const addToCount = () => {
    console.log(count += 1)
  }

  return addToCount
};

const Counter1 = counter();
const Counter2 = counter();
const Counter3 = counter();
Counter1();
Counter2();
Counter1();
Counter3();
Counter2();
Counter1();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;

  return {
     increment: () => {
      console.log(count += 1)
    },

    decrement: () => {
      console.log(count -= 1)
    },

    value: () => {
      console.log(count)
    }
  }

 // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const testCounter = counterFactory();
testCounter.value();
testCounter.decrement();
testCounter.increment();

