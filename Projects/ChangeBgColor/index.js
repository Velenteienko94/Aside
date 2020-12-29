let colorBtn = document.querySelector('.colorBtn');
let bodyBcg = document.querySelector('body');

let colors = ['yellow','red','green','pink']; 

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodyBcg.style.backgroundColor = colors[3];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
    console.log(random);
};
