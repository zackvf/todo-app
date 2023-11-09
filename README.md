# ToDo List app

This is a basic todo list built with just HTML, CSS, and JavaScript, which stores the user's list in local storage for persistent functionality and auto-sorts task items alphanumerically.

## Installation Instructions

- Without git installed on your pc:

  - Click the Code button above the repo files
  - Select the Local tab
  - Click Download ZIP
  - Extract the ZIP files to your desired directory
  - Open the "index.html" file in your preferred browser

- With git installed on your pc:

  - In a terminal window, run the following command to clone the repo files to your desired directory:

    ```
    git clone https://github.com/zackvf/todo-app.git
    ```

  - Open the "index.html" file in your preferred browser

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

- [ ] Adding a prompt to the Clear Task List button to ensure the user definitely wants to reset their list

## Known issues

- Remove Completed Task button clears more than one completed task if two or more tasks are completed in a list of three or more tasks, when only one task should be cleared at a time
