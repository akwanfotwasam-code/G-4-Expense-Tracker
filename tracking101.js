let expenses = []

function addExpense(){
    let nameInput = document.getElementById("name");
    let amountInput = document.getElementById("amount");

    let name = nameInput.value.trim();
    let amount = parseFloat(amountInput.value.trim());

    if(name === "" || amount === "" || isNaN(amount) || amount <= 0){
        alert("Please enter a valid expense name and amount.");
        return;
    }

    expenses.push({name: name, amount: amount});
    nameInput.value = "";
    amountInput.value = "";
    renderExpenses();
}

function renderExpenses(){
    let tbody = document.getElementById("expense-table");
    tbody.innerHTML = "";

    let total = 0;
    for(let i = 0; i < expenses.length; i++){
        total += expenses[i].amount;
        tbody.innerHTML +=`
        <tr>
        <td>${expenses[i].name}</td>
        <td>${expenses[i].amount}</td>
        <td><button id="btn" onclick="deleteExpense(${i})">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("total").textContent = total;
}

function deleteExpense(index){
    expenses.splice(index,1);
    renderExpenses();
}

