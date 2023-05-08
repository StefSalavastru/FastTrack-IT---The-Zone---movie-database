import mysql from 'mysql'
import express from 'express'
const app =express()
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ChymyCh@ng@456',
  database: 'movies'
})

connection.connect();

app.get('/api/users', async (req,res) => {
    try {
        connection.query('SELECT GSID from users AS solution', (err, rows, fields) => {
            if (err) throw err
          
            console.log('The solution is: ', rows[0]);
            res.status(200).send(rows[0]);
          })
          
    }
    catch(error) {
        console.error(error);
        res.status(500).send('Error retrieving data from database');
    }
})

app.post('/api/users', async (req,res) => {
    try {
        var usern =  req.query.username;
        
        var pw =  req.query.password;
  var gsid =  req.query.gsid;
  console.log('The solution is: ', req.query.val);
  var sql = 'insert into users (username,password,GSID) values (\''+usern+'\',\''+pw+'\',\''+gsid+'\')';
        connection.query(sql, (err, rows, fields) => {
            if (err) throw err
          
            //console.log('The solution is: ', rows[0]);
            res.status(200).send(rows[0]);
          })
          
    }
    catch(error) {
        console.error(error);
        res.status(500).send('Error retrieving data from database');
    }
})

app.listen(3001, () => {
    console.log('Server listening on port 3001');
})