import "../index.scss";
import IMask from 'imask';
const modal=document.querySelector(".modal")
const form=document.querySelector(".modal__form");
const inputs=document.querySelectorAll(".modal__input");
const phone=document.querySelector(".phone");
const name=document.querySelector(".name");
const message=document.querySelector(".message");
const btn=document.querySelector(".send");
const cancel=document.querySelector(".cancel");
const feedback=document.querySelector(".feedback");
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(phone, maskOptions);
mask.value = "+7(999)999-99-99";
feedback.addEventListener("click",()=>{
  modal.style.display="block";
  feedback.style.display="none";
});
cancel.addEventListener("click",()=>{
  modal.style.display="none";
  feedback.style.display="block";
});
const rg_phone=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const rg_name = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
const data={};
let statusForm = false;

const validation=(params,rg)=>rg.test(params)
for(let i of inputs){
  i.addEventListener("blur",()=>{
    if(i.value===""){i.classList.add("err");statusForm=false;}
    else{i.classList.remove("err");statusForm=true;}
  })
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  for(let i of inputs){
    if(i.value===""){i.classList.add("err");statusForm=false;}
    else{i.classList.remove("err");statusForm=true;}
  }
  if(validation(name.value,rg_name)&&validation(phone.value,rg_phone)&&message.value!==""){
    data.name=name.value;
    data.phone=phone.value.match(/\d/g).join('')
    data.message=message.value;
    console.log(data);
    // console.log((data.phone).match(/\d/g).join(''))// return [statusForm,data]
  }
  //JSON.stringify(data)
});
