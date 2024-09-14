import path, { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const viewPath = join('./views')
export const filePath = join(__dirname, '/../public');
