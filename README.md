# Welcome to My Dynamicly Project

Author: Felix
Date: 2021-09-18
Live link: [Link](https://dynamicly-project-interview-fe.vercel.app/home)

Firstly, I would like to say thanks to give me a chance to show my work.

Secondly, I would like to introduce my project.

## Requirements

1. The goal of the application is to track expenses.
2. An "expense" is made of the following information: an amount, a date, and a description.
3. The application should be a single-page application that displays a list of expenses (see example below)

4. When you load the page, previously-created expenses should be loaded from the database and displayed as a list.
5. Each expense should display the amount of taxes (15%) that should be collected on them.
6. The application should always have a counter that displays

- the sub-total (before taxes) of the amount of all expenses at the top of the page;
- the total of all expenses, including taxes;

7. There should be a button that displays a form to create a new expense.
8. When the form to create a new expense is filled, there should be a button to save it to the database. Once an expense is saved, the list should be updated with the new item.
9. Each expense should have a button that allows editing it. Clicking that button should make the values of the expense editable through input fields, and a button to update the entry. Once saved, the expense should update to its new data.
10. Each expense should have a button that allows editing it. Clicking that button should remove that expense from the database. Once an expense is deleted, the list should be updated without that item.

## Technologies Used

1. Front end: React, Redux
2. Back end: Node.js, Express
3. Database: MongoDB

## How to run the application:

- Install Node.js and npm
- yarn
- yarn start

## Flow

1. [Build BE - Node.js, Express for getting the data from the database (MongoDB)](https://github.com/felix-le/dynamicly_project_interview_be)
   Live link: [Link](https://dynamicly.herokuapp.com/api)

- run the server
- connect to the MongoDB
- get the data from the database
- build filter, sort, pagination
- fix mongodb error UnhandledPromiseRejectionWarning
- updated function follow FE
- Backend Live Link: https://dynamicly.herokuapp.com/api

2. [Build FE - React, Redux for displaying the data](https://github.com/felix-le/dynamicly_project_interview_fe)
   Live link: [Link](https://dynamicly-project-interview-fe.vercel.app/home)

- npx create react app
- add style
- working on RestApis
- connect redux - save data state
- create table component
- create Modal components
- working on add new an expense
- add pagination
- working on UI
- working on other features (Edit, Delete, Update)
- working on Home Page
  ==> if data.length > 4 then add pagination.
  **Note** fix Treating warnings as errors because process.env.CI = true while deploying to vercel
  create a variable "CI" - value is false

Closed. This question does not meet Stack Overflow guidelines. It is not currently accepting answers.
Want to improve this question? Update the question so it's on-topic for Stack Overflow.

Closed last year.

I want to describe directory & file structures in some of my Jekyll blog posts, does Markdown provide a neat way of outputting such a thing?

For example, you can see at this link on the Jekyll website that the directory & file structure is output on the page very neatly:

```
src
├── api
│    ├── baseApi.js
│    └── expensesApi.js
├── components
│   ├── commons (common components - like Footer, Navbar, Loading)
│   └── DataTable (component for displaying data)
│    │      └── DataTable.js
│    │      └── index.js
│    └── DataTable (component for displaying data)
│    │      └── DataTable.js
│    │      └── index.js
│    └── Modal (component for show modals)
│    │      └── ConfirmModal.js
│    │      └── index.js
│    │      └── Modal.js
│    │      └── ModalStyle.js
│    └── Pagination (component for pagination)
│           └── Pagination.js
│           └── index.js
├── container
│     ├── Expense (container for expense)
│     │   ├── ExpenseTable.js
│     │   └── index.js
│     │   └── Modals
│     │          └── AddExpenseModal.js
│     │          └── EditExpenseModal.js
│     │
│     └── Home (container for home)
│     │    └── Home.js
│     │    └── index.js
│     └── routes.js
├── reduxState
│    └── reducer
│    │    └── expenseReducer.js
│    │    └── index.js
│    └── actions.js
│    └── types.js
├── store
│    └── index.js
├── scss
│    └── style.scss
├── App.js
└── index.js
```
