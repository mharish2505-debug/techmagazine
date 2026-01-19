let storedData =JSON.parse(localStorage.getItem("student"))||[];

document.getElementById("form").addEventListener("submit",(event)=>{
  event.preventDefault();
  

  if(event.target[0].value === "" || event.target[1].value ===""){
   alert("Please enter a Block")
    return; 
  }

let studentdata ={
  Fname:event.target[0].value,
  Lname:event.target[1].value,
};


storedData.push(studentdata);
  console.log("print",storedData);
  localStorage.setItem("student",JSON.stringify(storedData));
  renderFun();
  event.target[0].value = ""; 
  event.target[1].value ="";
 
  
});
// console.log(storedData);
function renderFun(){
document.getElementById("data").innerHTML = storedData
.map((v,i)=>{
  let{Fname,Lname}=v;
   return`
   <tr>
    <td>${i+1}</td>
    <td>${Fname}</td>
    <td>${Lname}</td>


   `



})
.join(" ")
}
renderFun();
