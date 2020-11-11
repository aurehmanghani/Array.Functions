let arr = [1,2,3,4,5]
//let f = arr.fill(0) //[ 0, 0, 0, 0, 0 ]
//let f = arr.fill("value",0,2) //[ 'value', 'value', 3, 4, 5 ]
let f = arr.fill('value',-1) //[ 1, 2, 3, 4, 'value' ]
console.log(f)