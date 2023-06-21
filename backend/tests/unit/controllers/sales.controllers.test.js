const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const chai = require('chai');

chai.use(sinonChai);
const { expect } = chai;
const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const {
    mockControllersNotFound,
    mockControllersAllSales,
    mockFoundSalesId,
    mockSalesCreated,
    mockSaleCreated201,
} = require('./mocks/sales.controllers.mock');

describe('TESTANDO O CONTROLLER SALES', function () {
    describe('TESTANDO O CONTROLLER SALES', function () {
        it('Se ao digitar um id existente a aplicaçao continua', async function () {
            const response = {};
            const request = { params: { id: 1 } };
    
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
    
            sinon.stub(salesService, 'getID').resolves({
                type: null, message: mockFoundSalesId[2],
            });
    
            await salesController.getSalesByID(request, response);
    
            expect(response.status).to.have.been.calledWith(200);
            expect(response.json).to.have.been.calledWith({ 
                date: '2023-05-27T12:13:53.000Z',
                productId: 3,
                quantity: 15,
            });
        });
    
        it('Se ao digitar um id inexistente a aplicaçao quebra', async function () {
            const response = {};
            const request = { params: { id: 348957 } };
    
            sinon.stub(salesService, 'getID').resolves(mockControllersNotFound);
    
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
    
            await salesController.getSalesByID(request, response);
    
            expect(response.status).to.have.been.calledWith(404);
            expect(response.json).to.have.been.calledWith({ message: 'Sale not found' });
        });
    });

    describe('TESTANDO O CONTROLLER SALLES - área de listagem', function () {
        it('Se realiza corretamente a relação de todos os produtos', async function () {
            const response = {};
            const request = {};
            sinon.stub(salesService, 'getAllProducts')
                .resolves({ type: null, message: mockControllersAllSales });

            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();

            await salesController.getAllProducts(request, response);

            expect(response.status).to.have.been.calledWith(200);
            expect(response.json).to.have.been.calledWith(mockControllersAllSales);
        });
    });

    describe('TESTANDO O CONTROLLER SALES - ENDPOINT POST', function () {
        it('Se retorna coretamente quando um id é válido', async function () {
            const response = { status: sinon.stub().returnsThis(), json: sinon.stub().returns() };
            const request = { body: mockSalesCreated };
            
            sinon.stub(salesService, 'getNewSale')
                .resolves({ type: null, message: mockSaleCreated201 });

            await salesController.getNewSale(request, response);

            expect(response.status).to.have.been.calledWith(201);
            expect(response.json).to.have.been.calledWith(mockSaleCreated201);
        });
    });

    // describe('TESTANDO O CONTROLLER SALES - ENDPOINT DELETE', function () {
    //     it('Apaga uma venda', async function () {
    //       const response = {};
    //       const request = { params: { id: 1 } };
    //       sinon.stub(salesService, 'deleteSale')
    //       .resolves({ type: null, message: null });
    
    //       response.status = sinon.stub().returns(response);
    //       response.json = sinon.stub().returns();
    
    //       await salesController.deleteSale(request, response);
    
    //       expect(response.status).to.have.been.calledWith(204);
    //       expect(response.json).to.have.been.calledWith();
    //     });
    // });

    afterEach(function () {
        sinon.restore();
    });
});
