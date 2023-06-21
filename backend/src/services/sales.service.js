const { salesModel, productsModel } = require('../models');

const getAllProducts = async () => {
    const allProducts = await salesModel.getAll();
    return { type: null, message: allProducts };
};

const getID = async (id) => {
    const idList = await salesModel.getID(id);

    if (!idList || idList.length === 0) return { type: 404, message: 'Sale not found' };
    
    return { type: null, message: idList };
};

const getNewSale = async (s) => {
    const getIdProduct = s.map((product) => productsModel.getID(product.productId));
    const getIdResult = await Promise.all(getIdProduct);
    const undefinedProduct = getIdResult.every((id) => id !== undefined);

    if (!undefinedProduct) return { type: 'product not found', message: 'Product not found' };

    const created = await salesModel.createIdSale();

    const sales = s.map((sale) => salesModel.postProductInSale(created, sale));
    const result = await Promise.all(sales);
    const resultMessage = { type: null, message: { id: created, itemsSold: result[1] } };

    return resultMessage;
};

const deleteSale = async (id) => {
    const idList = await salesModel.getID(id);
    
    if (idList.length === 0) return { type: 404, message: 'Sale not found' };
    
    await salesModel.deleteSale(id);
    
    return { type: null, message: null };
};

module.exports = {
getAllProducts,
getID,
getNewSale,
deleteSale,
};