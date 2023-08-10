import { resolve } from 'path';

/**
 * 用于获取某个目录的绝对路径
 * @param dir
 */
export const pathResolve = (dir: string) => resolve(__dirname, '../', dir);
