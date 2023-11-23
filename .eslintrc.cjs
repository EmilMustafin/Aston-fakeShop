module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: ['dist', 'node_modules'],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'react', 'react-hooks', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    curly: 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: { order: 'asc' },
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true } }],
    'no-unused-expressions': 'warn',
    'no-unused-vars': ['error', { vars: 'local' }],
    'prettier/prettier': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-param-reassign': ['error', { props: false }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
