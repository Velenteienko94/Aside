

function sumTo(x) {
    let sum = 0;
    for(let count = 0; count <= x; count++){
        sum = sum + count;
    }
return sum;
}
    console.log(sumTo(100));

////////////////////////////////////////////////////////

function sumTo(x){
    let sum = x;
  for( let counter = 1; counter <x; counter++) {
  //console.log(sum)
    sum +=  counter;
  }
  return sum;
  }
  console.log(sumTo(4));
  
  //////////////////////////////////////////////////////

  function sumTo(x){
    let sum = 0;
  for( let counter = 1; counter <=x; counter++) {
  //console.log(sum)
    sum +=  counter;
  }
  return sum;
  }
  console.log(sumTo(4));

function sumTo(x) {
    let sum = 0;
    if (x == 1) {
        return x;
    }
    else if ( x == 0) {
        return x;
    }
    else {
        sum = x + sumTo(x - 1)
    }
    return sum;
}
console.log(sumTo(x))

//////////////////////////////////////////////////////////////short
function sumTo(x) {
    let sum = 0;
    if (x == 1) return x;
    else if ( x == 0) return x;
	else sum = x + sumTo(x - 1);
    return sum;
}
console.log(sumTo(x))

//from internet shorter version of factorial
/*function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }
  */


function countBs(string) {
    "string"[N]
}
///////////////////////////////////////////////////////


for( let counter = 2; counter <= 10; counter++) {
    if(counter % 2 == 0) {
      console.log(counter);
    }
  }
///////////////////////////////////////////////////////////
  let i = 0;
  while(i < 3) {
      i++;
  }
  console.log(i);
/////////////////////////////////////////////////////////////
  let i = 0;
  while(i < 3) {
    console.log(i);
    ++i;
 console.log(i);
  }
/////////////////////////////////////////////////////////
let num = Number;
  do {
    num = prompt("number bigger than 100");
  }
  while (num <= 100 && num);
  console.log(num)
//////////////////////////////////////////////////////
  let size = 10
  nextPrime:
  for ( let num = 2;  num <= size; num++){
    for(let num2 = 2; num2 < num; num2++){
        if (num % num2 == 0) continue nextPrime;
    }
    console.log(num)
  }
////////////////////////////////////////////////

  let num = prompt(Number);
if(num > 0) alert(1);
else if(num < 0) alert(-1);
else alert(0);

//////////////////////////////////////////////////////////////////////////

let result;
(a + b < 4) ? result = "malo" : result = "dohuya";

let result;
(a + b < 4) ? "malo" : "dohuya";

//////////////////////////////////////////////////////////////////////////

let message;
let login = prompt("VvediLoginLoh")
(login == ("sotrudnik")) ? 
message = "Privet" : "idiNahui";
(login == ("director")) ? 
message = "Zdravstvite" : "idiNahui";
(login == "") ? 
message = "netLogina" : "idiNahui";

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

let login = prompt("VvediParolDaun");
let message = (login == "sotrudnik") ?  alert("Privet") : 
(login == "director") ? alert("Zdravstvuite") :
(login == "") ?  alert("netLogina") : alert("idiNahuiSTakimiFocusami");
///////////////////////////////////////////////////////////////////////////////////////

let age;
if (age >= 14 && age <= 90);
alert("Norm")

let age = 13;
if (age >= 14 && age <= 90){
alert("Norm");
}
else {
  alert("SOSI")
}

////////////////////////////////////////////

let age = prompt(Number);

if(age < 14 || age > 90) {
  alert("Okay")
}
else {
  alert("NotOkay")
}
let age = prompt(Number);
if (!(age >= 14 && age <= 90)){
  alert(1);
}
else{
  alert(0);
}

////////////////////////////////////////// trying to make loggin and password cheker

let login = prompt("InputPassword");
if (login == "admin"){
  prompt("Password");
  if (prompt("Password") == "imAdmin") {
    alert("Welcome");
  }
  else if (prompt("Password") == null) {
    alert("canceled");
  }
  else {
    alert("password invalid");
  }
}
else if(login == null) {
  alert("canceled");
}
else {
  alert("login invalid");
}

///////////////////////////////////////////////
let login = prompt("inputLogin");
if (login == "admin"){
let password = prompt("inputPassword");
else if (password == "imAdmin") {
  alert("Welcome")
}
}
else if(login == null) {
  alert("canceled");
}
else {
  alert("login invalid");
}
/////////////////////////////////////////////// working
let login = prompt("inputLogin");
if (login == "admin"){
let password = prompt("inputPassword");
  if (password == "imAdmin") {
    alert("Welcome")
  }
  else if (password == null) {
    alert("canceled");
  }
  else {
alert("imvalid pasword")
  }
}
else if(login == null) {
  alert("canceled");
}
else {
  alert("login invalid");
}
//More reddable ???
let login = prompt("inputLogin");
if (login == "admin"){
let password = prompt("inputPassword");
  if (password == "imAdmin") alert("Welcome");
  else if (password == null) alert("canceled");
  else alert("imvalid pasword");
}
else if(login == null) alert("canceled");
else alert("login invalid");