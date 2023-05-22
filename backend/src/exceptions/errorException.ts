export const createJsonResponse = (message: string, error: boolean, data: any, status: number) => {
    return {
        message: message,
        error: error,
        data: data,
        status: status
    };
}