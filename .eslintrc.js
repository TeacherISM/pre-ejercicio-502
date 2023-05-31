module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "google",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Disable all style-related rules
    "require-jsdoc": "off",
    camelcase: "off",
    indent: "off",
    "linebreak-style": "off",
    quotes: "off",
    semi: "off",
    "max-len": "off",
    "no-tabs": "off",
    "no-multiple-empty-lines": "off",
    "object-curly-spacing": "off",
    // Add more rules here if needed
  },
};
