const { salesService } = require('../services');

const getAllProducts = async (_req, res) => {
    const { message } = await salesService.getAllProducts();

    res.status(200).json(message);
};
const getSalesByID = async (req, res) => {
        const { id } = req.params;
        const { type, message } = await salesService.getID(id);

        if (type) return res.status(404).json({ message });

        res.status(200).json(message);
};

const getNewSale = async (req, res) => {
    const sale = req.body;
    const { type, message } = await salesService.getNewSale(sale);

    if (type) return res.status(404).json({ message });

    return res.status(201).json(message);
};

const deleteSale = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await salesService.deleteSale(id);

    if (type) {
        return res.status(404).json({ message });
    }
    return res.status(204).json();
};

module.exports = {
    getAllProducts,
    getSalesByID,
    getNewSale,
    deleteSale,
};