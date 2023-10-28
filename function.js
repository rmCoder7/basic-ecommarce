let totalamount = 0;

function handler(data){
// console.log(data.parentNode.childNodes[1].innerText);

const Uldiv = document.getElementById('update-div');
const itemText = data.parentNode.childNodes[1].innerText
const ulupdate = document.getElementById('ul-id');
ulupdate.innerText = itemText 
Uldiv.appendChild(ulupdate)


// price section

// console.log(data.parentNode.childNodes[3].innerText.split(" ")[0]);
const price = data.parentNode.childNodes[3].innerText.split(" ")[0]
totalamount = parseInt(totalamount)+parseInt(price);
 const totallprice = document.getElementById("total-price").innerText=totalamount;



}

const inputFiled = document.getElementById('inputdata')

const submitButton = document.getElementById("btnCupon")

inputFiled.addEventListener("keypress" , (e) =>{

// console.log(e.currentTarget.value);

const dataValue = e.currentTarget.value;

if(dataValue === " ")
{
    submitButton.disabled = true;

}else{

    submitButton.disabled= false;
   
     
    
  
}


})

