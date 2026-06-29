import * as productsService from '../services/products.service.js';


export const getAllProducts = async (req,res) => {
    res.status(200).json(await productsService.getAllProducts());
};

export const getProductById = async (req,res) => {
    const id  = req.params.id;
    const product = await productsService.getProductById(id);
    if(product){
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado en la base de datos' });
    }
};

export const createProduct = async (req,res) => {
    const { name, price, description, stock } = req.body;
    const newProduct = await productsService.createProduct({ name, price, description, stock });
    res.status(201).json(newProduct);
};


export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        await productsService.deleteProduct(id);

        return res.status(200).json({
            message: "Producto eliminado correctamente"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar el producto",
            error: error.message
        });
    }
};
