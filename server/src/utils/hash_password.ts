const bcrypt = require('bcrypt');

const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    const result = await bcrypt.hash(password, salt)
    return result
}

const validatePassword = (password: string, dbPassword: string) => {
    const isValid = bcrypt.compareSync(password, dbPassword);
    return isValid
}

module.exports = {
    hashPassword,
    validatePassword
}