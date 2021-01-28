// //alert  Even\odd from site not task
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     alert(i); 
//   }
  


// let animals = ['dog', 'cat', 'cheken', 'salamandra'];
// function isAnimalInArray(){
//     if (animals.includes('dragon')) {
//         alert('Pretty relict animals')
//     }
//     else {animals.push('dragon')}
// }

// let IfNotIncludeAddChar = ['dog', 'cat', 'chicken', 'salamandra'];
// function checkIsAnimalInArray(animal){
//     if(animalsList.includes(animal)){
//         console.log('You alredy have this animal');
//     } else {animalsList.push(animal);
//         console.log(`You just added "${animal}" to your list`);}
// }



///////////////////////////////////////////////////////////////////
//                        guess game
////////////////////////////////////////////////////////////////// 
// let maximum = parseInt(prompt("Enter the maximum number"));
// while(!maximum){
//     maximum = parseInt(prompt("Enter a valid number"))
// }

// const targetNum = Math.floor(Math.random() * maximum) +1;

// let guess = parseInt(prompt("Enter your first guess"));
// let attemps = 1;

// while (parseInt(guess) !== targetNum){
//     if(guess === "q") break;
//     attemps++;
//     if(guess > targetNum){
//         guess = prompt("Too hight number");
//     } else {
//         guess = prompt("Too low number");
//     } 
// }
// if(guess === "q"){
//     console.log("Ok dude, your quit")
// } else{
//     console.log(`You got it, it took you ${attemps} guesses`);
// }
///////////////////////////////////////////////////////////////////
// to do list projekt
///////////////////////////////////////////////////////////////////


// let input = prompt(`Please, enter task`);
// if(input === "new"){
//     const toDoList = [];
//     let newToDo = prompt("Please enter new Todo");
//     toDoList.push(newToDo);
//     console.log(toDoList)
// }
///////////////////////////////////////////////////////////////////////////
// function capitalize (str){
//     let strCap = str.concat(`${str.slice(0,1)} ${str.toUpperCase().slice(1)} `);
//     return strCap
// }
// capitalize("privet");

// let countBs = (str) => {
// let bsQuantity = "";
//     for( let letter of str){
//         if( letter ===  "B"){
//             bsQuantity = bsQuantity.concat(letters);
//         }
//     }
//     return bsQuantity.length;
// }
///////////////////////////////////////////////////////////////////////
// let countBs = (str, countedLetter) => {
//     let bsQuantity = "";
//         for( let letter of str){
//             if( letter ===  countedLetter){
//                 bsQuantity = bsQuantity.concat(letter);
//             }
//         }
//         return bsQuantity.length;
//     }

/////////////////////////////////////////////////////////////////////////////
// function simpleStockSpan(array){
//     for(let i = 0; i<array.length;){
//         let k = 1;
//         let spanEnd = false;
//         while(i-k>= 0 && i < array.length){
//             if(array[i-k] >= array[i]){
//                 k++;
//                 console.log(k)

//             }
//             else {
//                 spanEnd = true;
//             }
//             k = array[i];
//         }
// }
// return array;
// }
/////////////////////////////////////////////////////////////////////////////
//Tasks From Book
//triangls
// for(let i = 0; i<7; i++){
    //     trianglPart+="#";
    //     console.log(trianglPart);
    // }
    // let trianglPart = "";
    // while(trianglPart.length<7) {
    //     trianglPart+="#";
    //     console.log(trianglPart);
    // }
////////////////////////////////////////////////////
//FizzBuzz
// function fizzBuzz (number){
//     for(let i = 0; i< number; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         }
//         else if(i % 3 === 0){
//             console.log("Fizz")
//         }
//         else if(i % 5 === 0){
//             console.log("Buzz")
//         }
//         else{ console.log(i)}
//     }
// }
// fizzBuzz(50);

// function fizzBuzz (number){
//     for(let i = 0; i< number; i++){

//         if(i % 3 === 0){
//             console.log("Fizz")
//         }
//         else if(i % 5 === 0){
//             console.log("Buzz")
//         }
//         else{ console.log(i)}
//     }
// }
// fizzBuzz(50);

// for(let i = 1; i<100; i++){
//     let output = "";
//     if(i % 3 ===0) {
//         output+="Fizz";
//     };
//     if(i % 5 ===0){
//         output+="Buzz"
//     }
//     console.log(output || i);
// }
////////////////////////////////////////////////////
// ChessDesk
//let board = "";
// for(let col = 0; col < 8; col++){
//     for( let row = 0; row < 8; row++){
//         if((row + col) % 2 ===0){
//             board+="#"
//         } 
//         else {board+=" "};
//     }
//     board+="\n";
// }
// console.log(board)

