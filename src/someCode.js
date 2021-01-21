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