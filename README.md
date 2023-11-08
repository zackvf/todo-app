# todo-app

This is a basic todo list built with just HTML, CSS, and JavaScript, which stores the user's list in local storage for persistent functionality and auto-sorts todo items alphanumerically.

# Creating a new task

![Creating new tasks]()

# Removing a newly created task

![Removing a task]()

# Removing a completed task

![Removing completed task]()

# Clearing the todo list (clears local storage and reloads the page)

![Clearing task list]()

# Under the hood (what happens in local storage when creating/removing/updating tasks)

![Under the hood]()

# Roadmap

- Adding a prompt to the Clear Task List button to ensure user definitely wants to reset their todo list
- Adding a calendar to the app
- Applying tasks to user-selected calendar days
- Storing todo lists in an external database (to not rely on local storage)

# Known issues

- Remove Completed Task button clears more than one completed task if two or more tasks are completed in a list of three or more tasks, when only one task should be cleared at a time
