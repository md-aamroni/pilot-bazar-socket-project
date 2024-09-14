import "dotenv/config";

export const APP_NAME = process.env.APP_NAME || "Socket";
export const APP_PORT = process.env.APP_PORT || "3000";
export const APP_HOST = process.env.APP_HOST || "http://127.0.0.1";
export const APP_BASE = `${APP_HOST}:${APP_PORT}`;

export const API_SERVER = process.env.API_SERVER || "http://127.0.0.1:8080";