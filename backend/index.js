const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
// Middleware for parsing JSON request body
app.use(express.json());

// MySQL database configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "eat_that_frog_app",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server: " + err.stack);
    return;
  }
  console.log("Connected to MySQL server as ID " + connection.threadId);
});

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// API endpoint for getting all todos
app.get("/api/alltodos", (req, res) => {
  pool.query("SELECT * FROM todos", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
      return;
    }

    res.json(results);
  });
});

app.get("/api/todos/:type", (req, res) => {
  const { type } = req.params;

  pool.query("SELECT * FROM todos WHERE type = ?", type, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
      return;
    }

    if (results.length === 0) {
      // { error: "Todo not found" }
      res.json([]);
      return;
    }

    res.json(results);
  });
});

// API endpoint for creating a new todo
app.post("/api/todos", (req, res) => {
  const { type, title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({ error: "Missing title or description" });
    return;
  }

  const todo = { title, description, type };

  pool.query("INSERT INTO todos SET ?", todo, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
      return;
    }

    const newTodo = { id: result.insertId, ...todo };
    res.status(201).json(newTodo);
  });
});

// API endpoint for deleting a todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM todos WHERE id = ?", id, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    res.sendStatus(204);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
