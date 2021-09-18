# Welcome to My Dynamicly Project

Author: Felix
Date: 2021-09-18
Live link:

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

## Flow

1. [Build BE - Node.js, Express for getting the data from the database (MongoDB)](https://github.com/felix-le/dynamicly_project_interview_be)
2. [Build FE - React, Redux for displaying the data](https://github.com/felix-le/dynamicly_project_interview_fe)
