# 目录介绍

``` bash
.
├── README.md
├── apps
│   ├── admin                   # 后台管理
│   │   ├── README.md
│   │   ├── index.html
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── pnpm-lock.yaml
│   │   ├── postcss.config.js
│   │   ├── public
│   │   ├── scripts
│   │   ├── src
│   │   ├── tailwind.config.js
│   │   ├── tsconfig.eslint.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── api                     # 服务接口
│   │   ├── README.md
│   │   ├── dist
│   │   ├── nest-cli.json
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── pnpm-lock.yaml
│   │   ├── src
│   │   ├── test
│   │   ├── tsconfig.build.json
│   │   └── tsconfig.json
│   └── web                     # 前台应用
│       ├── README.md
│       ├── components.json
│       ├── next-env.d.ts
│       ├── next.config.js
│       ├── node_modules
│       ├── package.json
│       ├── pnpm-lock.yaml
│       ├── postcss.config.js
│       ├── public
│       ├── src
│       ├── tailwind.config.js
│       ├── tsconfig.eslint.json
│       └── tsconfig.json
├── node_modules
├── package.json
├── packages
│   ├── eslint-config               # 各应用eslint配置
│   │   ├── base-ts.js
│   │   ├── base.js
│   │   ├── index.js
│   │   ├── nestjs.js
│   │   ├── nextjs.js
│   │   ├── node_modules
│   │   ├── package.json
│   │   └── react.js
│   ├── stylelint-config            # 各应用stylelint配置
│   │   ├── index.js
│   │   ├── node_modules
│   │   └── package.json
│   ├── ts-config                   # 各应用ts配置
│   │   ├── base.json
│   │   ├── nestjs.json
│   │   ├── nextjs.json
│   │   ├── package.json
│   │   └── react.json
│   └── utils                       # 测试包
│       ├── dist
│       ├── node_modules
│       ├── package.json
│       ├── src
│       ├── tsconfig.build.json
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

## 启动介绍

安装依赖 `pnpm i`

启动应用 `pnpm dev`

## 本地预览

[后台应用 http://localhost:2333/](http://localhost:2333/)

[后台API http://localhost:2334/](http://localhost:2334/)

[前台应用 http://localhost:2335/](http://localhost:2335/)

## Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

``` bash
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

``` bash
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

``` bash
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

``` bash
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
