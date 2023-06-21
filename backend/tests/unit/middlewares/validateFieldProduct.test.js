const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { 
    validateFieldProduct,
    // invalidProductName,
} = require('../../../src/middlewares/validateFieldProduct');
const { productsService } = require('../../../src/services'); 
const { productsController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

describe('TESTANDO O MIDDLEWARE validateFieldProduct', function () {
    it('Deve retornar um erro caso "name" nao seja adicionado', async function () {
        const request = { body: { undefined } };
        const response = { status: sinon.stub().returnsThis(), json: sinon.stub() };
        const next = sinon.stub().returns();

        validateFieldProduct(request, response, next);
    
        expect(response.status).to.have.been.calledWith(400);
        expect(response.json).to.have.been.calledWith({ message: '"name" is required' });
    });

    it('Deve retornar um erro caso "name" seja menor que 5 letras', async function () {
        const request = { body: { name: 'aa' } };
        const response = { status: sinon.stub().returnsThis(), json: sinon.stub() };
        const next = sinon.stub().returns();

        validateFieldProduct(request, response, next);    
    
        expect(response.status).to.have.been.calledWith(422);
        expect(response.json).to.have.been.calledWith({ 
            message: '"name" length must be at least 5 characters long', 
        });
    });
    
        // it('Retornar mensagem erro, status 404 se nao existir id ao atualizar', async function () {
        //  const res = {};
        //  const req = { params: { id: 125674785786534 } };
        //  const next = sinon.stub().returns();
   
        //  res.status = sinon.stub().returns(res);
        //  res.json = sinon.stub().returns();
   
        //  invalidProductName(req, res, next);
   
        // expect(res.status).to.have.been.calledWith(404);
        // expect(res.json).to.have.been.calledWith({
        //   message: 'Product not found',
        // });

        it('Se ao digitar um id inexistente a aplicaçao quebra', async function () {
            const response = {};
            const request = { params: { id: 348957 }, 
            body: { name: 'Patrick Estrela' } };
            // const next = sinon.stub().returns();
            
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
           
            sinon.stub(productsService, 'updateProduct')
            .resolves({ type: 404, message: 'Product not found' });
            
            await productsController.updateProduct(request, response);
    
            expect(response.status).to.have.been.calledWith(404);
            expect(response.json).to.have.been.calledWith({ message: 'Product not found' });
        });
    
    afterEach(function () {
        sinon.restore();
    });
});
