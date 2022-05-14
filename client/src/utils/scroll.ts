export const scrollToBottom = (id: string) => {
    const uploadScreen = document.querySelector(`#${id}`)
    uploadScreen?.scrollIntoView({ block: "end" })
}

export const scrollToBottomAnimated = (id: string) => {
    const uploadScreen = document.querySelector(`#${id}`)
    uploadScreen?.scrollIntoView({ block: "end", behavior: "smooth" })
}