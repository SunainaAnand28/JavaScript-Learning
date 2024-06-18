console.log("Variable Declaration.")


// var is globally scoped 
// var a = 45;
// var b = "45";
// var c = null;
// var d = undefined;
// {
//     var b = "this"
//     console.log(b);
// }

// console.log(b);

// let is block scoped 

let a = 45;
let b = "45";
let c = null;
let d = undefined;
{
    let b = "this"
    console.log(b);
}

console.log(b);


// const 

const author = "Sunaina Anand";
