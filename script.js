var string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
 if(e.target.innerHTML =='='){
    string=eval(string);
    document.querySelector('input').value = string;

 }else if(e.target.innerHTML=='C' ||e.target.innerHTML=='M+' || e.target.innerHTML=='M-'){
    string ="";
    document.querySelector('input').value = string;

 }else if(e.target.innerHTML=='X'){
        string = string.slice(0,-1);
        console.log(string);
    document.querySelector('input').value = string;

 }else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;

 }

        })
})