//let arr = [22,33,44,5]
//let result  = arr.filter(elem => elem === 22)

let arr = [
    {
        name:"atiq",
        age:38
    },
    {
        name:"ali",
        age:32
    },
    {
        name:"ahsan",
        age:34
    }
]

let result  = arr.filter(value => value.age == 38)
console.log(result)