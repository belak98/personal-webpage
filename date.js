const today = new Date();
const date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
const dateContainer = document.getElementById("datebox");
dateContainer.textContent = date;

console.log(date);