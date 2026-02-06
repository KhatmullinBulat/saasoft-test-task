import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,

  ignores: [
    'dist',
    'node_modules',
  ],

  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 1 },
        multiline: { max: 1 },
      }],

      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below',
      }],

      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],

      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      }],

      'vue/attributes-order': ['error', {
        alphabetical: true,
      }],

      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: false,
        ignores: ['pre', 'textarea'],
      }],
    },
  },

  typescript: {
    overrides: {
      'ts/no-non-null-assertion': 'error',
    },
  },

  javascript: {
    overrides: {
      'unused-imports/no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
})
