import Joi from '@hapi/joi';

export default {
    signup: Joi.object().keys({
        phone: Joi.string()
                .trim()
                .required()
                .regex(/^0[7][0-9]{8}$/)
                .label('Correct phone number is required'),
        password: Joi.string()
                .trim()
                .required()
                .label('Password is required')
    })
}