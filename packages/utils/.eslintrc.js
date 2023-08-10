module.exports = {
    root: true,
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: ['@ink/eslint-config/nestjs'],
};
