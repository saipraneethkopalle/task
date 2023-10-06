const express = require("express");
const router = express.Router();
const authController = require('../controller/authController');
router.get('/fetchAllUsers',authController.fetchUsers);
router.post('/addProducts',authController.addProducts);
router.get('/getProductsList',authController.getProducts);
router.put('/updateProduct',authController.updateProduct);
router.delete('/deleteProduct/:pid',authController.deleteProduct);
module.exports = router;
