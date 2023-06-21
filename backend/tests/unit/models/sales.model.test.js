const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { 
    mockAllSales, 
    mockSalesId, 
    mockSalesCreated,
} = require('./mocks/sales.model.mock');
const { salesModel } = require('../../../src/models');

describe('TESTANDO O MODEL SALES', function () {
    it('Se todos os produtos são listados', async function () {
        sinon.stub(connection, 'execute').resolves([mockAllSales]);
        const result = await salesModel.getAll();
        expect(result).to.be.deep.equal(mockAllSales);
    });

    it('Se o id digitado corresponde a venda certa', async function () {
        sinon.stub(connection, 'execute').resolves([[mockSalesId]]);
        const result = await salesModel.getID(1);
        expect(result).to.be.deep.equal([mockSalesId]);
    });    

    describe('MODEL SALES - POST MODEL', function () {
        it('Cadastrando uma venda', async function () {
            sinon.stub(connection, 'execute').resolves([34]);
      
            const result = await salesModel.postProductInSale(34, mockSalesCreated);
      
            expect(result).to.equal(34);
          });

        it('Se possui ID', async function () {
          sinon.stub(connection, 'execute').resolves([{ insertId: 34 }]);
    
          const result = await salesModel.createIdSale();
    
          expect(result).to.equal(34);
        });
      });

    afterEach(function () {
        sinon.restore();
    });
}); 