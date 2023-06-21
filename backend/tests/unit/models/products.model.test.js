const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { 
    mockAllProducts, 
    newProduct, 
    updateProduct, 
    input, 
} = require('./mocks/products.model.mock');
const { productsModel } = require('../../../src/models');

describe('TESTANDO O MODEL PRODUTOS', function () {
    describe('MODEL PRODUTOS/GET', function () {
        it('Se todos os produtos são listados', async function () {
            sinon.stub(connection, 'execute').resolves([mockAllProducts]);
            const result = await productsModel.getAll();
            expect(result).to.be.deep.equal(mockAllProducts);
        });

        it('Se o id digitado corresponde a pessoa certa', async function () {
            sinon.stub(connection, 'execute').resolves([[mockAllProducts[0]]]);
            const result = await productsModel.getID(1);
            expect(result).to.be.deep.equal(mockAllProducts[0]);
        });
    });

    describe('MODEL PRODUTOS/POST', function () {
        it('Se um produto é cadastrado corretamente', async function () {
            sinon.stub(connection, 'execute').resolves([[newProduct]]);
            const result = await productsModel.postProduct({ name: 'Travesseiro de Pedra' });
            expect(result).to.be.deep.equal(newProduct);
        });
    });

    describe('MODEL PRODUTOS/PUT', function () {
        it('Se um produto é atualizado corretamente', async function () {
            sinon.stub(connection, 'execute').resolves([updateProduct]);
            const result = await productsModel.updateProduct(input);
            expect(result).to.be.deep.equal(updateProduct);
        });
    });

    describe('MODEL PRODUTOS/DELETE', function () {
        it('Se um produto é deletado corretamente', async function () {
            sinon.stub(connection, 'execute').resolves([1]);
            const result = await productsModel.deleteProduct(1);
            expect(result).to.equal(1);
        });
    });

    afterEach(function () {
        sinon.restore();
    });
});