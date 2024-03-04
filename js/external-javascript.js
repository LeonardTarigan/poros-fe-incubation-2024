console.log("Hello from external JS");

//
//
//
//
// basic syntax =================================================================
var mutableVariable1 = 1;
let mutableVariable2 = "hello";
const immutableVariable = true;

console.table({ mutableVariable1, mutableVariable2, immutableVariable });

mutableVariable1 = "world";
mutableVariable2 = 2;
// immutableVariable = false;

console.table({ mutableVariable1, mutableVariable2, immutableVariable });

let number = 1;
let string = "Hola";
let boolean = false;
let array = [1, 2, "Hello"];
let object = {
  a: "obj attribute",
  b: 1,
  c: [false, 0],
  d: {
    e: "nested obj",
    f: 10,
  },
};

console.table({
  numberType: typeof number,
  stringType: typeof string,
  booleanType: typeof boolean,
  arrayType: Array.isArray(array),
  objType: typeof object,
});

//
//
//
//
// function =====================================================================
function multiply(a, b) {
  console.log(`The result of ${a} x ${b} is ${a * b}`);
}
multiply(2, 3);

function multiplyAll(...nums) {
  const result = nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  console.log(result);
}
multiplyAll(2, 3, 4, 5, 6);

const add = (a, b) => {
  console.log(`The result of ${a} + ${b} is ${a + b}`);
};
add(2, 5);

//
//
//
//
// looping ======================================================================
for (let i = 0; i < 10; i++) {
  console.log("for loop", i);
}

let i = 0;
while (i < 5) {
  console.log("while loop", i);
  i++;
}

const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log("for loop array element", element);
}

arr.forEach((element, index) => {
  console.log("for each loop array element and index", element, index);
});

//
//
//
//
// dom ==========================================================================
const heading = document.querySelector("#title");
console.log(heading);

const desc = document.querySelectorAll(".description");
console.log(desc);

const list = document.querySelector("ul");

const newListChild = document.createElement("li");
newListChild.innerHTML = "This child is added from JavaScript";

list.appendChild(newListChild);
list.removeChild(list.children[0]);
