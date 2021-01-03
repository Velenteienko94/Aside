let quotes = [
    {
        name:'Jason Statham',
        quote:'Хороший человек плохой воздух в себе держать не будет'
    },
    {
        name:'Jason Statham',
        quote:'Когда меня рожали, собственно, тогда я и родился'
    },  
    {
        name:'Jason Statham',
        quote:'Комп без интернета как хуй без минета'
    },    
    {
        name:'Jason Statham',
        quote:'Я парниша модный, по жизни свободныйб корешей не бросаю и братву уважаю'
    },    
    {
        name:'Jason Statham',
        quote:'Пока не доказано, не ебет, что сказано'
    },
    {
        name:'Jason Statham',
        quote:'Я по утрам единорог, только рог в районе ног'
    },  
    {
        name:'Jason Statham',
        quote:'Ты не ты, когда за тобой бегут менты'
    },  
    {
        name:'Jason Statham',
        quote:'Живи, кайфуй, гуляй, играй, упал вставай, наглей, ругай, чужих роняй, своих спасай, пельмени, суп, картошка, чай.'
    },  
    {
        name:'Jason Statham',
        quote:'Хозяйство вести не хером трясти'
    },  
    {
        name:'Jason Statham',
        quote:'Курице не быть петухом, а лоху - моим кентом'
    },  
    {
        name:'Jason Statham',
        quote:'Курильщик без спичек как хуй без яичек'
    },  
    {
        name:'Jason Statham',
        quote:'Руины песчаного замка - дают возможность построить настоящую крепость'
    },  
    {
        name:'Jason Statham',
        quote:'Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит'
    },  
]

let qouteBtn = document.querySelector('#qouteBtn');
let quoteAuthor = document.querySelector('#quoteAuthor');
let quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQoute);

function displayQoute(){
let number = Math.floor(Math.random()*quotes.length);
// console.log(number);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;
}

