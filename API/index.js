const express = require('express');
const cors = require('cors');
const productsData = require('./data/products.json');

const app = express();

app.use(cors());

app.get('/all-products', (request, response) => {
  // TODO: Mocked
  // setTimeout(() => {
    response.json(productsData);
  // }, 2000);
});

const port = process.env.post || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
