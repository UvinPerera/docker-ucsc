const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres',
    host: 'my_postgres_db',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

// GET route
app.get('/', async (req, res) => {
    try {
        // Connect to the PostgreSQL database
        const client = await pool.connect();

        // Execute a simple query
        const result = await client.query('SELECT * FROM test_table');

        // Release the client back to the pool
        client.release();

        // Send the query result as the response
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});