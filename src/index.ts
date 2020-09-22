import axios from "axios";

async function getTodo(id: number) {
  console.log(`call getTodo with id: ${id}`);

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return data;
}

async function getTodoButError() {
  console.log(`call getTodoButError`);

  await axios.get("https://jsonplaceholder.typicode.com/todos/9");

  throw new Error("Something broke");
}

async function imperativeMain() {
  try {
    const todo1 = await getTodo(1);
    const todo2 = await getTodo(2);
    const todo3 = await getTodo(3);
    const todoX = await getTodoButError();

    console.log(todo1);
    console.log(todo2);
    console.log(todo3);
    console.log(todoX);
  } catch (error) {
    console.error("Imperative Error");
    console.error(error);
  }
}

async function promiseAllMain() {
  try {
    const [todo1, todo2, todo3, todoX] = await Promise.all([
      getTodo(1),
      getTodo(2),
      getTodo(3),
      getTodoButError()
    ]);

    console.log(todo1);
    console.log(todo2);
    console.log(todo3);
    console.log(todoX);
  } catch (error) {
    console.error("Promise All Error");
    console.error(error);
  }
}

// imperativeMain();

promiseAllMain();
