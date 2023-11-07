const itemContainer = document.getElementById("items");
const itemTemplate = document.getElementById("itemTemplate");
const addButton = document.getElementById("add");


// access localStorage window property to either get the existing todo item or return an empty array if there's no existing items, such as for a fresh todo list
function getItems() {
    const value = localStorage.getItem("todo") || "[]";
    return JSON.parse(value);
}

// store the todo items from getItems in an accessible variable for setItems
let items = getItems();

// convert the JSON object returned from getItem into a javascript object and set the object into local storage for easy access/manipulation
function setItems(items) {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("todo", itemsJson);
}

// update the task item to save the user input data for each one
function updateItem(item, key, value) {
    item[key] = value; // object reference dictates the value updated individually here will also update the same object in the todo list array
    setItems(items);
    refreshList();
}

// add a new todo task at the top of the list with Array.unshift, then set the new item to local storage, and then re-render the task list
function addItem() {
    items.unshift({
        description: "",
        completed: false
    });
    setItems(items);
    refreshList();
}

// re-render the new task list
// cloneNode(true) indicates a deep clone where we want the entire node and subtree of child nodes to ensure the entire template is copied
function refreshList() {
    items.sort((a, b) => { // basic sorting algorithm to get alphabetical sorting of tasks by description, updating on task completion
        if (a.completed) {
            return 1;
        }
        if (b.completed) {
            return -1;
        }
        return a.description < b.description ? -1 : 1;
    });
    itemContainer.innerHTML = ""; // removing this line duplicates the full todo item list on add button click?
    for (let item of items) { // loop through the tasks from getItems
        const itemElement = itemTemplate.content.cloneNode(true); // copy the "content" of the item template div, being the "item" div
        let descriptionInput = itemElement.querySelector(".item-description"); // create a variable to select the description of the newly copied item
        let completedInput = itemElement.querySelector(".item-completed"); // create another variable to select the checkbox of the newly copied item
        descriptionInput.value = item.description; // set the newly copied item description from addItem
        completedInput.checked = item.completed; // set the newly copied checkbox state from addItem, defaulting to "not complete" or unchecked
        descriptionInput.addEventListener("change", () => { // listen for user input changes on task item descriptions and update the value within the todo list
            updateItem(item, "description", descriptionInput.value);
        });
        completedInput.addEventListener("change", () => { // listen for user input changes on task item checkboxes and update the value within the todo list
            updateItem(item, "completed", completedInput.checked);
        });
        itemContainer.append(itemElement); // add the newly copied item to the main "items" div, aka the todo list
    }
}

addButton.addEventListener("click", () => { addItem(); });

refreshList();