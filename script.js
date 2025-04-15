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

