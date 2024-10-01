const ProductService = require("../services/ProductService");

//tạo sản phẩm
const createProduct = async (req, res) => {
  try {
    //test input data
    const { name, image, type, price, countInStock, rating, description } =
      req.body;
    //console.log("req.body", req.body);

    if (!name || !image || !type || !price || !countInStock || !rating) {
      //check have
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await ProductService.createProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

//update sản phẩm
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The productId is required",
      });
    }

    const response = await ProductService.updateProduct(productId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
module.exports = {
  createProduct,
  updateProduct,
};
