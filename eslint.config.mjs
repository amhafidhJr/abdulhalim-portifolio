import globals from "globals";
import { configs as eslintJsConfigs } from "@eslint/js";
import { configs as tsEslintConfigs } from "@typescript-eslint/eslint-plugin";
import { configs as eslintReactConfigs } from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser", // Specify the parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      // Customize your rules here if needed
    },
  },
  eslintJsConfigs.recommended, // ESLint's recommended rules
  ...tsEslintConfigs.recommended, // TypeScript ESLint recommended rules
  eslintReactConfigs.flat.recommended, // React ESLint recommended rules
];
