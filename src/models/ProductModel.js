const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: {type: String, require: true, unique: true},
        image: {type: String, require: true}, //Link ảnh
        type: {type: String, require: true}, //Catalog
        price: {type: Number, require: true},
        countInStock: {type: Number, require: true}, //số lượng sp
        description: {type: String, require: true},

    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
