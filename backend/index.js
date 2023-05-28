const connectToMongo = require('./db');

const express = require('express')
connectToMongo();
const app = express()
const BASE_URL = process.env.BASE_URL;
const port = process.env.port || 6001;
var cors = require('cors');
app.use(cors());

//Middleware
app.use(express.json());

//Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/accDetail', require('./routes/accDetail'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

