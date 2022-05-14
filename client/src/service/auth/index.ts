import HTTPService from '../http'

export const loginService = async (payload: any) => {
    const endPoint = '/api/auth/login'
    const result = await HTTPService('POST', endPoint, payload)
    return result
}

export const registerService = async (payload: any) => {
    const endPoint = '/api/auth/new'
    const result = await HTTPService('POST', endPoint, payload)
    return result
}


export const getDataByToken = async () => {
    const endPoint = '/api/auth/user'
    const result = await HTTPService('POST', endPoint, {})
    return result
}
