const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const allProducts = require('../models/productsModels.mock').allProducts;
const controlAllProducts = require('../../../src/controllers/controlProducts').controlAllProducts;
const service = require('../../../src/services/serivceProducts');

const { expect } = chai;

chai.use(chaiHttp);

describe('Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação', function () {
  describe('Através do caminho /products, todos os produtos devem ser retornados', async function () {
    const req = {};
    const res = {};
    
    before(() => {
      res.status = sinon.stub().returns(res);
      // res.message = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'serviceAllProducts').resolves(allProducts);
    });

    after(() => {
      service.serviceAllProducts.restore();
    });

    it('testing res', function () {
      controlAllProducts(req, res).then((results) => {
        expect(results).to.be.deep.equal(allProducts);
        // expect(results).to.be.an('array');
      });
    });

    it('testing status', function () {      
      controlAllProducts(req, res).then(() => {
        // expect(results).to.have.been.calledWith(200);
        expect(res.status.calledWith(200)).to.be.true;
      });
    });
    
    it('testing status', async function () {      
      await controlAllProducts(req, res);
      expect(res.json.calledWith(allProducts)).to.be.true;
    });

  });
});
