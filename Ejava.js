let expense = []

function addExpense(){
    let itemInput= document.getElementById("name");
    let priceInput = document.getElementById("amount");
 let quantityInput = document.getElementById("number");
 
  let name = itemInput.value.trim();
   let amount = parseFloat(priceInput.value.trim());
   let quantity = quantityInput.value.trim();

    if(name === ""|| amount === "" || isNaN(amount) || amount <= 0 || quantity ==="" || quantity < 1 || isNaN(quantity)){
        alert("Please enter a valid item name, Price and Quantity.");
        return;
    }

    expense.push({name: name, amount: amount, quantity: quantity});
    itemInput.value = "";
    priceInput.value = "";
     quantityInput.value = "";
    renderExpenses();
}

function renderExpenses(){
    let tbody = document.getElementById("expense-table");
    tbody.innerHTML = "";

    let total = 0.00;
    for(let i = 0.00; i < expense.length; i++){
        total += expense[i].amount;
        tbody.innerHTML +=`
        <tr>
        <td>${expense[i].name}</td>
        <td>GHC${expense[i].amount.toLocaleString('en-GH', {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
        <td>${expense[i].quantity}</td>
        <td><button id="btn" onclick="deleteExpense(${i})">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("total").textContent = `GHC${total.toLocaleString('en-GH', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
}

function deleteExpense(index){
    expense.splice(index,1);
    renderExpenses();
}
