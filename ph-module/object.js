/** @format */

const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  "book name": ["naaimmur", "maimuna", "kuakata", "samia"],
};

// 1. Dot Notation
// Dot (.) diye Object-er property access kora
console.log(person.name);
console.log(person.profession);

// 2. Bracket Notation
// [] diye Object-er property access kora
console.log(person["age"]);

// 3. Object-er value variable-e rakha
const ages = person["age"];1

console.log(ages);

// 4. Space-thaka property access kora
console.log(person["book name"]);

// 5. Object-er value change kora
person.age = 30000;
console.log(person.age);

// Abar value change kora
person["age"] = 26;
console.log(person.age);

// 6. Object-e notun property add kora
person["fav"] = "coding";
console.log(person["fav"]);

// Dot Notation diyeo notun property add kora jay
person.hobby = "programming";
console.log(person.hobby);

// 7. Puro Object console-e dekha
console.log(person);
