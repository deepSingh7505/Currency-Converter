let base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json"
const dropdowns =document.querySelectorAll(".dropdown");
const btn = document.querySelector(".btn");
for(let select of dropdowns){
  for( element in countryList){
    const option=document.createElement("option");
    option.innerText=element;
    option.value=element;
    if(select.name=="from"&& element=="INR"){
      option.selected="selected";
    }else if(select.name=="to"&& element=="USD"){
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
btn.addEventListener("click", (evt) =>{
evt.preventDefault();
let amount = document.querySelector(".input");
let amountvalue =amount.value;
if(amountvalue==""||amountvalue <1){
  amount.value="1";
  amountvalue=1;
}
});