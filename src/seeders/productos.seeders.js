import {db} from '../data/data.js';
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

const products = [
    { 
        price: 10.99,
        description: 'Descripción del producto 1',
        stock: 100,
        name: 'Producto 1'
    },  
    {
        price: 19.99,
        description: 'Descripción del producto 2',
        stock: 50,
        name: 'Producto 2'
    },  
    {
        
        price: 5.99,
        description: 'Descripción del producto 3',
        stock: 200,
        name: 'Producto 3'
    }
];


const createProducts_Seed = async () => {
    for (const product of products) {
        await addDoc(productsCollection, product);
        console.log("Producto agregado:", product.name);
    }
};

createProducts_Seed();