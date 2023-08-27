module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': '2020',
    },
    plugins: [
        '@typescript-eslint',
        'react'
    ],
}
