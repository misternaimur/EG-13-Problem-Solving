const sentence = 'I am Naimur';


let reverse = ''
for ( const letter of sentence){
    
    reverse = letter + reverse;

}
console.log(reverse);

for( let i = 0 ; i < sentence.length ; i++){
    console.log(i);
    console,log(sentence[i]);
}