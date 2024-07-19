const Products = require("../models/Product")
const Brands = require("../models/Brand")
const HttpResponse = require("../utils/HttpResponse")

class ProductService {
    getAllProducts = async () => {
        try {
            const result = await Products.find().populate('brandID')
            if (result) {
                return HttpResponse.success(result, "Get all products")
            } else {
                return HttpResponse.fail("Product not found")
            }
        } catch (error) {
            return HttpResponse.error(error)
        }
    }

    getProductsByPage = async (page, limit) => {
        try {
            const skip = (parseInt(page) - 1) * parseInt(limit)
            const products = await Products.find().skip(skip).limit(parseInt(limit)).populate('brandID')
            const total = await Products.countDocuments()
            const totalPages = Math.ceil(total / parseInt(limit))
            // console.log('data: ', data)
            return HttpResponse.success({products, totalPages}, `Get products by page: ${parseInt(page)}`)
        } catch (error) {
            return HttpResponse.error(error)
        }
    }

    getProductByID = async (id) => {
        try {
            const result = await Products.findById(id).populate('brandID')
            if (result) {
                return HttpResponse.success(result, `Get product by id: ${id}`)
            } else {
                return HttpResponse.fail("Product not found")
            }
        } catch (error) {
            return HttpResponse.error(error)
        }
    }

    postProductWithImages = async (data, urlsImage) => {
        try {
            const newProduct = new Products({
                ...data,
                images: urlsImage
            })
            const result = await newProduct.save()
            if (result) {
                return HttpResponse.success(result, 'Create product successful')
            } else {
                return HttpResponse.fail('Create product Failed')
            }
        } catch (error) {
            return HttpResponse.error(error)
        }
    }

    putProductWithImages = async (id, data, urlsImage) => {
        try {
            const product = await Products.findById(id)
            let result = null
            if (product) {
                product.name = data.name ?? product.name,
                product.price = data.price ?? product.price,
                product.discount = data.discount ?? product.discount,
                product.description = data.description ?? product.description,
                product.images = urlsImage ?? product.images,
                product.brandID = data.brandID ?? product.brandID,
                result = await product.save()
            }
            if (result) {
                return HttpResponse.success(result, 'Update product successful')
            } else {
                return HttpResponse.fail('Update product Failed')
            }
        } catch (error) {
            return HttpResponse.error(error)
        }
    }

    deleteProduct = async (id) => {
        try {
            const result = await Products.findByIdAndDelete(id)
            if (result) {
                return HttpResponse.success(result, 'Delete product successful')
            } else {
                return HttpResponse.fail('Delete product Failed')
            }
        } catch (error) {
            return HttpResponse.error(error)
        }
    }
}

module.exports = ProductService