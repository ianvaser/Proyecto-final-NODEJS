import * as productService from '../models/products.model.js';


export const getAllProducts = () => {
    return productService.getAllProducts();
};

export const getProductById = async(id) => {
    return productService.getProductsById(id);
};

export const createProduct = async (productData) => {
    const {description,name,price,stock} = productData;
    return productService.saveProducts({description,name,price, stock});
};

export const deleteProduct = async(id) => {
    return productService.deleteProduct(id);
}