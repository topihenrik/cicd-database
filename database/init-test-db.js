const { Client } = require('pg');

const pgclient = new Client({
    host: 'localhost',
    port: '5432',
    user: 'runner',
    password: 'postgres',
    database: 'StocKingTest'
});

pgclient.connect();


const createTablesIfNoExist = `DROP TABLE IF EXISTS ExchangeRates CASCADE;
CREATE TABLE ExchangeRates(
    from_currency TEXT NOT NULL,
    to_currency TEXT NOT NULL,
    ratio FLOAT NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY (to_currency, from_currency)
);

DROP TABLE IF EXISTS Company CASCADE;
CREATE TABLE Company(
    cid INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    ticker TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    market_cap BIGINT NOT NULL,
    currency TEXT NOT NULL,
    date DATE NOT NULL,
    sector TEXT NOT NULL
);`

pgclient.query(createTablesIfNoExist, (err, res) => {
    if (err) throw err;
})

process.exit()

// const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
// const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
// const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']
//
// pgclient.query(table, (err, res) => {
//     if (err) throw err
// });
//
// pgclient.query(text, values, (err, res) => {
//     if (err) throw err
// });
//
// pgclient.query('SELECT * FROM student', (err, res) => {
//     if (err) throw err
//     console.log(err, res.rows) // Print the data in student table
//     pgclient.end()
// });