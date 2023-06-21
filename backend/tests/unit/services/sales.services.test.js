const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const { salesModel, productsModel } = require('../../../src/models');
const {
    mockServiceAllSales,
    mockServiceSalesByEspecificId,
    mockSalesCreated,
    mockSaleCreated201,
} = require('./mocks/sales.services.mock');

describe('TESTANDO O SERVICE SALES', function () {
    describe('TESTANDO O SERVICE PRODUTOS - LISTAGEM', function () {
        it('todos os produtos são listados', async function () {
            sinon.stub(salesModel, 'getAll').resolves(mockServiceAllSales);
            const result = await salesService.getAllProducts();
            expect(result.type).to.be.equal(null);
            expect(result.message).to.be.deep.equal(mockServiceAllSales);
        });
    });

    describe('TESTANDO O SERVICE SALES - PRODUTO ESPECÍFICO', function () {
        it('Se nao existir', async function () {
            sinon.stub(salesModel, 'getID').resolves(undefined);
            const result = await salesService.getID(45333);
            expect(result.type).to.be.equal(404);
            expect(result.message).to.be.equal('Sale not found');
        });
    
        it('Se o id digitado corresponde ao produto correto', async function () {
            sinon.stub(salesModel, 'getID').resolves(mockServiceSalesByEspecificId);
            const result = await salesService.getID(2);
            expect(result.message).to.be.deep.equal(mockServiceSalesByEspecificId);
        });
    });

    describe('TESTANDO O SERVICE SALES - ENDPOINT POST', function () {
        it('Se cria uma venda', async function () {
            sinon.stub(productsModel, 'getID').resolves(1);
            sinon.stub(salesModel, 'createIdSale').resolves(3);
            sinon.stub(salesModel, 'postProductInSale').resolves(mockSalesCreated);

            const result = await salesService.getNewSale(mockSalesCreated);

            expect(result.type).to.equal(null);
            expect(result.message).to.deep.equal(mockSaleCreated201);
        });
    });
    
    // describe('TESTANDO O SERVICE SALES - ENDPOINT DELETE', function () {
    //     it('Se deleta uma venda com infos corretas', async function () {
    //         sinon.stub(salesModel, 'getID').resolves([
    //             {
    //               date: '2023-05-30T18:43:03.000Z',
    //               productId: 1,
    //               quantity: 5,
    //             },
    //             {
    //               date: '2023-05-30T18:43:03.000Z',
    //               productId: 2,
    //               quantity: 10,
    //             },
    //           ]);
    //         sinon.stub(salesModel, 'deleteSale').resolves();

    //         const result = await salesService.deleteSale(1);

    //         expect(result.type).to.equal(null);
    //         expect(result.message).to.deep.equal(null);
    //     });

    //     it('Não se consegue deletar uma venda sem informações', async function () {
    //         sinon.stub(salesModel, 'getID').resolves([]);
    //         sinon.stub(salesModel, 'deleteSale').resolves();
      
    //         const result = await salesService.deleteSale(undefined);
      
    //         expect(result.type).to.equal(404);
    //         expect(result.message).to.deep.equal('Sale not found');
    //       });
    // });
    afterEach(function () {
        sinon.restore();
    });
}); 