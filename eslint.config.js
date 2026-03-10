// @ts-check
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const testingLibrary = require("eslint-plugin-testing-library");
const globals = require("globals");

module.exports = [
  // Ignore patterns (in addition to what next config sets)
  { ignores: ["node_modules/**", "coverage/**", ".next/**"] },

  // Next.js flat config (includes eslint:recommended, react, react-hooks, import, a11y, etc.)
  ...nextCoreWebVitals,

  // Add jest globals (not included by next config)
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // Project-level rules
  // Note: eslint-config-next already registers eslint-plugin-import, so import/* rules work here
  {
    rules: {
      "no-console": "error",
      "semi": "error",
      "quotes": ["error", "double", { "allowTemplateLiterals": true }],
      "import/order": [
        "error",
        {
          "groups": [
            ["builtin", "external"],
            "internal",
            "type",
            ["parent", "sibling", "index", "unknown"]
          ],
          "warnOnUnassignedImports": true,
          "newlines-between": "always"
        }
      ]
    },
  },

  // Testing library for test files
  {
    files: ["**/__tests__/**/*.[jt]sx?", "**/?(*.)+(spec|test).[jt]sx?"],
    ...testingLibrary.configs["flat/react"],
  },
];
