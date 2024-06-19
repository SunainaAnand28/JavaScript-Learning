
let a1 = 20;
{
    var b1 = 2;

}

console.log(a1 + b1); // 22



var a = 20;
{
    let b = 2;

}

console.log(a + b); // ReferenceError: b is not defined
