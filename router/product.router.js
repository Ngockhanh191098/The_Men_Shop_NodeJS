const express = require('express');
const { isAdmin} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const { addNewProduct, deleteProduct, getAllProduct, updateProduct, getProductPagination } = require('../controller/product.controller');
const productRouter = express.Router();

productRouter.post('/', verifyToken, isAdmin, addNewProduct);
productRouter.get('/', getProductPagination)
productRouter.delete('/:id', verifyToken, isAdmin, deleteProduct);
productRouter.put('/:id', verifyToken, isAdmin, updateProduct );

module.exports = productRouter;