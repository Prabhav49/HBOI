const connectToMongo = require('./db');

const express = require('express')
connectToMongo();
const app = express()
const port = 5000
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

//Premium Calculator
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/calculate-premium', (req, res) => {
  const { age, gender, smoking } = req.body;
  let premium = 0;

  if (age >= 18 && age <= 30) {
    if (gender === 'male') {
      premium = 100;
    } else if (gender === 'female') {
      premium = 80;
    }
  } else if (age > 30 && age <= 50) {
    if (gender === 'male') {
      premium = 150;
    } else if (gender === 'female') {
      premium = 120;
    }
  }

  if (smoking) {
    premium += 50;
  }

  res.send({ premium });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

