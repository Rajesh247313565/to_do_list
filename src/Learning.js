// Variables and var, let, const

let venkataSaiRajesh = "Good"
console.log(venkataSaiRajesh) // Good
venkataSaiRajesh = "Evil"
console.log(venkataSaiRajesh) // Evil

const anuButh = "Beautiful"
console.log(anuButh) // Beautiful

// Conditionals
// == === difference
console.log(
    0==0, 0==false, null==false, undefined == false, null == undefined
)
console.log(
    0===0, 0===false, null===false, undefined === false, null === undefined, 'bOOth'==='bOOth'
)

// If statement
if (venkataSaiRajesh === anuButh) {
    // Do something
    console.log("Entered if")
} else {
    // Do another
    console.log("Entered else")
}

// If, else if statement
if (anuButh === "Ugly") {
    // Do something
    console.log("Entered if")
} else if (anuButh === "Beautiful") {
    // Do another
    console.log("Entered else if")
} else {
    // Do some other
    console.log("Entered else")
}

// While loop
let x = 5
while (x > 0) {
    console.log("Anu is printing---> value: ", x)
    x -=1
}
console.log("Final value of x: ", x)

// Switch statement
// if (anuButh === "Ugly") {

// } else if (anuButh === "Not Beautiful") {

// } else if (anuButh === "Beautiful") {

// } else {

// }
switch (venkataSaiRajesh) {
    case "Abcd":
        console.log("value of venkataSaiRajesh is Abcd")
        break;
    case "ugly":
        console.log("value of venkataSaiRajesh is ugly")
        break;
    case "Evil":
        console.log("value of venkataSaiRajesh is Evil")
        break;
    default:
        console.log("Nothing")
        break;
}

// For loop
for (let x=0; x<3; x+=1) {
    console.log(`Rajesh is ${x} times uglier`)
}

// Strings
const shilpa = "Buffalo"
const professor = `${shilpa} is something`
console.log(professor) // Buffalo is something

// Functions without params
function sareeFunction1 () {
  const a = 2
  const b = 4
  return a + b
}
const sareeFunction1Value = sareeFunction1()
console.log(sareeFunction1Value)

const sareeFunction2 = () => {
    const a = 2
    const b = 4
    return a + b
}
const sareeFunction2Value = sareeFunction2()
console.log(sareeFunction2Value)

// Functions with params
function sareeFunction11 (a, b) {
    return a + b
}
const sareeFunction11Value = sareeFunction11(4, 4)
console.log(sareeFunction11Value)

const sareeFunction22 = (a, b) => {
    return a + b
}
const sareeFunction22Value = sareeFunction22(4, 4)
console.log(sareeFunction22Value)

// switch(){
//     case :

// }

// Arrays
const professors = ["Shilpa", "Kew", "kaur", "metal"]
// Array filter
const kewFilteredProfessors = professors.filter((professor) => professor !== "Kew")
console.log("kewFilteredProfessors: ", kewFilteredProfessors)
// Array Map
const professorsWithSuffix = professors.map((professor) => {
    if (professor === "Shilpa") {
        return `${professor}1234`
    } else {
        return professor
    }
})
console.log("professorsWithSuffix: ", professorsWithSuffix)
// Array Reduce
const numberArray = [10, 4, 2, 7, 4]
const totalNumberArrayAddition = numberArray.reduce((total, currentItem) => total + currentItem, 0)
console.log("totalNumberArrayAddition: ", totalNumberArrayAddition)
// Array Find
professors.find((professor) => professor === "kaur") // kaur
professors.find((professor) => professor === "Rajesh") // undefined
// Array Includes
professors.includes("kaur") // true
professors.find("Rajesh") // false
// Array indexOf
numberArray.indexOf(7) // 3 
// Array Join
numberArray.join("Hi") // "10Hi4Hi2Hi7Hi4"
numberArray.join(" ") // "10 4 2 7 4"
numberArray.join(", ") // "10, 4, 2, 7, 4"
// async json atmoics dom bom arrAY BUFFER

// DOM(Document Object Model), React - Virtual DOM
