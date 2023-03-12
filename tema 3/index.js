let boolean=true;
let n=null;
let undf= undefined;
let num=2
let str='abs'
console.log(boolean)
console.log(typeof(str));


let person1={
    age:20,
    name:"bogdan"
}
console.log(person1)

let person2={
    age:30,
    name:"mihai"
}



//array
const hobbies=['reading','biking','swimming']
const prices=[12.4,4.5,6.7,3.2]
const biking=hobbies[1]
const persons =[person1,person2]
const persoane=[{id:1, age:20, email:"person1@email.com"},
                {id:2, age:30, email:"person2@email.com"}]

console.log(persoane)




//operatori
const sum=1+1; console.log(sum)
const difference=3-1; console.log(difference)
const division =10/5; console.log(division)
let multiplication=10*5; console.log(multiplication);
multiplication++
console.log(multiplication)
multiplication--
console.log(multiplication)


//operatori comparativi
const nr1 =12;
const nr2=2;
console.log(nr1==nr2)
console.log(nr1!=nr2)
const mynumber ="12"
console.log(nr1!==mynumber)

console.log(nr1>=nr2)


//operatori de atribuire
const myname='bogdan'
let mynr=20;
console.log("My number: "+ mynr)
mynr /= 5;
console.log("My number: "+ mynr)


//flow control

const age=15;

//if/else

if(age<18){
    console.log('you are under aged')

}else {
    console.log('you are an adult')
}

//for loop 
const people=['bogdan','mihai','andreea','ovidiu']
for (i=0; i<people.length; i++){
    console.log(people[i]);
}

for (a=people.length-1; a>=0; a--){
    console.log(people[a]);


}

let numar=5
// while(numar<10){
//     console.log(numar)
//     numar++

// }


// do {
//     numar++
//     console.log(numar)
// }while(numar<=10)


switch(numar){
    case 1:
        console.log('numarul este 1')
        break
    case 2:
        console.log("numarul este 2")
        break;
    default:
        console.log('numarul este: '+ numar)
}

try{
    if (abc===1){
        console.log("numarul are val 1")
    }

}catch(error){
    console.log("something happend: "+ error.message)

}finally{
    console.log("finally a fost executat")

}

