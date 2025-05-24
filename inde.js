const input =document.getElementById("numberofwords");
const container = document.querySelector(".container");
let numofwords;
const generatePara=()=>{
   numofwords= Number(input.value);//access enetered value 
const para = document.createElement("p");

para.innerText = "sample para";
     para.setAttribute("class","paras")
 container.append(para);
};

