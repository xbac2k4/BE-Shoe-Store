const Products = require("../models/Product");
const Brands = require("../models/Brand");

class ProductService {
    getAllProducts = async () => {
        try {
            const result = await Products.find().populate('brandID')
            if (result) {

                return {
                    status: 200,
                    message: "Get data successfully",
                    data: result,
                }
            } else {
                return {
                    status: 400,
                    message: "Get data failed",
                    data: null
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    getProductsByPage = async (page, limit) => {
        try {
            const skip = (parseInt(page) - 1) * parseInt(limit);
            const products = await Products.find().skip(skip).limit(parseInt(limit)).populate('brandID');
            const total = await Products.countDocuments();
            const totalPages = Math.ceil(total / parseInt(limit));
            // console.log('data: ', data);
            return {
                status: 200,
                message: "Get data successfully",
                data: { products, totalPages }
            }
        } catch (error) {
            console.log(error);
        }
    }
    getProductByID = async (id) => {
        try {
            const product = await Products.findById(id).populate('brandID');
            if (product) {
                return {
                    status: 200,
                    message: "Get data successfully",
                    data: product,
                }
            } else {
                return {
                    status: 400,
                    message: "Get data failed",
                    data: null
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    postProductWithImages = async (data, urlsImage) => {
        try {
            const newProduct = new Products({
                ...data,
                images: urlsImage
            });
            const result = (await newProduct.save());
            if (result) {
                return {
                    status: 200,
                    message: "Create product successfully",
                    data: result,
                }
            } else {
                return {
                    status: 400,
                    message: "Create product failed",
                    data: null
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    putProductWithImages = async (id, data, urlsImage) => {
        try {
            const product = await Products.findById(id);
            let result = null;
            if (product) {
                product.name = data.name ?? product.name,
                product.price = data.price ?? product.price,
                product.description = data.description ?? product.description,
                product.images = urlsImage ?? product.images,
                product.brandID = data.brandID ?? product.brandID,
                result = await product.save();
            }
            if (result) {
                return {
                    status: 200,
                    message: "Update product successfully",
                    data: result,
                }
            } else {
                return {
                    status: 400,
                    message: "Update product failed",
                    data: null
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    deleteProduct = async (id) => {
        try {
            const result = await Products.findByIdAndDelete(id);
            if (result) {
                return {
                    status: 200,
                    message: "Delete product successfully",
                    data: result,
                }
            } else {
                return {
                    status: 400,
                    message: "Delete product failed",
                    data: null
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ProductService;