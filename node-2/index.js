const expres = require("express");
const app = expres();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 4, name: "Bob Williams", email: "bob.williams@example.com" },
  { id: 5, name: "Emma Brown", email: "emma.brown@example.com" },
  { id: 6, name: "Michael Davis", email: "michael.davis@example.com" },
  { id: 7, name: "Olivia Wilson", email: "olivia.wilson@example.com" },
  { id: 8, name: "William Martinez", email: "william.martinez@example.com" },
  { id: 9, name: "Sophia Anderson", email: "sophia.anderson@example.com" },
  { id: 10, name: "James Thompson", email: "james.thompson@example.com" },
];

app.get("/user", (req, res) => {
  res.json({
    success: true,
    data: users,
  });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const data = users.filter((user) => user.id === Number(id));
  res.json({
    success: true,
    data: data,
  });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === Number(id));
  const updatedUser = users.splice(index, 1);
  res.json({
    success: true,
    data: updatedUser,
  });
});

app.post("/user", (req, res) => {
  const payload = req.body;
  users.push(payload);
  res.json({
    success: true,
    data: payload,
  });
});

app.put("/user/:id", (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === Number(id));
  const updatedUser = users.splice(index, 1, payload);
  res.json({
    success: true,
    data: payload,
  });
});

app.listen(4000, () => {
  console.log(`server running  at http://localhost:4000`);
});
