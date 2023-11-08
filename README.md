# ToDo List app

This is a basic todo list built with just HTML, CSS, and JavaScript, which stores the user's list in local storage for persistent functionality and auto-sorts task items alphanumerically.

## Installation Instructions

- Without git installed on your pc:

  1. Click the Code button above the repo files
  2. Select the Local tab
  3. Click Download ZIP
  4. Extract the ZIP iles to your desktop or desired directory
  5. Open the "index.html" file in your preferred browser

- With git installed on your pc:

  1. In a terminal window, run the following command to clone the repo files to your desired directory:

     > git clone https://github.com/zackvf/todo-app.git

  2. Open the "index.html" file in your preferred browser

## Creating new tasks

![Creating new tasks](<./images/creating new tasks.gif>)

### Under the hood in local storage

![Creating new tasks](<./images/ls creating new tasks.gif>)

## Removing newly created tasks

![Removing a task](<./images/removing tasks.gif>)

### Under the hood in local storage

![Removing a task](<./images/ls removing tasks.gif>)

## Removing a completed task (does not affect incomplete tasks)

![Removing completed task](<./images/removing completed tasks.gif>)

### Under the hood in local storage

![Removing completed task](<./images/ls removing completed tasks.gif>)

## Clearing the list (clears local storage and reloads the page)

![Clearing task list](<./images/clearing task list.gif>)

### Under the hood in local storage

![Clearing task list](<./images/ls clearing task list.gif>)

## Roadmap

- Adding a prompt to the Clear Task List button to ensure user definitely wants to reset their list
- Adding a calendar to the app
- Applying tasks to user-selected calendar days
- Storing lists in an external database to not rely on local storage

## Known issues

- Remove Completed Task button clears more than one completed task if two or more tasks are completed in a list of three or more tasks, when only one task should be cleared at a time
