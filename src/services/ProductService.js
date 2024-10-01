const Product = require("../models/ProductModel");

//tạo product
const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;

    try {
      //check tên sản phẩm
      const checkProduct = await Product.findOne({
        name: name,
      });
      //nếu name product đã tồn tại
      if (checkProduct !== null) {
        resolve({
          status: "OK",
          message: "The name of product is already",
        });
      }

      const createdProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (createdProduct) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
};
