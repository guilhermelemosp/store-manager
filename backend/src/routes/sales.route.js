const { Router } = require('express');
const { salesController } = require('../controllers');
const { validateSales, invalidQuantitySales } = require('../middlewares/validateSalesError');

const router = Router();

router.get('/', salesController.getAllProducts);
router.post('/', validateSales, invalidQuantitySales, salesController.getNewSale);
router.get('/:id', salesController.getSalesByID);
router.delete('/:id', salesController.deleteSale);

module.exports = router;
