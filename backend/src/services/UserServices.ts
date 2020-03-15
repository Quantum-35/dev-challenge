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
}

export default UserServices;