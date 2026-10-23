/* 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output 
*/

const element = [ 'naimur', 'rahim', 'sakib'];
const id = [ 10 , 10 , 122, 111, ];


element.push('maimuna');
console.log(element);
element.push('nasim','Saikat');
console.log(element);

const elements = element.concat(id);
console.log(elements);

const add = [ ...element, ...id];
console.log(add);

element.shift()
console.log(element);
element.unshift("nalal");
console.log(element);
