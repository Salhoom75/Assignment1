// var x=window.prompt('plz enter number');
// console.log(x)
// Q1







// var x=window.prompt('plz enter the number')
// if (x % 3 == 0) {
//     console.log('Yes');

// }
// else{
//     console.log('NO')
// };
// Q2






// var x=window.prompt('plz enter the first number');
// var y=window.prompt('plz enter the second number');

// if (x > y) {
//     console.log('the maximum num is' + x)
// }
// else{
//     console.log('the maximum num is' + y)
// }
// Q3





// var x=window.prompt('plz enter the number');

// if (x < 0) {
//     console.log('Negative')
// }
// else{
//     console.log('positive')
// }
// Q4





// var x = Number(window.prompt('plz enter the first number'));
// var y = Number(window.prompt('plz enter the second number'));
// var z = Number(window.prompt('plz enter the third number'));

// if (x > y && x > z) {
//     console.log(x + 'is maximum');
//     if (y > z) {
//         console.log(z + 'is minimum');
//     }
//     else {
//         console.log(y + 'is minimum');
//     }
// }

// else if (y > x && y > z) {
//     console.log(y + 'is maximum');
//     if (x > z) {
//         console.log(z + 'is minimum');
//     }
//     else {
//         console.log(x + 'is minimum');
//     }
// }


// else if (z > x && z > y) {
//     console.log(z + 'is maximum');
//     if (x > y) {
//         console.log(y + 'is minimum');
//     }
//     else {
//         console.log(x + 'is minimum');
//     }
// }
// else{
//     console.log('Enter Valid Number');
// }
// Q5





// var x=window.prompt('plz enter the number');
// if (x % 2 == 0) {
//     console.log('Number is even');
// }
// else{
//     console.log('Number is odd');
// }
// Q6





// var x=window.prompt('plz enter the CHARACTER');
// if (x=='a' || x=='o' || x=='u' || x=='i' || x=='e') {

//     console.log('Vowel');
// }

// else{
//     console.log('Consonant');
// }
// Q8



//  var x=window.prompt('plz enter the number');
// for( var i= 1 ;   i <= x ; i++){
//     console.log(i);
// }
// Q9



//  var x=window.prompt('plz enter the number');
// for( var i= 1 ;   i <= 12 ; i++){
//     console.log(i*x);
// }
// Q10





//  var x=window.prompt('plz enter the number');
// for( var i= 1 ;   i<=x ; i++){
//     if (i % 2==0) {
//         console.log(i);

//     }
// };
// Q11




//  var x=window.prompt('plz enter the number 1');
//  var y=window.prompt('plz enter the number 2');

//  var result= x**y

//  console.log(result);
//  Q12




//  var x= Number(window.prompt('plz enter the number 1'));
//  var y= Number(window.prompt('plz enter the number 2'));
//  var z=Number(window.prompt('plz enter the number 3'));
//  var s=Number(window.prompt('plz enter the number 4'));
//  var n=Number(window.prompt('plz enter the number 5'));

//  var totalMarks= x+y+z+s+n
//  var Avg=totalMarks/5
//  var per=totalMarks*100/500


// console.log('totalMarks =' + totalMarks)
// console.log('Avg=' + Avg)
// console.log('Percentage =' + per)
// Q12

// var x=window.prompt('Enter The month number')

// var MonthNum1=31
// var MonthNum2=28
// var MonthNum3=31
// var MonthNum4=30
// var MonthNum5=31
// var MonthNum6=30
// var MonthNum7=31
// var MonthNum8=31
// var MonthNum9=30
// var MonthNum10=31
// var MonthNum11=30
// var MonthNum12=31

// if (x == 1) {
//     console.log(MonthNum1)
// }
// else if(x == 2){
//     console.log(MonthNum2)
// }
// else if(x == 3){
//     console.log(MonthNum3)
// }
// else if(x == 4){
//     console.log(MonthNum4)
// }
// else if(x == 5){
//     console.log(MonthNum5)
// }
// else if(x == 6){
//     console.log(MonthNum6)
// }
// else if(x == 7){
//     console.log(MonthNum7)
// }
// else if(x == 8){
//     console.log(MonthNum8)
// }
// else if(x == 9){
//     console.log(MonthNum9)
// }
// else if(x == 10){
//     console.log(MonthNum10)
// }
// else if(x == 11){
//     console.log(MonthNum11)
// }
// else if(x == 12){
//     console.log(MonthNum12)
// }
// else{
//     console.log('Enter Valid Number')
// } 
// Q13





//  var x= Number(window.prompt('Physics'));
//  var y= Number(window.prompt('Mathmatics'));
//  var z=Number(window.prompt('Biology'));
//  var s=Number(window.prompt('Chemistry'));
//  var n=Number(window.prompt('Computer'));

//  var totalMarks= x+y+z+s+n
//  var per=totalMarks*100/500


// if(  per >= 0 &&  per <= 100) {

// if( per <= 100 &&  per >= 90){
//     console.log('A')
// }

// else if( per >= 70 &&  per < 80){
//     console.log('B')
// }

// else if( per >= 60 &&  per < 70){
//     console.log('C')
// }

// else if( per >= 50 &&  per < 60){
//     console.log('D')
// }

// else if( per >= 40 &&  per < 50){
//     console.log('E')
// }

// else{
//     console.log('F')
// }

// }

// else{
//     console.log( ' Enter Valid Number')
// }
// Q14



// switchCase


// var monthNumber = Number(window.prompt('Enter Month Number'));
// switch (monthNumber) {
//     case 1: console.log('31')
//         break;
//     case 2: console.log('28')
//         break;
//     case 3: console.log('31')
//         break;
//     case 4: console.log('30')
//         break;
//     case 5: console.log('31')
//         break;
//     case 6: console.log('30')
//         break;
//     case 7: console.log('31')
//         break;
//     case 8: console.log('31')
//         break;
//     case 9: console.log('30')
//         break;
//     case 10: console.log('31')
//         break;
//     case 11: console.log('30')
//         break;
//     case 12: console.log('31')
//         break;
//     default:console.log('Enter Valid Number')
//         break;
// }

// Q15





// var Check = window.prompt('check the vowels');
// switch (Check) {
//     case "o": console.log('Vowel')
//         break;
//     case "a": console.log('Vowel')
//         break;
//     case "i": console.log('Vowel')
//         break;
//     case "u": console.log('Vowel')
//         break;
//     case "e": console.log('Vowel')
//         break;
//     default: console.log('constant')
//         break;
// }
// Q16




var x = window.prompt('Enter the first number');
var y = window.prompt('Enter the second number');

switch (x > y) {
    case 1: console.log(x + 'is bigger')
        break;
    default: console.log(y + 'is bigger')
        break;
}
// Q17






// var x = window.prompt('Enter the number');
// switch (x) {
//     case 1:
//         if (x > 0) {
//             console.log(x + 'is positive')
//         }
//         break;
//     case 2:
//         if (x == 0) {
//             console.log(x + 'is Zero')
//         }
//         break;
//     case 3:
//         if (x < 0) {
//             console.log(x + 'is negative')
//         }
//         break;
//     default: console.log('Enter a Valid Number')}

// Q19



