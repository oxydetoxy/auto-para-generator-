const input =document.getElementById("numberofwords");
const container = document.querySelector(".container");
const generateWord = (n)=>{
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

   let text = "";//empty by default
   for(let i=0;i<n;i++){
      const randomIndex = (Math.random()*25).toFixed(0);
text+= letters[randomIndex];
   }
   return text ;
};

let numofwords;
const generatePara=()=>{
   numofwords= Number(input.value);//access enetered value 

const para = document.createElement("p");

let data ="";
for(let i =0;i<numofwords;i++){
   const randomNumber = (Math.random()*8).toFixed(0);
   data += generateWord(randomNumber);
   data += " ";

}
console.log(data);

para.innerText = data;
     para.setAttribute("class","paras")
 container.append(para);
};

