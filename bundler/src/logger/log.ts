export function error(...message: any[]) {
    if (process.env.NODE_ENV !== 'test') {
        console.error(message)
    }
}