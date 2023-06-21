const { productsModel } = require('../models');

const getAllProducts = async () => {
    const allProducts = await productsModel.getAll();
    return { type: null, message: allProducts };
};

const getID = async (productId) => {
    const idList = await productsModel.getID(productId);

    if (!idList) return { type: 404, message: 'Product not found' };
    
    return { type: null, message: idList };
};

const postProduct = async (name) => {
    const postNewProduct = await productsModel.postProduct(name);
    return { type: null, message: postNewProduct };
};
const updateProduct = async (id, name) => {
    await productsModel.updateProduct(id, name);
    const productUpdt = await productsModel.getID(id);
    if (!productUpdt) return { type: 404, message: 'Product not found' };
    console.log('passei no service');
    return { type: null, message: productUpdt };
};

const deleteProduct = async (id) => {
    const search = await productsModel.getID(id);
    if (!search) return { type: 404, message: 'Product not found' };
    
    await productsModel.deleteProduct(id);
    
    return { type: null, message: null };
};

module.exports = {
getAllProducts,
getID,
postProduct,
updateProduct,
deleteProduct,
};
