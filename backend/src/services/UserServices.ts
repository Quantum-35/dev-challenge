import db from '../sequelize/models';

const { User } = db;

class UserServices {
    // declare constructor members.
    phone: string;
    id?: number;
    password: string;

    async save(phone: string, password: string)  {
        const newUser = await User.create({
            phone: phone,
            password: password
        });
        if(newUser) {
            return {
                saved: true
            }
        } else {
            return {
                saved: false
            }
        }
    }

    async findOneUser(phone: string, cb) {
        const user = await User.findOne({
            where: { phone }
        });
        if(user) {
            const {phone, password} = user;
            return cb(null, {
                found: true,
                user: {phone, password}
            })
        } else {
            return cb(null, null)
        }
    }
}

export default UserServices;