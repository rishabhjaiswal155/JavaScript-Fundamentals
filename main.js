// console.log('Hello World from main.js')

// //variables
// //let age --error free
// let age=28
// age=30// no error
// console.log(age)
// //const salary---error
// const salary=50000
// //salary=80000//error(not allowed re-assignment)
// console.log(salary)

//Data-types(Primitive and non-primitive)

//String data-type
// const name = "Rishabh";
// const language = "Javascript";
// const institute = `IACSD`;

// console.log(name);
// console.log(language);
// console.log(institute);

// //number data-type

// let num = 10;
// num = 3.14;
// console.log(num);

// //Boolean data-type

// const isPrimaryNumber = "true";
// const isOddNumber = "false";
// console.log(isPrimaryNumber);
// console.log(isOddNumber);

// //undefined data-type

// let a;
// console.log(a);

// //Null Data-type

// const d = null;
// console.log(d);

// //nonPrimitive Object data-type

// const person = {
//   firstName: "Rishabh",
//   lastName: "Jaiswal",
//   age: 28,
//   "email-id": "rishabhjaiswal155@gmail.com",
// };
// console.log(person.firstName)


// //Array data-type

// const oddNumber=[1,3,5,7,9]
// console.log(oddNumber[2])


//operators

//Assignment Operator

// let a=20
// let b=10

// //Arithmetic operator
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(++a)
// console.log(--b)


// //Comparision operator

// console.log(a>b)
// console.log(a<b)
// console.log(a==b)
// console.log(a===b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a!==b)
// console.log(a!=b)


// //Logical Operator

// const isValid=a>b || b<20
// console.log(isValid)

// const isReady=true
// console.log(!isReady)

// //String Operator
 
// console.log('Rishabh '+'Jaiswal')

// //Ternary operator

// const isEven=11%2===0 ? 'number is Even':'number is odd'
// console.log(isEven)


//Type conversion

//Implicit type conversion(type coercion)

// console.log('5'+'4')
// console.log('4'+true)
// console.log('5'+undefined)
// console.log('5'+'Rishabh')
// console.log(true+'4')
// console.log('5'-'4')
// console.log('4'-true)
// console.log('4'-false)
// console.log('Rishabh'-'Jaiswal')
// console.log('10'-null)
// console.log('10'-NaN)
// console.log('10'-undefined)
// console.log(true+true)
// console.log(false+false)
// console.log(true+null)
// console.log(true+NaN)
// console.log(true+undefined)


// //Explicit type conversion

// console.log(Number('5'))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(''))
// console.log(Number(null))
// console.log(Number(undefined))

// console.log(String(2))
// console.log(String(true))
// console.log(String(null))
// console.log(String(undefined))

// console.log(parseInt('3'))
// console.log(parseFloat('3.14'))
// console.log(parseInt(true))

// console.log((500).toString())
// console.log((true).toString())

// console.log(Boolean(10))
// console.log(Boolean(null))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(0))


//Equality

const var1='test'
const var2='test'
console.log(var1==var2)
console.log(var1===var2)

const a=10
const b='10'
console.log(a==b)
console.log(a===b)

const x=true
const y=1
console.log(x==y)
console.log(x===y)

const p=false
const q=''
console.log(p==q)
console.log(p===q)

const m=null
const n=undefined
console.log(m==n)
console.log(m===n)