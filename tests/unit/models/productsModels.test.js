const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const allProducts = require('./productsModels.mock').allProducts;
const insertProductsModels = require('./insertProductsModels.mock').inserted;
const getAllProducts = require('../../../src/models/modelProducts').getAllProducts;
const insertProducts = require('../../../src/models/modelProducts').insertProducts;

const { expect } = chai;

chai.use(chaiHttp);

describe('Desenvolva testes das camadas da sua aplicação', function () {
  it('Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação', async function () {
    await sinon.stub(connection, 'execute').resolves([allProducts]);
    const modelAllProducts = await getAllProducts();
    expect(modelAllProducts).to.be.deep.equal(allProducts);
  });
  it('Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação', async function () {
    
    await sinon.stub(connection, 'execute').resolves(insertProductsModels);
    const modelInsertProducts = await insertProducts(body);
    expect(modelInsertProducts).to.be.deep.equal(allProducts);
  });
});