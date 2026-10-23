/**
 * Grade Calculator
 *
 * Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
 *
 *     A: 90-100
 *     B: 80-89
 *     C: 70-79
 *     D: 60-69
 *     F: 0-59
 *
 * *
 *
 * @format
 */

let num = 20 ;

if( num >= 90 && num <= 100){
    console.log("A");
}
else if(num >= 80 && num <= 89){
    console.log('B');
}
else if(num >= 70 && num <= 79){
    console.log("c");
}
else if ( num >= 60 && num <= 69){
    console.log("d");
}
else{
    console.log("F");
}