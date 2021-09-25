const mail = document.querySelector('#email');
const botoncito= document.querySelector('#apretame');
const error = document.querySelector('.error');
const texterror = document.querySelector('.databutt h4');

const validacion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

botoncito.addEventListener('click',function(){
    
if(validacion.test(mail.value)){
    error.style.display='none';
    texterror.style.display='none';
}else{
    error.style.display='block';
    texterror.style.display='block';
}
})