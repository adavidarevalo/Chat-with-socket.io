import { getTokenLocalStorage } from "../utils/localStorage"

const backendURL = 'http://localhost:4000'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

const HTTPService = async (method: Method, endPoint: string, payload: any) => {
    const token = getTokenLocalStorage()



    try {
        let response = await fetch(`${backendURL}${endPoint}`, {
            method: method,
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: payload ? JSON.stringify(payload) : null
        })
        return await response.json();
    } catch (error) {
        return {
            ok: false,
            msg: "Error in the server."
        }
    }
}

export default HTTPService