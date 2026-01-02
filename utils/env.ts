import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

const env = process.env.NODE_ENV || 'dev';
const envPath = path.resolve(__dirname, `../.env.${env}`);

if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    throw new Error(`Environment file not found: ${envPath}`);
}

function required(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
}

export const ENV_VAR = {
    BASE_URL: required('BASE_URL'),
    LOGIN_URL: required('LOGIN_URL'),
    USERNAME: required('APP_USERNAME'),
    PASSWORD: required('APP_PASSWORD'),
};
