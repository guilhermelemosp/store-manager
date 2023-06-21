const Joi = require('joi');

const productsSchema = Joi.object({
  productId: Joi.number().integer().positive().required(),
  quantity: Joi.number().min(1).integer().positive()
.required(),
});

const salesSchema = Joi.array().items(productsSchema);

module.exports = salesSchema;