import express from 'express';
const router = express.Router();

import { getAllProducts, getProductById, createProduct ,deleteProduct} from '../controllers/products.controller.js';
import { authentication } from '../middlewares/authentication.js';


router.get('/products', getAllProducts);
router.get('/products/:id',authentication, getProductById);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);
 
export default router;