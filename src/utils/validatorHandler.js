const errorHandler = require('../utils/errorHandler');
const validatorHandler = (req, res ,result) => {
    errorHandler(result,req, res, result);     
};
module.exports = validatorHandler;