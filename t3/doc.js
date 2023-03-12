//ex 1
let nr1=2
let nr2 =9
let nr3=5
if (nr1>nr2&& nr1>nr3){
    console.log(nr1)
}
else if (nr2>nr1&& nr2>nr3){
    console.log(nr2)
}
else {
    console.log(nr3)
}


//ex 2
let a=[]
for (let i=1; i<100; i++){
    if (i%2==0){
        a.push(i)   
    }
    
    
}
console.log(a)



//ex 3

let student={
    FirstName:'Bogdan',
    grade:1,
    id:38
    
}

if (student.grade>=5){
    console.log('Student has passed')

}else{
    console.log('student has failed')
}




//ex 4

let list=[]
function double(array1){
    for (let i = 0; i < array1.length; i=i+1){ 
        list.push(array1[i])
        list.push(array1[i])
        

    }
    return list
}
let array1=[1,2,3]
console.log(double(array1))

//sau (aici nu am stiut sigur daca trebuie sa scriem numerele de doua ori sau sa le inmultim cu 2)
let l=[1,2,3]
console.log(l.map((x) => x*2))





//ex 5

let b=[]
function fct(array2){
    for (let i = 0; i < array2.length; i++){ 
        if (array2[i]%3!==0){
            b.push(array2[i])
        }
    }
    return b
}
let array2=[1,9,25,36,55,96,15,8,45,3]
console.log(fct(array2))


//sau
 function fct2(x){
    return x%3!==0
}

let p=[1,9,25,36,55,96,15,8,45,3]
let x =p.filter(fct2)
console.log(x)



//ex 6

function sum(array3){
    let suma=0
    for (let i = 0; i < array3.length; i++){ 
        suma += array3[i]

    }
    return suma
}
let array3=[1,2,3,4,5]
console.log(sum(array3))


//sau

let h=[1,2,3,4,5]
let y= h.reduce((acc,x) => acc+x, 0)
console.log(y)


//exercitiul 7

export{array3,sum}



