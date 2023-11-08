# ToDo List app

This is a basic todo list built with just HTML, CSS, and JavaScript, which stores the user's list in local storage for persistent functionality and auto-sorts task items alphanumerically.

## Creating new tasks

![Creating new tasks](<creating new tasks.gif>)

### Under the hood in local storage

![Creating new tasks](<ls creating new tasks.gif>)

## Removing newly created tasks

![Removing a task](<removing tasks.gif>)

### Under the hood in local storage

![Removing a task](<ls removing tasks.gif>)

## Removing a completed task (does not affect incomplete tasks)

![Removing completed task](<removing completed tasks.gif>)

### Under the hood in local storage

![Removing completed task](<ls removing completed tasks.gif>)

## Clearing the list (clears local storage and reloads the page)

![Clearing task list](<clearing task list.gif>)

### Under the hood in local storage

![Clearing task list](<ls clearing task list.gif>)

## Roadmap

- Adding a calendar to the app (in progress)
- Adding a prompt to the Clear Task List button to ensure user definitely wants to reset their list
- Applying tasks to user-selected calendar days
- Storing lists in an external database to not rely on local storage

## Known issues

- Remove Completed Task button clears more than one completed task if two or more tasks are completed in a list of three or more tasks, when only one task should be cleared at a time
