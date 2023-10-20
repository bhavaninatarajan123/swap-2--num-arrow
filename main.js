let n1=prompt("enter the number")
let n2=prompt("enter the number")

let temp
let num=(add,sub)=>{
    console.log(`before swapping n1=${add}n2=${sub}`)  
    temp=add
    add=sub
    sub=temp 
    console.log(`after swapping n1=${add}n2=${sub}`)
}
(num(n1,n2));

