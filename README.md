# 💰 Interactive Expense Tracker

A responsive, browser-based **Expense Tracker Web Application** built using HTML5, CSS3, and JavaScript. This application allows users to manage daily expenses, organize spending by category, filter transactions, and view spending summaries — all with data persistence using LocalStorage.

## ✨ Features

- ➕ **Add Expenses** — Add expenses with a title, amount, category, and date.
- ✏️ **Edit Expenses** — Update existing expense details.
- 🗑️ **Delete Expenses** — Remove unwanted transactions with confirmation.
- 🏷️ **Category Filtering** — Filter expenses by Food, Travel, Shopping, Bills, Education, Health, or Other.
- 📅 **Date Filtering** — View expenses recorded on a specific date.
- 🔃 **Sorting** — Sort expenses by newest or oldest date.
- 💵 **Total Expense Calculation** — Automatically calculate total spending.
- 📊 **Spending Summary** — Display total transactions and average expense.
- 📈 **Category Summary** — View spending totals for individual categories.
- 💾 **LocalStorage Persistence** — Save expense data in the browser across page refreshes.
- ✅ **Form Validation** — Validate required fields and positive expense amounts.
- 📱 **Responsive Design** — Support desktop, tablet, and mobile screens.
- ⚡ **Dynamic UI Updates** — Update the expense list without reloading the page.

## 🛠️ Technologies Used

- **HTML5** — Semantic page structure and expense form.
- **CSS3** — Styling, Grid, Flexbox, transitions, and responsive layouts.
- **JavaScript (ES6+)** — DOM manipulation, event handling, array methods, and expense calculations.
- **LocalStorage** — Client-side data persistence.
- **Git** — Version control.
- **GitHub** — Source code hosting and project sharing.

## 📂 Project Structure

```
expense-tracker/
│
├── index.html       # Application structure
├── style.css        # Styling and responsive design
├── script.js        # Application logic
└── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- A modern web browser such as Chrome, Firefox, or Edge.
- A code editor such as Visual Studio Code.
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation

**1. Clone the repository**

```
git clone https://github.com/YOUR-USERNAME/expense-tracker.git
```

**2. Navigate to the project directory**

```
cd expense-tracker
```

**3. Open the project**

Open `index.html` directly in your browser, or use the **Live Server** extension in Visual Studio Code for a convenient development workflow.

No package installation or build process is required.



## 💡 How to Use

1. Open the application in your browser.
2. Enter an expense title.
3. Enter the expense amount.
4. Select a category.
5. Choose the expense date.
6. Click **Add Expense** to save the transaction.
7. Use **Edit** to modify an existing expense.
8. Use **Delete** to remove an expense.
9. Apply category or date filters to find specific transactions.
10. Use the sorting dropdown to change the order of expenses.
11. Review the summary cards and category breakdown to understand your spending.

Your expense data is stored in LocalStorage and remains available after refreshing the page in the same browser, provided the stored site data is not cleared.

## 🧠 JavaScript Concepts Practiced

This project demonstrates several fundamental JavaScript concepts:

| Concept                    | Application                                                   |
| -------------------------- | ------------------------------------------------------------- |
| DOM Manipulation           | Dynamically render expense entries                            |
| Event Listeners            | Handle form submissions and button clicks                     |
| Arrays and Objects         | Represent and manage expense records                          |
| `push()`                   | Add new expense objects                                       |
| `map()`                    | Update existing expenses                                      |
| `filter()`                 | Filter and delete expenses                                    |
| `find()`                   | Find an expense by its ID                                     |
| `reduce()`                 | Calculate total and average spending                          |
| `sort()`                   | Sort expenses by date                                         |
| LocalStorage               | Persist expense data in the browser                           |
| JSON Methods               | Serialize and restore expense data                            |
| Form Validation            | Validate expense input before saving                          |
| Template-free DOM Creation | Create elements with `createElement()` and insert text safely |

## 📊 Expense Summary Calculations

The application automatically calculates:

- **Total Expenses:** Sum of all saved expense amounts.
- **Total Transactions:** Number of saved expense records.
- **Average Expense:** Total spending divided by the number of saved transactions.
- **Category Summary:** Total spending grouped by category.

These summaries are based on all saved expenses, while category and date filters control which transactions appear in the expense history.

## 🔒 Data Storage and Privacy

- Expense records are stored locally in your browser.
- No backend server or external database is required.
- Data generally persists across refreshes in the same browser profile.
- Clearing browser site data may permanently remove saved expenses.
- LocalStorage is not encrypted, so avoid storing sensitive financial information on shared devices.


## 🔮 Future Improvements

Possible enhancements include:

- Monthly and yearly expense reports.
- Interactive charts using a charting library.
- Budget limits and spending alerts.
- Search expenses by title.
- Export transactions to CSV.
- Dark mode.
- Custom categories.
- Recurring expense support.
- Income tracking and balance calculation.
- Cloud synchronization and user authentication.

## 🎯 Learning Objectives

The primary objective of this project is to develop practical experience with:

- Building responsive web interfaces.
- Managing application state with arrays and objects.
- Implementing CRUD operations (Create, Read, Update, Delete).
- Using JavaScript array methods for filtering, sorting, and calculations.
- Persisting data using LocalStorage.
- Validating user input.
- Updating the DOM dynamically without a full page reload.
- Organizing a small front-end project into separate files.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application.
5. Submit a pull request.

