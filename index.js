const express = require('express');
const { Pool } = require('pg');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'consumer_complaints',
  password: 'dnaaya2020',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM consumer_complaints where complaint_id = 482443');
  
  console.log(result.rows[0].company)
});

app.listen(3000, () => console.log('Server running on port 3000'));
