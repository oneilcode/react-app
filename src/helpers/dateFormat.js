export const dateFormat = (date) => {
    return Intl.DateTimeFormat("ru-Ru", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(date)
}