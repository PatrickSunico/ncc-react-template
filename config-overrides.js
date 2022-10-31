const dev = {
    apiGateway: {
      URL: "http://localhost:3002/erg/"
    }
  };
  
  const prod = {
    apiGateway: {
        URL: "http://localhost:3002/erg/"
      }
  };
  
  // Default to dev if not set
  const config = process.env.NODE_ENV === 'development'
    ? dev
    : prod;

const {
    addDecoratorsLegacy,
    override,
    disableEsLint
} = require("customize-cra");

module.exports = {
    webpack: override(
        addDecoratorsLegacy(),
        disableEsLint()
    ),
    ...config
};