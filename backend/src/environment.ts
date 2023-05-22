declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_PASSWORD:string;
            DB_HOST:string;
            DB_USERNAME:string;
            DB_NAME:string;
            DB_ROOT_PASSWORD:string;
        }
    }
}

export { }