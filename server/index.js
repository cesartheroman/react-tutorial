const express = require('express');

const app = express();
const PORT = 3000;
const PRODUCTS = require('./data/products');

app.use(express.static('client/public'));

app.get('/api/products', (req, res) => {
  res.send({ data: PRODUCTS });
});

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
