const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

var consumer = "Ali Haridi";
var consumer_id ;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "consumer_complaints",
  password: "dnaaya2020",
  port: 5432,
});

app.get("/", async (req, res) => {
  try {
    var result = await pool.query(
      "SELECT * FROM consumer_complaints where complaint_id = 482443"
    );
    res.json(result.rows[0]);
    console.log(result.rows[0].product_name);
    
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Internal Server Error");
  }
});



app.put('/:id',async (req,res) => {
  consumer_id = req.params.id;
  const result = await pool.query("Update consumer_complaints set product_name = $1 where complaint_id = $2 Returning*",[consumer,consumer_id]);
  console.log(result.rowCount)
})

/*app.post("/api", async (req, res) => {
  console.log("Request ===> ", req.body.count);

  var count = req.body.count;
Mortgage
  console.log(count);
  res.json({ message: `The count is ${count}` });
});*/

app.listen(3000, () => console.log("Server running on port 3000"));