// for(let col = 0; col < 8; col ++){
//     let board = "";
//     let boardPattern = " #".repeat(4);
//     if(col % 2 !==0){
//     console.log(boardPattern)
//     } else{console.log(boardPattern.replaceAll(" #", "# "))}
//     board+=boardPattern;
// }
//////////////////////////////////////////////////////
//mathMin
// const mathMin = (num1, num2) => { 
//     if(num1 < num2){return num1} 
//     else{return num2}
// }
// console.log(mathMin(-5,-10))
///////////////////////////////////////////////////////
//isEven
// function isEven(num){
//     let ifNumNegative = num > 0 ? 2 : -2;
//     if(num === 0){
//         return true;
//     }
//     else if(num === 1){
//         return false;
//     }
//     else {return isEven(num - ifNumNegative) }

// }
// console.log(isEven(0));
////////////////////////////////////////////////////////////
//countBs
// function countBs(str){
//     let quantitysOfBs = 0;
//     for(let i = 0; i< str.length; i++){
//         if(str[i] === "B"){
//             quantitysOfBs++;
//         }
//     }
//     return quantitysOfBs;
// }
// countBs("BsssBBsssoiklmfamBbbb");
// console.log(countBs("BsssBBsssoiklmfamBbbb"))

// function countBs(str, symbol){
//     let quantitysOfSymbols = 0;
//     for(let i = 0; i< str.length; i++){
//         if(str[i] === symbol){
//             quantitysOfSymbols++;
//         }
//     }
//     return quantitysOfSymbols;
// }
// console.log(countBs("BsssBBsssoiklmfamBbbb", "b"))
/////////////////////////////////////////////////////////

// function sumNums(arrayOfNums){
//     let sum = 0;
//     for(let nums of arrayOfNums){
//         sum+=nums;
//     }
//     return sum;
// }

// function sumNums(arrayOfNums){
//     let sum = 0;
//     arrayOfNums.map(function(num){
//         sum +=num;
//     })
//     return sum
// }
/////////////////////////////////////////////////////////////////////////////////
// function range(start, end) {
    //     for(let i = start; i<=end; i++){
        //         array.push(i);
        //     }
        //     return array;
        // }
////////////////////////////////////////////////////////////       
// i will be back
// const array = [];
// const range = (start, end, updator=1) =>{
//     for (i = start; i <= end; i+=updator) array.push(i);
//     return array;
// }
// const sum = arrOfRange => {
//     let sum = 0;
//     for(number of arrOfRange){
//         sum+= number;
//     }
//     return sum;
// }


///////////////////////////////////////////////////////////////////////////

// const reverseArray = array => {
//     return array.reverse()
// }
// [1,4,6,8,9]
// //////////////////////////////////////////////////////////////////////////
// const reverseArray = array => newArr = array.reverse();
// console.log(reverseArray([1,4,6,8,9]));
// //////////////////////////////////////////////////////////////////////////

// const reverseArrayINPlace = array =>{
//     let newArr = [];
//     for(let i = array.length-1; i>=0; i--){
//         newArr.push(array[i]); 
//     }
//     return newArr;
// }

// console.log(reverseArrayINPlace([1,2,3,4,5]));


// let list = {};
// function arrayToList(array){
// let reverseArray = array.reverse();
// for(let number of reverseArray){
//     list = {value: number, rest:list};
//     if(number === array.length){
//         list.rest = null;
//     }
// }
//     return list;
// }
// const div = document.getElementById('container');
// const img = document.querySelector('img');
// div.style.textAlign = 'center';
// img.style.width = '150px';
// img.style.borderRadius = '50%';


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 

// const spans = document.querySelectorAll('span');
// let i = 0;
// for(let span of spans){
//     span.style.color = colors[i];
//     i++;
//     if(i > colors.length-1) {i = 0};
// }


// let allLis = document.querySelectorAll('li');
// for(let li of allLis){
//     li.classList.toggle('highlight');
// }

// let button = document.createElement('bnt').innerText = "amIRight?";
// // button.innerText = "amIRight?";
// let container = document.selectElementById('#container')
// let i = 0;
// while(i<100){
// container.appendChild(button);
// }


// let button = document.createElement('button');
// for(let i=0; i<100; i++){
//     let container = document.getElementById('#container');
// }
// button.innerText('wtw')