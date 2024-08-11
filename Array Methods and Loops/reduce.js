let arr = [1, 7, 4, 5];

let red_fn = (value,value2) => {     
    return value+value2;
}

let a = arr.reduce(red_fn);   // it returns value.
console.log(a);


console.log("---------------------------------");

// factorial

let num = [1,2,3,4,5,6,7];

let b = num.reduce((x1,x2) => {
    return x1 * x2;
})

console.log(b)