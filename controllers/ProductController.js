const ProductService = require("../services/ProductService");
const HttpResponse = require("../utils/HttpResponse");

class ProductController {
    getAllProducts = async (req, res) => {
        try {
            const products = await new ProductService().getAllProducts();
            if (products) {
                console.log(HttpResponse.result(products));
                return res.json(HttpResponse.result(products));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
        }
    }

    getProductsByPage = async (req, res) => {
        const { page, limit } = req.query;
        try {
            const products = await new ProductService().getProductsByPage(page, limit);
            if (products) {
                console.log(HttpResponse.result(products));
                return res.json(HttpResponse.result(products));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
        }
    }

    getProductsByID = async (req, res) => {
        const { id } = req.params;
        try {
            const product = await new ProductService().getProductByID(id);
            if (product) {
                console.log(HttpResponse.result(product));
                return res.json(HttpResponse.result(product));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
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
                console.log(HttpResponse.result(products));
                return res.json(HttpResponse.result(products));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
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
                console.log(HttpResponse.result(products));
                return res.json(HttpResponse.result(products));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
        }
    }
    
    deleteProduct = async (req, res) => {
        const { id } = req.params;
        try {
            const products = await new ProductService().deleteProduct(id);
            if (products) {
                console.log(HttpResponse.result(products));
                return res.json(HttpResponse.result(products));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
        }
    }
}

module.exports = ProductController;
