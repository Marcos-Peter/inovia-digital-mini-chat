import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    globalIgnores(['dist', 'node_modules']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            'import/no-unresolved': ['error', { ignore: ['.png$', '.webp$', '.jpg$', 'story-loader', '^@'] }],
            'react/no-children-prop': 'off',
            'import/order': [
                'warn',
                {
                    groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
            ],
            'import/no-unassigned-import': ['error'],
            radix: ['warn', 'as-needed'],
            'react/jsx-boolean-value': ['warn', 'never'],
            'deprecation/deprecation': 'warn',
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        {
                            name: '@atomic',
                            message: 'Please use @atomic/<component> instead.',
                        },
                    ],
                },
            ],
        },
        settings: {
            react: {
                version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: {
                    // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                    alwaysTryTypes: true,
                },
                node: {
                    paths: ['src'],
                    extensions: ['.js', '.ts', '.d.ts', '.tsx'],
                },
            },
        },
    },
]);
