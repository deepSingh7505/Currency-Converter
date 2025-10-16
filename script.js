let base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json"
const dropdowns =document.querySelectorAll(".dropdown");
for(let select of dropdowns){
  for( element in countryList){
    const option=document.createElement("option");
    option.innerText=element;
    option.value=countryList;
    if(select.name=="from"&& element=="INR"){
      option.selected="selected";
    }else if(select.name=="to"&& element=="USD"){
      option.selected="selected";
    }
    select.append(option);
    select.addEventListener("change",(evt)=>{
      updateflag(evt.target);
    })
  }
}
const updateflag=(evt)=>{
  
};