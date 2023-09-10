module.exports = {
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015,
    include: ['**/*.ts', '**/*.js'],
    allowJs: true
  }
};
