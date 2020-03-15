import bcrypt from 'bcrypt';

const verifyPassword = (password, enteredPass) => {
    const isCorrect = bcrypt.compareSync(enteredPass, password);
    return isCorrect;
}

export default verifyPassword;