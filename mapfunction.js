let a=[10,20,30,40]
var newArray=a.map(function(value){
    value++
    console.log(value)
})


// const obj=[{price:"100",product:"mobile"},
//           {price:"400",product:"oil"}]
// let newArray=obj.map(function(value){
//     console.log(value.product)
// })




// const obj=[{price:"100",product:"mobile"},
//           {price:"400",product:"oil"}]
// let newArray=obj.map(function(value){
//     return value.price

// })
// console.log(newArray)




// accumulator + 
// let a=[10,20,30,40]
// function chekadult(x){
//     return x*2
// }
// let b=a.map(chekadult)
// console.log(b)



const r=[5,7,9,4,3,0]
 let b=r.map(function(value,index){
    return value+index
 })
 console.log(b)

