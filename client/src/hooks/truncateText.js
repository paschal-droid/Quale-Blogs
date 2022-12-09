

export const truncate = (str, no) => {
    return str.length > 15 ? str.substring(0, no) + "..." : str
}
