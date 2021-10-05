module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    node: true
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    'newline-after-var': ['error', 'always'],
    'no-console': 'off',
    'global-require': 'off',
    'no-dynamic-require': 'off',
    'promise/always-return': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'react/state-in-constructor': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': [0],
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off',
    'no-debugger': 'off',
    // 'no-console': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'promise/no-callback-in-promise': 'off',
    '@typescript-eslint/naming-convention': [
      'off',
      {
        selector: 'variable',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'guard-for-in': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
    // 'no-redeclare': 'off',
    // 'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-cycle': 'off',
    // ['error', { functions: false }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-return-await': 'off',
    'no-loop-func': 'off',
  },
}
