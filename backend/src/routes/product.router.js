const { Router } = require('express');
const { productsController } = require('../controllers');
const { 
    validateFieldProduct,
    invalidProductName,
} = require('../middlewares/validateFieldProduct');

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsByID);
router.post('/', validateFieldProduct, productsController.postProduct);
router.put(
    '/:id',
    validateFieldProduct,
    invalidProductName,
    productsController.updateProduct,
);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
