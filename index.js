// let name= "Smiley";
// let msg="Hello"+name+"welcome!";
// alert("Hello"+name+"welcome!");

// console.log(msg);
// let age=23;
// let isTrue=true;
// let lastName;
// let name2=null;

//Objects
// let person={
//     name : "Smiley",
//     age : 23,
//     isYoung:true,
//     sibling:{
//         brother:"sss",
//         sister:"vvv"
//     }
// }

//Dot notation
// console.log(person.sibling.sister);

//Bracket notation
// console.log(person['age']);

//arrays
/*let colors=["red","black","white","purple"];

console.log(colors.length);*/

//Functions
// function addition(number1,number2){
//     let result= number1 + number2;
//     console.log(result);
// }

// addition(20,30)

//Operators
/* Assignment opt
  Arithmetic opt
  comparision opt
  equality opt
  ternery opt
  Bitwise opt
  Logical opt */
//   let x=3;

//   console.log(x<1);
//   console.log(x++);
//   console.log(x+=2);
//   console.log('1'<5);   //1<5
//ternery opt
  // let x=18;

  // console.log(x>15?"Eligible for vote":"not eligible for vote");

  //logical opt
  console.log(true && false);  // if both returns true , its return ans true
  console.log(true || false);  // if anyone true, its return true
  console.log(true != false);  //it returns opposite return value(give true, return false)

  //Logical precedence
  // let x=(2+4)*3;

  // console.log(x);

// If-else

// let hours=new Date().getHours;

// if(hours>0 || hours<=13){
//   console.log('hello');
// }
// else{
//   console.log('hi');
// }

//for loop
// let i=0;
// while(i<=10){
//   if(i%2==0){
//     console.log('even numbers :', i);
//   }
//   i++
// }

// let i=0;

// while(i<=10){
//   if(i%2!==0){
//     console.log('while :'+i);
//   }
//   i++;
// }

// do{
//   if(i % 2!==0){
//     console.log("do while number :"+i);
//   }
//   i++;

// }while(i<=10);

//For-in loop , For-of loop
const persons=["smiley","vk","colors"];
for(let result in persons){
  console.log(result,persons[result]);
}
//for-of loop
for(let result of persons){
  console.log(result);
}

//OOP
// let person={
//   name:"smiley",
//   age:23,
//   isAlive:true,
//   greeting:function(){
//     let msg='hello..'
//     console.log(msg+this.name);

//   }

// }
// console.log(person.greeting());

//Factory function
// function createPerson(name){
//     let person={
//       name:name,
//       greeting(){
//         let msg="Hello :"+name;
//         console.log(msg);
//       }
      
//     };
//     return person;
// }
// let result=createPerson("Smiley");
// let result2=createPerson("Vk");

// result.greeting();
// result2.greeting();

//Constructor -> (Pascal case, its start uppercase, use (new) keyword,use (this))
// function Person(name){
//   this.name,
//   this.greeting=function(){
//     console.log("Hello :"+name);
//   }

// }
// let result = new Person("Smiley");
// result.greeting();

// //Dynamic object
// const human={
//   name:"smiley"
// };

// human.age=23;
// human.gender="Female";
// human.color="black";

//if we want delete value from the object
// delete human.gender;
// console.log(human);

//Primitive type Vs Reference type
let x=5;  //primitive
let y=x;

x=10;
console.log(x,y);

//reference
let x1={
  value:5
};

y1=x1;

x1.value=10;

console.log(x1,y1);

//Enumerating properties
const obj={
  name:"smiley",
  greeting:function(){
    console.log("hi");
  },
  age:23
};

for(let result of Object.entries(obj)){
  console.log(result);
}
if('age' in obj){
  console.log("yes!");
}

//Cloning object
const obj1={
  name:"smiley",
  greeting:function(){
    console.log("hi");
  },
  age:23
};

let another={
  ... obj1  //spread operator
};
console.log(another);

//Math obj
let math=Math.max(100,20,3,50,200);
console.log(math);

//String obj
// let firstName="Hello smiley!";
// console.log(firstName.charAt(2),firstName.split(' ',2));

//template literals
let lastName=`Hello smiley,
 smile.. 
 vv`;
console.log(lastName);

//Date object
let date=new Date();
date.getFullYear();
date.setFullYear("1999");
console.log(date);

//Adding elements in array
const numberColors=["Apple","Red",13,17,"vk","black"]
//push - adding element(its added last in the array)
numberColors.push("violet")
//unshift - adding element in front(first)
numberColors.unshift("Mango")
//splice - adding element in middle, which we want
numberColors.splice(2,0,"1317","watermelon")
console.log(numberColors);

//finding element(primitive data types)
let fruits=["Apple","Lemon","Mango"];

console.log(fruits.lastIndexOf("Lemon"));
console.log(fruits.includes("Mango"));

//finding element(Reference data types)
const orders=[
  {
    id:13,
    name:"Smiley",
  },
  {
    id:17,
    name:"vk",
  }
]
let result=orders.findIndex(function(order){
  return order.id===13
});
//Arrow function
// let result=orders.findIndex((order)=>{
//   return order.id===13
// });
console.log(result);

//Removing elements
const num=[2,4,6,8,10];
//pop-end
// num.pop();
//shift - remove start
// num.shift(2);

//splice - remove middle
num.splice(2,2);
console.log(num);

//Emptying array
let number=[2,3,5,7];

//solution-1
number=[];

//solution-2
// number.length=0;

//solution-3
// number.splice(0,number.length);

//sol-4
// while(number.length){
//   number.pop();
// }

