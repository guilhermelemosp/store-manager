const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const {
    validateSales,
    invalidQuantitySales,
  } = require('../../../src/middlewares/validateSalesError');

const { expect } = chai;

chai.use(sinonChai);

describe('TESTANDO O MIDDLEWARE - validateSalesError', function () {
    describe('Dados inválidos enviados', function () {
      it('Deve retornar: "productId" is required além do status 400', async function () {
       const res = {};
       const req = { body: [
        {
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ] };
       const next = sinon.stub().returns();
  
       res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
  
       validateSales(req, res, next);
  
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"productId" is required',
      });
      });
  
      it(`Deve retornar mensagem 'Quantity must be greater than or equal to 1'
       além do status 422`, async function () {
        const res = {};
        const req = { body: [
          {
            productId: 1,
            quantity: 0,
          },
          {
            productId: 2,
            quantity: -3,
          },
        ] };
        const next = sinon.stub().returns();
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        invalidQuantitySales(req, res, next);
  
       expect(res.status).to.have.been.calledWith(422);
       expect(res.json).to.have.been.calledWith({
         message: '"quantity" must be greater than or equal to 1',
       });
       });
  
       it(`Deve retornar mensagem '"quantity" is required'
       além do status 400`, async function () {
        const res = {};
        const req = { body: [
          {
            productId: 2,
            quantity: 3,
          },
          {
            productId: 2,
          },
        ] };
        const next = sinon.stub().returns();
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        invalidQuantitySales(req, res, next);
  
       expect(res.status).to.have.been.calledWith(400);
       expect(res.json).to.have.been.calledWith({
         message: '"quantity" is required',
       });
       });
    });
  
    afterEach(function () {
      sinon.restore();
    });
  });