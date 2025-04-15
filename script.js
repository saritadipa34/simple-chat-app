const sarita=document.getElementById('sarita');
const dipa=document.getElementById('dipa');
const who=document.getElementById('who');

let currentSender="";

function setClick(sender1,sender2,senderName){
currentSender=senderName;
who.innerText=`${senderName.charAt(0).toUpperCase()+senderName.slice(1)} is chatting........`;
sender1.classList.add('bgClr');
sender2.classList.remove('bgClr');
}

dipa.addEventListener('click',()=>{
    setClick(dipa,sarita,"dipa") 
})

sarita.addEventListener('click',()=>{
setClick(sarita,dipa,"sarita");

})


const inputBox=document.getElementById('inputBox');
inputBox.addEventListener('input',()=>{
const inputValue=inputBox.value;
console.log(inputValue);
});

const container=document.getElementById('container');
const send=document.getElementById('send');

send.addEventListener('click',()=>{
const inputBox=document.getElementById('inputBox');
    const chat=document.createElement('div');
    chat.classList.add('chat');

    const names=document.createElement('h1');
    names.classList.add('sender');
    names.innerText=`${currentSender || "unknown"}`;

    const msg=document.createElement('p');
    msg.innerText=inputBox.value;

    chat.appendChild(names);
    chat.appendChild(msg);
    container.appendChild(chat);
    msg.innerText=inputBox.value;
    
}
)
