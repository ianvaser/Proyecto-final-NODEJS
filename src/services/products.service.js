import * as productService from '../models/products.model.js';


export const getAllProducts = () => {
    return productService.getAllProducts();
};

export const getProductById = async(id) => {
    return productService.getProductsById(id);
};

export const createProduct = async (productData) => {
    const {name, price, description} = productData;
    return productService.saveProducts(name, price, description);
};

export const deleteProduct = async (id) => {
    return productService.deleteProduct(id);
}