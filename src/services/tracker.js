const { Portfolio } = require('../db/models');

const addToPortfolio = async (code) => {
  const stock = await Portfolio.create({ code });
  return stock;
};

module.exports = {
  addToPortfolio,
};
