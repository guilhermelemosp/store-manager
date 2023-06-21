const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const chai = require('chai');

chai.use(sinonChai);
const { expect } = chai;
const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const {
    mockControllersNotFound,
    mockControllersAllProducts,
    newProduct,
} = require('./mocks/products.controllers.mock');

describe('TESTANDO O CONTROLLER PRODUTOS', function () {
    describe('TESTANDO O CONTROLLER PRODUTOS', function () {
        it('Se ao digitar um id existente a aplicaçao continua', async function () {
            const response = {};
            const request = { params: { id: 1 } };
    
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
    
            sinon.stub(productsService, 'getID').resolves({
                type: null, message: mockControllersAllProducts[0],
            });
    
            await productsController.getProductsByID(request, response);
    
            expect(response.status).to.have.been.calledWith(200);
            expect(response.json).to.have.been.calledWith({ id: 1, name: 'Martelo de Thor' });
        });
    
        it('Se ao digitar um id inexistente a aplicaçao quebra', async function () {
            const response = {};
            const request = { params: { id: 348957 } };
    
            sinon.stub(productsService, 'getID').resolves(mockControllersNotFound);
    
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
    
            await productsController.getProductsByID(request, response);
    
            expect(response.status).to.have.been.calledWith(404);
            expect(response.json).to.have.been.calledWith({ message: 'Product not found' });
        });
    });

    describe('TESTANDO O CONTROLLER PRODUTOS - área de listagem', function () {
        it('Se realiza corretamente a relação de todos os produtos', async function () {
            const response = {};
            const request = {};
            sinon.stub(productsService, 'getAllProducts')
                .resolves({ type: null, message: mockControllersAllProducts });

            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();

            await productsController.getAllProducts(request, response);

            expect(response.status).to.have.been.calledWith(200);
            expect(response.json).to.have.been.calledWith(mockControllersAllProducts);
        });
    });

    describe('TESTANDO O CONTROLLER PRODUTOS - ENDPOINT POST', function () {
        it('Se realiza a entrega de informações do novo produto + status 201', async function () {
            const response = {};
            const request = { body: { name: 'Travesseiro de Pedra' } };
            sinon.stub(productsService, 'postProduct')
                .resolves({ type: null, message: newProduct });

            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();

            await productsController.postProduct(request, response);

            expect(response.status).to.have.been.calledWith(201);
            expect(response.json).to.have.been.calledWith(newProduct);
        });
    });

    describe('TESTANDO O CONTROLLER PRODUTOS - ENDPOINT PUT', function () {
        it('Se atualiza um produto', async function () {
            const response = {};
            const request = { params: { id: 1 },
                body: {
                    name: 'Nintendo Switch',
                },
            };

            sinon.stub(productsService, 'updateProduct')
            .resolves({ type: null,
                message: {
                id: 1,
                name: 'Havaiana',
                },
            });
    
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            
            await productsController.updateProduct(request, response);
    
            expect(response.status).to.have.been.calledWith(200);
            expect(response.json).to.have.been.calledWith({
                id: 1,
                name: 'Havaiana',
            });
        });
    });

    afterEach(function () {
        sinon.restore();
    });
});
