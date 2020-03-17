import Joi from '@hapi/joi';
import jwt from 'jsonwebtoken';

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

export const validateJwt = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, { algorithm: 'HS256'}, (err, decoded) => {
            if(err) {return reject(err)}
            return resolve(decoded);
        })
    })
}