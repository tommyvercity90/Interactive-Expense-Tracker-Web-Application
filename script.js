
// Get HTML elements
const expenseForm = document.getElementById("expenseForm");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");

const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");
const totalTransactions = document.getElementById("totalTransactions");
const averageExpense = document.getElementById("averageExpense");

const filterCategory = document.getElementById("filterCategory");
const filterDate = document.getElementById("filterDate");
const sortDate = document.getElementById("sortDate");

const categorySummary = document.getElementById("categorySummary");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const formHeading = document.getElementById("formHeading");

// Load expenses from LocalStorage
let expenses = JSON.parse(
    localStorage.getItem("expenses")
) || [];

let editId = null;

// Generate unique ID
function generateId() {
    return Date.now().toString() +
        Math.random().toString(36).slice(2);
}

// Save expenses
function saveExpenses() {
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(amount);
}

// Add or Edit Expense
expenseForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    // Validate inputs
    if (
        !title ||
        !Number.isFinite(amount) ||
        amount <= 0 ||
        !category ||
        !date
    ) {
        alert("Please enter valid expense details!");
        return;
    }

    if (editId !== null) {

        // Update existing expense
        expenses = expenses.map(expense => {
            if (expense.id === editId) {
                return {
                    ...expense,
                    title,
                    amount,
                    category,
                    date
                };
            }

            return expense;
        });

        editId = null;

    } else {

        // Create new expense object
        const newExpense = {
            id: generateId(),
            title,
            amount,
            category,
            date
        };

        expenses.push(newExpense);
    }

    saveExpenses();
    expenseForm.reset();
    resetEditMode();
    renderExpenses();
});

// Display expenses
function renderExpenses() {

    expenseList.innerHTML = "";

    // Apply category and date filters
    let filteredExpenses = expenses.filter(expense => {

        const categoryMatch =
            filterCategory.value === "All" ||
            expense.category === filterCategory.value;

        const dateMatch =
            !filterDate.value ||
            expense.date === filterDate.value;

        return categoryMatch && dateMatch;
    });

    // Sort expenses
    filteredExpenses.sort((a, b) => {

        if (sortDate.value === "newest") {
            return b.date.localeCompare(a.date);
        }

        return a.date.localeCompare(b.date);
    });

    if (filteredExpenses.length === 0) {
        expenseList.innerHTML =
            '<p class="empty">No expenses found!</p>';
    }

    // Create expense elements
    filteredExpenses.forEach(expense => {

        const item = document.createElement("div");
        item.className = "expense-item";

        const info = document.createElement("div");
        info.className = "expense-info";

        const heading = document.createElement("h3");
        heading.textContent = expense.title;

        const categoryText = document.createElement("p");
        categoryText.textContent =
            "Category: " + expense.category;

        const dateText = document.createElement("p");
        dateText.textContent = "Date: " + expense.date;

        info.append(heading, categoryText, dateText);

        const right = document.createElement("div");

        const amountText = document.createElement("p");
        amountText.className = "expense-amount";
        amountText.textContent =
            formatCurrency(expense.amount);

        const actions = document.createElement("div");
        actions.className = "actions";

        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {
            editExpense(expense.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteExpense(expense.id);
        });

        actions.append(editButton, deleteButton);
        right.append(amountText, actions);

        item.append(info, right);

        expenseList.appendChild(item);
    });

    updateSummary();
    updateCategorySummary();
}

// Edit expense
function editExpense(id) {

    const expense = expenses.find(item => item.id === id);

    if (!expense) return;

    titleInput.value = expense.title;
    amountInput.value = expense.amount;
    categoryInput.value = expense.category;
    dateInput.value = expense.date;

    editId = id;

    submitBtn.textContent = "Update Expense";
    formHeading.textContent = "Edit Expense";
    cancelBtn.hidden = false;

    expenseForm.scrollIntoView({
        behavior: "smooth"
    });
}

// Reset edit mode
function resetEditMode() {

    editId = null;

    submitBtn.textContent = "Add Expense";
    formHeading.textContent = "Add New Expense";
    cancelBtn.hidden = true;
}

// Cancel editing
cancelBtn.addEventListener("click", function() {
    expenseForm.reset();
    resetEditMode();
});

// Delete expense
function deleteExpense(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) return;

    expenses = expenses.filter(
        expense => expense.id !== id
    );

    if (editId === id) {
        expenseForm.reset();
        resetEditMode();
    }

    saveExpenses();
    renderExpenses();
}

// Update total summary
function updateSummary() {

    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    totalExpense.textContent = formatCurrency(total);

    totalTransactions.textContent = expenses.length;

    const average = expenses.length > 0
        ? total / expenses.length
        : 0;

    averageExpense.textContent =
        formatCurrency(average);
}

// Category summary
function updateCategorySummary() {

    categorySummary.innerHTML = "";

    const summary = {};

    expenses.forEach(expense => {

        if (!summary[expense.category]) {
            summary[expense.category] = 0;
        }

        summary[expense.category] += expense.amount;
    });

    Object.entries(summary).forEach(([category, amount]) => {

        const item = document.createElement("div");
        item.className = "category-item";

        const name = document.createElement("span");
        name.textContent = category;

        const value = document.createElement("strong");
        value.textContent = formatCurrency(amount);

        item.append(name, value);
        categorySummary.appendChild(item);
    });

    if (Object.keys(summary).length === 0) {
        categorySummary.innerHTML =
            '<p class="empty">No category data available.</p>';
    }
}

// Filter events
filterCategory.addEventListener("change", renderExpenses);
filterDate.addEventListener("change", renderExpenses);
sortDate.addEventListener("change", renderExpenses);

// Reset filters
document.getElementById("resetFilters")
    .addEventListener("click", function() {

        filterCategory.value = "All";
        filterDate.value = "";
        sortDate.value = "newest";

        renderExpenses();
    });

// Initial display
renderExpenses();
