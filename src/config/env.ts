import dotenv from 'dotenv'
dotenv.config()

declare let process: {
    env: {
        NODE_ENV: 'prod' | 'dev' | 'test',
        DATABASE_URL: string,
        DB_NAME: string,
        PORT: string,
        IMGUR_CLIENT_ID: string
    }
}

export const {
    NODE_ENV = 'dev',
    DATABASE_URL = '',
    DB_NAME = '',
    PORT = '8080',
    IMGUR_CLIENT_ID = ''
} = process.env