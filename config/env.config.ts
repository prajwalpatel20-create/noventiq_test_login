/**
 * Environment Configuration
 * 
 * Environment variables are loaded in playwright.config.ts
 * This file provides typed access to environment variables
 */

/**
 * Environment configuration interface
 */
export interface EnvConfig {
    BASE_URL: string;
    LOGIN_URL: string;
    USERNAME: string;
    PASSWORD: string;
}

/**
 * Get environment configuration
 * @returns Environment configuration object
 */
export function getEnvConfig(): EnvConfig {
    return {
        BASE_URL: process.env.BASE_URL || 'https://practicetestautomation.com',
        LOGIN_URL: process.env.LOGIN_URL || 'https://practicetestautomation.com/practice-test-login/',
        USERNAME: process.env.USERNAME || 'student',
        PASSWORD: process.env.PASSWORD || 'Password123',
    };
}

/**
 * Environment config - access environment variables
 */
export const envConfig = {
    get BASE_URL(): string {
        return process.env.BASE_URL || 'https://practicetestautomation.com';
    },
    get LOGIN_URL(): string {
        return process.env.LOGIN_URL || 'https://practicetestautomation.com/practice-test-login/';
    },
    get USERNAME(): string {
        return process.env.USERNAME || 'student';
    },
    get PASSWORD(): string {
        return process.env.PASSWORD || 'Password123';
    }
};

