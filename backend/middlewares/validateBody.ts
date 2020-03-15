import Joi from '@hapi/joi';
import validations from '../utils/validate';
import _ from 'lodash';

import db from '../src/sequelize/models';

const { User } = db;

export const validateRequest = validate => (req, res, next) => {
    const data = req.body;
    if(_.has(validations, validate)) {
        const validateSchema = _.get(validations, validate);
        const err = Joi.validate(data, validateSchema, { abortEarly: false });

        if (!err.error) {
            req.body = data;
            next();
        } else {
            const allErrors = [];
            err.error.details.forEach((errors) => {
                const findError = allErrors.filter(error => error === errors.context.label);
                if (findError.length === 0) {
                  allErrors.push(errors.context.label);
                }
              });
            return res.status(400).send({
                message: allErrors,
            });
        }
    }
}

export const validatePhone = (req, res, next) => {
    const { phone } = req.body;
    if(phone) {
        User.findAll({
            where: {
                phone
            }
        }).then(data => {
            if(data.length > 0) {
                return res.status(400).send({
                    success: false,
                    message: "User with that phone already exist"
                })
            }
            next();
        })
    }
}