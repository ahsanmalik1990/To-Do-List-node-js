import inquirer from "inquirer";

let todo: string[] = [];

async function createTodo() {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                message: "Select an operation",
                name: "select",
                choices: ["add", "update", "view", "delete"],
            }
        ]);

        if (ans.select === "add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item to the list",
                name: "todo",
            });
            todo.push(addtodo.todo);
            console.log(todo);
        }

        if (ans.select === "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                message: "Select item to update",
                name: "todo",
                choices: todo,
            });
            let newtodo = await inquirer.prompt({
                type: "input",
                message: "Enter new value",
                name: "newtodo",
            });
            todo[todo.indexOf(updatetodo.todo)] = newtodo.newtodo;
            console.log(todo);
        }

        if (ans.select === "view") {
            console.log("*** TO DO LIST ***");
            console.log(todo);
            console.log("******************");
        }

        if (ans.select === "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                message: "Select item to delete",
                name: "todo",
                choices: todo,
            });
            todo = todo.filter(val => val !== deletetodo.todo);
            console.log(todo);
        }

    } while (true);
}

// Call the function to start the application
createTodo();