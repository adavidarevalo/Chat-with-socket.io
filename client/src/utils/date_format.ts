import moment from "moment";

const dateFormat = (date: string) => {
    const dateMoment = moment(date)

    return dateMoment.format('HH:mm a | MMMM Do')
}

export const lastConnection = (date: string) => {
    const dateMoment = moment(date)

    return dateMoment.startOf('hour').fromNow()
}

export default dateFormat