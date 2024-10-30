const eslintPluginPrettier = require("eslint-plugin-prettier");
const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginReactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  {
    files: ["**/*.ts?(x)"],
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    languageOptions: {
      parser: "babel-eslint",
      ecmaVersion: 2020,
      sourceType: "module",
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "react-hooks/exhaustive-deps": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "off",
      "react/prop-types": "off",
      "react/jsx-key": "off",
      "comma-dangle": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["node_modules", "build", "dist", "public"],
  },
];
