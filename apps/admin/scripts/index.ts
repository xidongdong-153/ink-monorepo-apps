import merge from 'deepmerge';
import { ConfigEnv, UserConfig } from 'vite';

import { createPlugins } from './plugins';
import { Configure } from './types';
import { pathResolve } from './utils';

export const createConfig = (params: ConfigEnv, configure?: Configure): UserConfig => {
    const isBuild = params.command === 'build';
    return merge<UserConfig>(
        {
            server: {
                port: 2333,
            },
            resolve: {
                alias: {
                    '@': pathResolve('src'),
                },
            },
            css: {
                modules: {
                    localsConvention: 'camelCaseOnly',
                },
            },
            plugins: createPlugins(isBuild),
        },
        typeof configure === 'function' ? configure(params, isBuild) : {},
        {
            arrayMerge: (_d, s, _o) => Array.from(new Set([..._d, ...s])),
        },
    );
};
