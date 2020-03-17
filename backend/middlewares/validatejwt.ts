import { validateJwt } from '../utils/validate';

const jwtValidation = async(req, res, next) => {
    const token  = req.headers.authorization;
    if(!token) {
        return res.status(401).send({
                success: false,
                message: 'Missing token'
            });
    }
    try {
        const decoded: any = await validateJwt(token);
        const { phone } = decoded;
        req.user = {
            phone: phone
        }
        return next();
    } catch (error) {
        return res.status(401).send({
                success: false,
                message: 'There was an error decoding token'
        });
    }
}

export default jwtValidation;