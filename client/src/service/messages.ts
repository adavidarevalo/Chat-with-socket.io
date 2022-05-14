import HTTPService from "./http"

export const getMessages = async (id: string) => {
    const endPoint = `/api/message/${id}`

    const result = await HTTPService('GET', endPoint, false)

    return result
}
