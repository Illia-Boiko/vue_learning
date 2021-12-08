module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 120, 'ignoreStrings': true }],
    'vue/max-attributes-per-line': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-unused-expressions': 'off'
  }
}
