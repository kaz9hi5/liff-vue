module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'indent': [ 'error',2 ],
    'linebreak-style': [ 'error','unix' ],
    'quotes': [ 'error','single' ],
    'semi': [ 'error', 'always' ],
    'vue/multi-word-component-names': 'off',
  }
}
