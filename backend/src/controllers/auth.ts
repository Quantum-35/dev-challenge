import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { UserServices } from '../services';


export class AuthController {
    static userOps = new UserServices();

    async register(req, res) {
        const { phone, password } = req.body;
        const encPassword = bcrypt.hashSync(password, 8);

        try {
            await AuthController.userOps.save(phone, encPassword);

            return res.status(201).send({
                success: true,
                message: 'user created'
            });
        } catch (error) {
            return res.status(201).send({
                success: true,
                message: 'Error creating user',
                error: error.message
            });  
        }
    }

    async login(req, res) {
        const { phone, password } = req.body;
        try {
            const user = await AuthController.userOps.findOne(phone);
            if(user.found) {
                const validateUser = bcrypt.compareSync(password, user.user.password);
                if(!validateUser) {
                    return res.status(422).send({
                        success: false,
                        message: 'Invalid phone or password'
                    });
                }
                const expiresIn = '5h';
                const token = jwt.sign({phone}, process.env.SECRET_KEY, { expiresIn });
                return res.status(200).send({
                    success: true,
                    message: 'Logged in successfully',
                    token,
                    expiresIn
                });
            } else {
                return res.status(422).send({
                    success: false,
                    message: 'Invalid phone or password'
                });
            }
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: 'Error logging in',
                error
            });
        }
    }
}