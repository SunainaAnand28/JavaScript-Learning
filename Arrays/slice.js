let arr = [23,355,667,567,57798,343,22323,434];
console.log(arr);

let slicedarr =  arr.slice(3); // it will remove starting three elements.
console.log(arr); // it does not modify the source array.
console.log(slicedarr);

let slicedarr2 = arr.slice(1,4); // it will return the removed items.
console.log(slicedarr2);