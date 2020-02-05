const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

let todoList = [{
    todo: "Learn JS",
    done: true
  },
  {
    todo: "Learn express",
    done: false
  }
];

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(bodyParser.json());
app.get("/todo", (req, res) => {
  res.send(todoList);
});

app.get("/todo/search", (req, res) => {
  let keyword = req.query.todo;
  let search = todoList.filter(todos => {
    return todos.todo.toLowerCase().includes(keyword.toLowerCase());
  });
  res.send(search);
});

app.get("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send("not found");
  } else {
    res.send(todoList[index]);
  }
});

app.post("/todo", (req, res) => {
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);
  if (todo == "") {
    res.send("todo cannot empty");
  } else {
    let newTodo = {
      todo: req.body.todo,
      done: done
    };
    todoList.push(newTodo);
    res.send({
      success: "Data successfully added",
      data: newTodo
    });
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send("Your data is invalid");
    console.log("Your data is invalid");
  } else {
    res.send({
      success: `Your ${index} index data has been deleted`,
      done: todoList[index]
    });
    todoList.splice(index, 1);
  }
});

app.put("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);

  if (index > length - 1) {
    res.send("Your data is invalid");
    console.log("Your data is invalid");
  } else {
    let newTodo = {
      todo: todo,
      done: done
    };
    // console.log(todoList.splice(index, 1, newTodo));
    todoList.splice(index, 1, newTodo);
    res.send({
      success: "Your data is updated",
      data: newTodo
    });
  }
});

app.listen(PORT, () => console.log(`Successful to connect ${PORT}`));