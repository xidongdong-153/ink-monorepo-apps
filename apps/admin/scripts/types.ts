import { ConfigEnv, UserConfig } from 'vite';

/**
 * vite自定义配置生成函数的类型
 */
export type Configure = (params: ConfigEnv, isBuild: boolean) => UserConfig;
