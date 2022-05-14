export { };
const jwt = require('jsonwebtoken');

const createJWT = (payload: string) => {
    return jwt.sign({ id: payload }, process.env.JWT_KEY);
}

const getDataJWT = (token: string) => {
    const getToken = token.replace('Bearer ', '')
    try {
        const { id } = jwt.verify(getToken, process.env.JWT_KEY)

        return {
            ok: true,
            id
        }
    } catch (error) {
        return {
            ok: false,
        }
    }
}

module.exports = { createJWT, getDataJWT }