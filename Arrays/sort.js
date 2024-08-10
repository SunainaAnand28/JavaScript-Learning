num = [23,45,32,11,34,45,67,88,233];
num.sort(); // it modifies the array and sort array alphabetically.
console.log(num);

// To sort the array in assending or desending order we need a compare function 

let compare = (a,b) => {
    return a - b;
}

let num2 = [23,45,32,11,34,45,67,88,233];
num2.sort(compare);
console.log(num2);

num.sort(compare);
console.log(num);