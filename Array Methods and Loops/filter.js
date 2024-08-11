let arr = [23, 45, 56, 1, 23, 4, 5];

let a = arr.filter((value) => {     // it does not modify source array 
    console.log(value);
    return value<10;         // where the function returns true, it will return those values.
})
console.log(a);

console.log("---------------------------------");

let newarr = [20,34,56,70,87,50,10];

let b = newarr.filter((value)=> {
    return value%10 === 0;
})
console.log(b)