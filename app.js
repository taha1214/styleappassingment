const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display")
const amountInput = document.getElementById("amount-input")
const table = document.getElementById("table");
const kharcha = document.getElementById("kharcha");
const balance2 = document.getElementById("balance");
const getAmount = document.getElementById("get-amount");
const button2 = document.getElementById("button2");
const setBudget = document.getElementById("set");
const butDiv = document.getElementById("butdiv");
const data = document.getElementById("data");
const balance = document.getElementById("balance");
const dateObj = document.getElementById("dateobj");
const btnText = button.innerText;
let editId = null;
button2.onclick =()=>{
  let getAmount2 = +getAmount.value;
  localStorage.setItem("amount2", getAmount2 )
  let store = +localStorage.getItem("amount2");
    getAmount2 = JSON.parse(store)
  setBudget.innerText = "$" + getAmount2;
if(getAmount === 0){
  setBudget.innerText ="$" + getAmount2;
}
  if(getAmount2 !== 0){
    butDiv.innerHTML = "";
  }
 balshow()
}
let arrayOfAmount = [];
let exArr = [];

let arrstr = localStorage.getItem("expense", "amount")
if(arrstr !== null){
  exArr = JSON.parse(arrstr);
}


button.onclick =()=>{
 let input2 = input.value;
 let amountInput2 = +amountInput.value;
 let dateObj2 = dateObj.value;
 if(editId !== null){ 
   exArr.splice(editId, 1, {"expenses" : input2,
   "examount" : amountInput2, "date" : dateObj2 } )
   editId = null;
 }else{
 exArr.push({"expenses" : input2,
"examount" : amountInput2, "date" : dateObj2 });
 }
arrayOfAmount.push(+amountInput2);
input.value = "";
amountInput.value = "";
dateObj.value = "";
 showarr()
 summ()

datasave();
button.innerText = btnText;
}


function datasave(){
  let str = JSON.stringify(exArr);
  localStorage.setItem("expense", str, "amount", str);
  
}



function showarr () {
   let display = "";
   // let string = localStorage.getItem("expense" );
   // let string2 = localStorage.getItem("amount" );
   
 
     exArr.forEach((a, i) => {
        display += `
        <tr>
          <th scope="row">${i+1}</th>
          <td>${a.expenses}</td>
          <td id="data">${a.examount}</td>
          <td>${a.date}</td>
          <td><i class="bi bi-pencil-square" onclick="editinfo(${i})" ></i>   
              /<i class="bi bi-trash3-fill" onclick="deletebutton(${i})" ></i></td>
        </tr> `
      
       
    });

    table.innerHTML = display; 

    
}

function deletebutton (id){
  exArr.splice(id, 1)
  datasave();
showarr();
}
function summ(){
  let sum = 0;
  for (let i = 0; i <arrayOfAmount.length; i++) {
    let element = parseInt(+arrayOfAmount[i]);
    sum += element;
  }
    kharcha.innerText = "$"+ sum;
    balshow()
}

function balshow() {
  let amount5 =  +getAmount.value;
  let sum2 = 0;
  for (let i = 0; i <arrayOfAmount.length; i++) {
    let element2 = parseInt(+arrayOfAmount[i]);
    sum2 += element2;
  let balanceshow =  amount5-sum2;
balance.innerHTML ="$" + balanceshow;

  }
}
function editinfo(id) {
editId = id;
input.value = exArr[id].expenses;
amountInput.value = exArr[id].examount;
dateObj.value = exArr[id].date
button.innerText = "save changes"
  
}