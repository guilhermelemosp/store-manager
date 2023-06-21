const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const {
    mockServiceAllProducts,
    mockServiceProductByEspecificId,
    newProduct,
} = require('./mocks/products.services.mock');

describe('TESTANDO O SERVICE PRODUTOS', function () {
    describe('TESTANDO O SERVICE PRODUTOS - LISTAGEM', function () {
        it('todos os produtos são listados', async function () {
            sinon.stub(productsModel, 'getAll').resolves(mockServiceAllProducts);
            const result = await productsService.getAllProducts();
            expect(result.type).to.be.equal(null);
            expect(result.message).to.be.deep.equal(mockServiceAllProducts);
        });
    });

    describe('TESTANDO O SERVICE PRODUTOS - PRODUTO ESPECÍFICO', function () {
        it('Se nao existir', async function () {
            sinon.stub(productsModel, 'getID').resolves(undefined);
            const result = await productsService.getID(45333);
            expect(result.type).to.be.equal(404);
            expect(result.message).to.be.equal('Product not found');
        });
    
        it('Se o id digitado corresponde ao produto correto', async function () {
            sinon.stub(productsModel, 'getID').resolves(mockServiceProductByEspecificId);
            const result = await productsService.getID(3);
            expect(result.message).to.be.deep.equal(mockServiceProductByEspecificId);
        });
    });

    describe('TESTANDO O SERVICE PRODUTOS - ENDPOINT POST', function () {
        it('Se a validação do produto é feita de forma correta', async function () {
            sinon.stub(productsModel, 'postProduct').resolves(newProduct);
            const result = await productsService.postProduct({ name: 'Travesseiro de Pedra' });
            expect(result.type).to.be.equal(null);
            expect(result.message).to.be.equal(newProduct);
        });
    });

    describe('TESTANDO O SERVICE PRODUTOS - ENDPOINT DELETE', function () {
        it('A exclusão do produto é feita de forma correta dada as informações', async function () {
            sinon.stub(productsModel, 'getID').resolves({ id: 2, name: 'Martelo de Thor' });
            sinon.stub(productsModel, 'deleteProduct').resolves();
            const result = await productsService.deleteProduct(1);
            expect(result.type).to.equal(null);
            expect(result.message).to.deep.equal(null);
        });

        it('Sem infos enviadas', async function () {
            sinon.stub(productsModel, 'getID').resolves(undefined);
            sinon.stub(productsModel, 'deleteProduct').resolves();
            const result = await productsService.deleteProduct(undefined);
            expect(result.type).to.equal(404);
            expect(result.message).to.be.deep.equal('Product not found');
        });
    });

    afterEach(function () {
        sinon.restore();
    });
}); 