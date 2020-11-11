let arr = [16,90,210,20]

//arr.splice(1,2) // Remove two elements

//arr.splice(0,1,100) // Replace 0 index value

//arr.splice(0,1,100,200,300) // Replace 0 index and add other three elements

let arr1 = [1001,1002,1003]

arr.splice(0,2,...arr1) //Replace array1 3 elements from array2

console.log(arr)