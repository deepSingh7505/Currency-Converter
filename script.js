let base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const dropdowns =document.querySelectorAll(".dropdown");
const btn = document.querySelector(".btn");
const fromcur =document.querySelector(".from select");
const tocur =document.querySelector(".to select");
for(let select of dropdowns){
  for( element in countryList){
    const option=document.createElement("option");
    option.innerText=element;
    option.value=element;
    if(select.name=="from"&& element=="USD"){
      option.selected="selected";
    }else if(select.name=="to"&& element=="INR"){
      option.selected="selected";
    }
    select.append(option);
  }
 select.addEventListener("change",(evt)=>{
    updateflag(evt.target);
})
}
const updateflag=(element)=>{
  let code =element.value
  let countrycode=countryList[code];
  let img=`https://flagsapi.com/${countrycode}/flat/64.png`;
  element.parentElement.querySelector("img").src=img;
};
btn.addEventListener("click", async(evt) =>{
evt.preventDefault();
let amount = document.querySelector(".input");
let amountvalue =amount.value;
if(amountvalue==""||amountvalue <1){
  amount.value="1";
  amountvalue=1;
}
// console.log( fromcur.value.toLowerCase(),tocur.value.toLowerCase())
const from=fromcur.value.toLowerCase();
const to=tocur.value.toLowerCase();
const url = `${base_url}/${from}.json`;
let responce = await fetch(url);
let data = await responce.json();
let midoutput = data[from];
let output=midoutput[to];
let finaloutput = output*amountvalue;
let print = `${amountvalue}${fromcur.value} = ${finaloutput}${tocur.value}`;
document.querySelector(".output").innerText = print;




});