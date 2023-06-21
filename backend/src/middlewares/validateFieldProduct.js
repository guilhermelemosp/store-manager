const validateFieldProduct = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    
    if (name.length < 5) { 
        return res.status(422)
        .json({ message: '"name" length must be at least 5 characters long' }); 
    }
    console.log('passeifield');
    return next();
};

const invalidProductName = (req, res, next) => {
    const { id } = req.params;
    if (!id) return res.status(404).json({ message: 'Product not found' });
    console.log('passei');
    return next();
};

module.exports = {
    validateFieldProduct,
    invalidProductName,
};