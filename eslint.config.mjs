import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [
    '**/*.{ts,vue}'
    ]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: [
      '**/*.ts',
      '**/*.vue'
    ],
    languageOptions: {parserOptions: {parser: tseslint.parser}},
    rules: {
      'indent': [ 'error',2 ],
      'linebreak-style': [ 'error','unix' ],
      'quotes': [ 'error','single' ],
      'semi': [ 'error', 'always' ],
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off'
    }
  }
];