
{
  "plugins": ["prettier", "import", "@typescript-eslint"],
    "extends": [
      "plugin:prettier/recommended",
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"

    ],
      "parserOptions": {
    "ecmaVersion": 2021,
      "sourceType": "module",
        "project": "./tsconfig.json"
  },
  "env": {
    "es6": true,
      "browser": true,
        "node": true
  },
  "rules": {
    "no-debugger": "off",
      "no-console": 0,
        "class-methods-use-this": "off",
          "@typescript-eslint/no-explicit-any": "error"

  },

  "parser": "@typescript-eslint/parser"

}

