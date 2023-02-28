
const _ = require('lodash');
const Joi = require('joi');
const validatorHandler = require('../utils/validatorHandler');
const checkValidation = (req, res, aadhaarID, err) => {
    const schema = Joi.object()
        .keys({
            aadhaarID: Joi.string()
                .min(12)
                .max(16)
                .required()
            // .regex(/^\d+$/)
            //.pattern(/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/)

        })
    const data = {
        aadhaarID: aadhaarID
    };
    const error = schema.validate(data);
    if (error) {
        validatorHandler(req, res, error);
    }
}
module.exports = {
    checkValidation
}