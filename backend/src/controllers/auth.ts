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
}