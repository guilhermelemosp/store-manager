const validateSales = (req, res, next) => {
    const sale = req.body;
    const products = sale.every((product) => product.productId !== undefined);

    if (!products) {
        return res.status(400).json({ message: '"productId" is required', 
    }); 
}
    return next();
};

const invalidQuantitySales = (req, res, next) => {
    const sale = req.body;
    const products = sale.every((product) => product.quantity !== undefined);
    if (!products) {
        return res.status(400).json({ message: '"quantity" is required', 
        }); 
    }
        
const quantitySalesValue = sale.every((q) => q.quantity > 0);
    if (!quantitySalesValue) {
        return res.status(422).json({ 
        message: '"quantity" must be greater than or equal to 1',
        }); 
    } 
    return next();
};

module.exports = {
    validateSales,
    invalidQuantitySales,
  };
