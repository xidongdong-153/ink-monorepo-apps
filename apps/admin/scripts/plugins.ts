import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';

/**
 * 插件Vite创建
 * @param isBuild
 */
export function createPlugins(isBuild: boolean) {
    const vitePlugins: (PluginOption | PluginOption[])[] = [react()];
    return vitePlugins;
}
