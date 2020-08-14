// 1. Create a variable that contains the credit Card number without spaces.
const userCreditCardNumber = `4732 2343 2344 1234`;

let noSpace = userCreditCardNumber.replace(/ /g, ''); //use replace global to remove spaces


// 2. Find a string method that turns book title into `The Great Gatsby`
const bookTitle = `the great gatsby`;

let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();  // create function to capitalize first letter of a word
let words = bookTitle.split(' ').map(capitalizeString); //convert title to array and use function to capitalize
let capitalizedTitle = words.join(' '); //convert array back to a string

// 3. Find a string method removes "zilla" from "Mozilla" and store it in a new variable
let myFavoriteDinasour = `Mozilla`

let dino = myFavoriteDinasour.slice(2); //remove or slice the first 3 characters off the word, store as new variable

// 4. Create a new variable from step 3, and join it to another string in order to create the word "Godzilla"

let pre = "God"

let full = pre + dino

console.log(noSpace); //solution 1
console.log(capitalizedTitle); //solution 2
console.log(dino); //solution 3
console.log(full) //solution 4