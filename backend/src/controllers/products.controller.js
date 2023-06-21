const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
    const { message } = await productsService.getAllProducts();

    res.status(200).json(message);
};
const getProductsByID = async (req, res) => {
        const { id } = req.params;
        const { type, message } = await productsService.getID(id);

        if (type) return res.status(404).json({ message });

        res.status(200).json(message);
};

const postProduct = async (req, res) => {
    const { name } = req.body;
    const { message } = await productsService.postProduct(name);

    return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(id, name);
    const { type, message } = await productsService.updateProduct(id, name);
    
    if (type) {
        return res.status(404).json({ message });
    }
    return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await productsService.deleteProduct(id);
    
    if (type) {
        return res.status(404).json({ message });
    }
    return res.status(204).json();
};

module.exports = {
    getAllProducts,
    getProductsByID,
    postProduct,
    updateProduct,
    deleteProduct,
};