console.log('Hello');
console.log("John");
console.log('You can call me "Santy"');
console.log("Go away, I'm Coding");
console.log(`I am sorry\nplease forgive me`);

//What is output display??
let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2;
console.log(number1 + number2 - number3 * number4 / number5);
console.log(number1 + (number2 - number3) * number4 / number5);

let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;
console.log(conditionA && conditionB || conditionC && !conditionD);

let age = 9;
let result = (age > 17) ? "Adults" : (age > 10) ? "Teenagers" : "Children";
console.log(result);

let numA = 176;
let numB = 103;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);


let numC = 1;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

let fullName = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`;
}

let getTitle = () =>{
    return "B.Sc"
}

console.log(fullName("John", "Dream", "Myung"));

let num = 5;
let str = "5";

console.log(num == str);  // true, because 'str' is coerced to a number
console.log(num === str); // false, because types (number vs string) are different

let obj1 = { key: 'value' };
let obj2 = { key: 'value' };

console.log(obj1 == obj2);  // false, because they are different objects in memory
console.log(obj1 === obj2); // false, for the same reason as above