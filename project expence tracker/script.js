function addExpense() {
  let amount = document.getElementById("amount").value;
  let desc = document.getElementById("description").value;
  let cat = document.getElementById("category").value;

  let li = document.createElement("li");

  li.innerHTML =
    amount + " - " + cat + " - " + desc +
    ' <button onclick="this.parentElement.remove()">Delete Expense</button>' +
    ' <button onclick="editExpense(this)">Edit Expense</button>';

  document.getElementById("expenseList").appendChild(li);
}
