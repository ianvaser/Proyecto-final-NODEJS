import{db}from '../data/data.js';
import{collection,getDocs,addDoc,doc,getDoc,deleteDoc}from'firebase/firestore';


const productsCollection = collection(db,'products');


export async function getProductsById(id){
    const productDoc = await getDoc(doc(productsCollection,id));
    if(productDoc.exists()){
        return productDoc.data();
    }else{
        return null;
    }
};

export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({id: doc.id, ...doc.data()});
    });
    return products;
};

export async function saveProducts(product) {
    await addDoc(productsCollection,product); 
    };

export async function deleteProduct(id) {
    await deleteDoc(doc(productsCollection,id));
}