console.log(number);
//Combining & Extracting elements
// let maggi=["Carrot","Yippee","Salt"];
// let another_incredt=["Beans","Matchbox"];
//combine - example1
// let combineResult= maggi.concat(another_incredt);
//spread operator- combine examp-2
// let combineSpread=[...maggi,...another_incredt];
//Extract
// let extractResult=combineSpread.slice(1,3);

// console.log(extractResult);
// console.log(combineSpread);

//Iterating elements
// const numbersCount=["good","bad","smiley"];

// for(let routine in numbersCount){
//   console.log(routine,numbersCount[routine]);
// }

//for-each
// numbersCount.forEach(function(routineIndex,routine){
//    console.log(routineIndex,routine);
// });

//Join & split
// let joinName=["Hello","smiley!", "good morning"];
// let firstName="Sowndharya Thillai";

// let fullName=firstName.split(" ");

// let fName=fullName[0];
// let lName=fullName[1];
// console.log(fName+lName);
// console.log(fullName);

// joinName.join(", ");
// console.log(joinName);

//Sorting array
// const sortingNumber=[
//   {
//     id:13,
//     name:"Smiley"
//   },
//   {
//     id:17,
//     name:"Arun"
//   },
//   {
//     id:1,
//     name:"Vk"
//   }
// ];

// sortingNumber.sort(function(a,b){
//   if (a.id<b.id) return -1;
//   if(a.id>b.id) return 1;
//   return 0;
// });
// let sortReverese=sortingNumber.reverse();
// console.log(sortReverese);

// console.log(sortingNumber);
//Testing elements in array
// const childAdult=[1,2,3,4,5];
// //every()- all element true while its return true
// let isAllow=childAdult.every(function(value,index,array){
//   return value>=18;
//   // console.log("Value :",value);
//   // console.log("Index :",index);
//   // console.log("Array :",array);

// })
// let isCheckAdult=childAdult.every(function(value){
//   return value % 2===0;
// })
// console.log(isCheckAdult);

// //some() - if anyone element true, its return true
// let isCheckChild=childAdult.every(function(value){
//   return value % 2===1;
// })
// console.log(isCheckChild);

//Filtering
// const numbers=[2,3,4,8,9,1,16];
// const mobiles=[
//   {
//   id:13,mobileName:"Android",cost:45000
// },
// {
//   id:17,mobileName:"Android",cost:80000
// },
// {
//   id:3,mobileName:"IPhone",cost:5000
// },
// {
//   id:33,mobileName:"IPhone",cost:8000
// }
// ]

// let mobileResult=mobiles.filter(function(value){
//   return value.cost <10000;
// })
// console.log(mobileResult);

// let even= numbers.filter(function(value){
//   return value % 2==0;
// })
// let odd= numbers.filter(function(value){
//   return value % 2!==0;
// })
// console.log(even);
// console.log(odd);
//Map
const person=[
  {
    id:1,name:"Smiley",lastName:"Vk"
  }
]

let fullName=person.map(function(val){
  return [val.name,val.lastName].join(":)");
})
console.log(fullName);

//Chaining method
let products=[
  {
    id:1,mobile:"Motorola",cost:4000
  },
  {
    id:4,mobile:"Android",cost:8000
  },
  {
    id:2,mobile:"Redmi",cost:6500
  }
]

let sortedValue=products.sort((a,b)=>{
  return a.cost - b.cost; //Ascending
  // return b - a; //decending
})
let sortTitle=sortedValue.sort((a,b)=>{
  if (a.mobile < b.mobile) return -1;
  if (a.mobile > b.mobile) return 1;
  return 1;
})

let filtered=sortTitle.filter((value)=>{
  return value.cost >5000 ;
})

let final=filtered.map((val)=>val.mobile + "- $" + val.cost);
console.log(final);
//reduce()
// const reduceNumbers=[34,4,65,12,78];

// let result1=reduceNumbers.reduce(function(previousVal,currentVal){
//   return previousVal + currentVal;
// },0);

// console.log(result1);

//find(), filter
// const product=[2,4,5,8,10];

// let findResult=product.find(function(val){
//   return val >=5;
// })
// console.log("find :"+findResult);

// let filterResult=product.filter(function(val){
//   return val >=5;
// })
// console.log("Filter :"+filterResult);

//Function - declaration
const no1=13;
const no2=17;

// function addNo(){
//   const final=no1+no2;
//   console.log(final);
// }

// addNo();

//Function - Expression(Named function)
// const addNo=function addNo(){
//   let final=no1+no2;
//   console.log(final);
// }
// addNo();
//Function - Anonymous()
// const addNo= () => {
  // let final=no1+no2;
  // console.log(final);
// }
// addNo();

//Function - constructor
// const addNo=new Function("console.log(no1+no2)");
// addNo();

//IIFE - Immediately Invoked Function Expression

// (function sumNumber(num1,num2){
//   let final=num1+num2;
//   console.log(final);
// })(no1,no2);

//function arguments
//type-1
// function sumAdd(no1,no2,no3){

//   return no1+no2+no3;
// }
// let result1=sumAdd(100,30,10)
// console.log(result1);

//type-2 use arguments
function sumAdd(){
  let total=0;
  for(let value of arguments){
    total+=value;
  }

  return total;
}
let result1=sumAdd(100,300,10)
console.log(`Your total expense amount : ${result1}`);

//Getter & Setters
const student={
  firstName:"Sowndharya",
  lastName:"Thillai",
  get fullName(){
    return `${student.firstName} ${student.lastName}`;
  
  },
  set fullName(value){
    let values=value.split(" ");
    this.firstName=values[0];
    this.lastName=values[1]?? "";
  },

};
student.fullName="Smiley vk";
console.log(student.fullName);


