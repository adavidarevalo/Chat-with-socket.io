import { IImage } from '../../types/update_image'
import defaultUser from './../../../public/assets/default-user.png'

export const getAvatar = (image: IImage) => {
    if (typeof image === 'string') return image

    if (!!image) return URL.createObjectURL(image?.body)

    return defaultUser
}