const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const allProducts = require('./productsModels.mock').allProducts;
const getAllProducts = require('../../../src/models/modelProducts').getAllProducts;

const { expect } = chai;

chai.use(chaiHttp);

describe('Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação', function () {
  it('Através do caminho /products, todos os produtos devem ser retornados', async function () {
    await sinon.stub(connection, 'execute').resolves([allProducts]);
    const modelAllProducts = await getAllProducts();
    expect(modelAllProducts).to.be.deep.equal(allProducts);
  });
});