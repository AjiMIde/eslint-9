import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
    ],
  },
  {
    // 这个配置使得 globals.browser 变量都能被识别，如window.setTimeout 可为 setTimeout
    // 或 console 之类的
    // 注：验证失败了aji
    languageOptions: { globals: globals.browser }
  },
  {
    rules: {
      // 'no-console': 'error',
      // 'quotes': ['error','single'],
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
