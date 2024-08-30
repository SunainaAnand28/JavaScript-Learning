let arr = [23,355,667,567,57798,343,22323,434];
console.log(arr);
let deleteditem = arr.splice(2,4,1021,1023,1024,1025); // takes first and second argument that from which index to which index elements have to remove, and other arguments are the elements which have to add in array.
console.log(arr); // modifies the source array and returns deleted values.
console.log(deleteditem);