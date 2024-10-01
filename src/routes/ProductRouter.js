const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/create", productController.createProduct);
router.put("/update/:id", authMiddleware, productController.updateProduct);

module.exports = router;
