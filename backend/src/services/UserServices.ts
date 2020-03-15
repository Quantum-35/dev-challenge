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

    async findOne(phone: string) {
        const user = await User.findOne({
            where: { phone }
        });
        if(user) {
            const {phone, password} = user;
            return {
                found: true,
                user: {phone, password}
            }
        } else {
            return {
                found: true,
                user: null
            }
        }
    }

    async findOneUser(phone: string, cb: Function) {
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