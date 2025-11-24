// Expense data structure
let expenses = [];

// DOM references
const expenseForm = document.getElementById('expenseForm');
const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const expensesTableBody = document.querySelector('#expensesTable tbody');
const totalDiv = document.getElementById('total');
const errorMsg = document.getElementById('errorMsg');

// Add expense event
expenseForm.addEventListener('submit', function(e) {
  e.preventDefault();
  errorMsg.textContent = '';

  // Get values
  const name = expenseName.value.trim();
  const amtStr = expenseAmount.value.trim();

  // Validation
  if (!name) {
    errorMsg.textContent = "Expense name required.";
    return;
  }

  // Validate amount is a number
  const amount = parseFloat(amtStr);
  if (!amtStr || isNaN(amount) || amount <= 0) {
    errorMsg.textContent = "Amount must be a positive number.";
    return;
  }

  // Add expense
  addExpense(name, amount);

  // Reset fields
  expenseName.value = "";
  expenseAmount.value = "";
});

function addExpense(name, amount) {
  expenses.push({ name, amount });
  renderExpenses();
  updateTotal();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
  updateTotal();
}

function renderExpenses() {
  expensesTableBody.innerHTML = '';
  expenses.forEach((expense, idx) => {
    const row = document.createElement('tr');
    row.innerHTML =
      `<td>${expense.name}</td>
       <td>$${expense.amount.toFixed(2)}</td>
       <td><button onclick="deleteExpense(${idx})">Delete</button></td>`;
    expensesTableBody.append(row);
  });
}

function updateTotal() {
  let total = 0;
  // Loop to calculate total amount
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

// Expose deleteExpense to global (for inline button click)
window.deleteExpense = deleteExpense;