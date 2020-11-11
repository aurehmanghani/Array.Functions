//let arr = [2000,33,22,45,7777,2,4,-2]

//arr.sort((a,b) => a - b) // Sort int

let arr = [
    {
        name:"atiq",
        age : 38
    },
    {
        name:"ali",
        age : 22
    },
    {
        name:"Sarah",
        age : 3
    },
    {
        name:"Unaisah",
        age : 6
    }
]

arr.sort((a,b) => a.name - b.name)

console.log(arr)