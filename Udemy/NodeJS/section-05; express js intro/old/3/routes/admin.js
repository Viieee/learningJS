const express = require('express');

// router
const router = express.Router();

// admin/add-product => GET request
router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// admin/add-product => POST request
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

// exporting
module.exports = router;
