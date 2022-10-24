const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const allProducts = require('../models/productsModels.mock').allProducts;
const serviceAllProducts = require('../../../src/services/serivceProducts').serviceAllProducts;
const models = require('../../../src/models/modelProducts');

const { expect } = chai;

chai.use(chaiHttp);

describe('Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação', function () {
  it('Através do caminho /products, todos os produtos devem ser retornados', async function () {
    await sinon.stub(models, 'getAllProducts').resolves([allProducts]);
    const sallProducts = await serviceAllProducts();
    expect(sallProducts).to.be.deep.equal(allProducts);
  });
});