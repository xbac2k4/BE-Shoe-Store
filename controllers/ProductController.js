const ProductService = require("../services/ProductService");

class ProductController {
    getAllProducts = async (req, res) => {
        try {
            const products = await new ProductService().getAllProducts();
            if (products) {
                res.json({
                    status: products.status,
                    message: products.message,
                    data: products.data,
                })
            }
            console.log(
                {
                    status: products.status,
                    message: products.message,
                    data: products.data,
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
    getProductsByPage = async (req, res) => {
        const { page, limit } = req.query;
        try {
            const products = await new ProductService().getProductsByPage(page, limit);
            if (products) {
                res.json({
                    status: products.status,
                    message: products.message,
                    data: products.data,
                })
            }
            console.log(
                {
                    status: products.status,
                    message: products.message,
                    data: products.data,
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }

    }
    getProductsByID = async (req, res) => {
        const { id } = req.params;
        try {
            const product = await new ProductService().getProductByID(id);
            if (product) {
                res.json({
                    status: product.status,
                    message: product.message,
                    data: product.data,
                })
            }
            console.log(
                {
                    status: product.status,
                    message: product.message,
                    data: product.data,
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
    postProductWithImages = async (req, res) => {
        const data = req.body;
        const { files } = req;
        let urlsImage = null;
        if (files) {
            urlsImage = files.map((file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`);
            files.map((file) => console.log(123, file.filename));
        }

        try {
            const products = await new ProductService().postProductWithImages(data, urlsImage);
            if (products) {
                res.json({
                    status: products.status,
                    message: products.message,
                    data: products.data,
                })
            }
            console.log(
                {
                    status: products.status,
                    message: products.message,
                    data: products.data,
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
    putProductWithImages = async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const { files } = req;
        let urlsImage = null;
        if (files) {
            urlsImage = files.map((file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`);
            files.map((file) => console.log(123, file.filename));
        }

        try {
            const products = await new ProductService().putProductWithImages(id, data, urlsImage);
            if (products) {
                res.json({
                    status: products.status,
                    message: products.message,
                    data: products.data,
                })
            }
            console.log(
                {
                    status: products.status,
                    message: products.message,
                    data: products.data,
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
    deleteProduct = async (req, res) => {
        const { id } = req.params;
        try {
            const products = await new ProductService().deleteProduct(id);
            if (products) {
                res.json({
                    status: products.status,
                    message: products.message,
                    data: products.data,
                })
            }
            console.log(
                {
                    status: products.status,
                    message: products.message,
                    data: products.data,
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
}

module.exports = ProductController;
