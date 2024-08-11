let arr = [23, 45, 56, 1, 23, 4, 5];

let a = arr.map((value) => {       // map creates a new array
    console.log(value);
    return value + 1;         // it can return the value
})
console.log(a)


console.log("---------------------------------");

// Additional arguments of map method.

let arr2 = [32, 54, 678, 88, 776];

let b = arr2.map((value, index, array) => {
    console.log(value, index, array);
    // return value + index + array;
    // return value + index;
    return value;
})
console.log(b);

console.log("---------------------------------");

let arr3 =  [32, 54, 678, 88, 776];

let c = arr3.map((item)=>{
    return item*item;

})
console.log(c)