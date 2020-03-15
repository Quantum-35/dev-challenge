import bcrypt from 'bcrypt';

const verifyPassword = async (password, enteredPass) => {
    const isCorrect = await bcrypt.compareSync(password, enteredPass);
    return isCorrect;
}

export default verifyPassword;