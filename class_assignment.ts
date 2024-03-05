// HOMEWORK ASSIGNMENT

//  " ````` COMPARISON OPERATORS`````` "
 
let a= 5
let b= 4
let equal = a == b // no type checking 
console.log(equal) // false

let c=4
let d="4"
let equal2 = c === d // equal value & equal type
console.log(equal2) // false

let e = 9
let f = "9"
let equal1 = (f == e) // equal value only
console.log(equal1)  // true

let j = 10
let i = 10
let cal = j != i // not equal value
console.log(cal) // false

let k = 10
let l = "10"
let calculate =k!==l // equal value equal type
console.log(calculate) // true

let m = 5
let o = 4
let greaterthan = m > o // m is greaterthan o
console.log(greaterthan) // true

let p = 3
let q = 2
let lessthan = q < p // q is lessthan p
console.log(lessthan) // true

let r = 8
let s = 7
let greather_equal = r >= s // r is greaterthan / equal to
console.log(greather_equal) // true

let t =  6
let u =  5
let equal_to = t <= u // t is lessthan / equal to
console.log(equal_to) //false


// --------X-------------X-----------------X-------

//````` "VARIABLE UPDATION"````````

let A = 3
A += 4   // ALSO WRITTEN AS (A=A+4)=>(A=3+4)
console.log(A) // 7

let B = 6
B -= 2 // 6-2
console.log(B) // 4


// "```````````ARTHEMATHIC OPERATION``````````"
let S = 4
let L = 6
let SUM = S + L 
console.log(SUM) // 10

let R = 10
let H = 5
let DIFF = R - H
console.log(DIFF) // 5

let D = 9
let F = 6
let MULTI = D * F 
console.log(MULTI) // 54

let Q = 81
let W  = 9
let DIVIDE = Q / W // gives answer
console.log(DIVIDE) // 9

let Y = 50
let  U = 3
let MODULUS = Y % U // gives reminder
console.log(MODULUS) // 2 

let Z = 6
let C = 4
let POWER = Z ** C // 6 KI POWER 4 (6*6*6*6)
console.log(POWER) // 1296

// ```````CONCATINATION``````````

let myName = "DARAKHSHAN"
let last_Name = "JUNIAD"
 let CONCATE = myName.concat(" ",last_Name) // myName + last_Name 
console.log(CONCATE)