let sendBtn = document.querySelector('#sendBtn');
let messageIn = document.querySelector('#messageIn');
let messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg() {
    let content = messageIn.value;
    // console.log(content);
    if(content === ''){
        alert('Please enter valid input')
    }
        else {
            messageOut.innerHTML = content;
            messageIn.value = '';
        }
    }