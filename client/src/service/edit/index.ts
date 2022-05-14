import HTTPService from "../http"

export const editPasswordService = async (payload: any) => {
    const endPoint = '/api/edit/password'
    const result = await HTTPService('POST', endPoint, payload)
    return result
}