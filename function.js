function handler(data){
const Uldiv = document.getElementById('update-div');
const itemText = data.parentNode.childNodes[1].innerText
const ulupdate = document.getElementById('ul-id');
ulupdate.innerText = itemText 
Uldiv.appendChild(ulupdate)
}