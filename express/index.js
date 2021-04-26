const express = require('express');
const uuid = require('uuid');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

let products = [
  {
    "_id": "6846ca98-9ee7-4da3-8038-048b26ab36ff",
    "name": "Fajeczki",
    "description": "big niezdrowe",
    "price": 15.0,
    "image": "https://koszulkowo.com/media/catalog/product/cache/e96e4cf616408cb4fdb26c749a353feb/k/s/kszcudzesy_zoom.jpg"
  }, {
    "_id": "2cfd2fad-9f8d-48ce-8361-baea1bb7e4b7",
    "name": "Coca Cola",
    "description": "fajne gazowane",
    "price": 9.0,
    "image": "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  }
]

app.post('/api/products', (req, res) => {
  const product = {
    _id: uuid.v4(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  }

  products.push(product);

  res.status(201).send(product);
});

app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;

  const product = products.filter(e => e._id === id);

  products = products.filter(e => e._id !== id);

  if(product != null){
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;

  const product = products.filter(e => e._id === id)[0];

  if(product != null){
    res.status(200).send(product);
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log("Server running - port " + port);
})
