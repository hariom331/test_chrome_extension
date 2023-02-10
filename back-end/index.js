const express = require('express')
const app = express()
const port = 8000
const connectToMongo = require('./db');


connectToMongo().then(
  console.log("Promise resolved")
);
//Middleware for json formats
app.use(express.json());
app.use(  express.urlencoded({ extended: true }))

//Available Routes
app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})
app.use('/register',require('./routes/create'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})