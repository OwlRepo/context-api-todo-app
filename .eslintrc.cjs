/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "import/no-restricted-paths": [
      "error",
      {
        "zones": [
          {
            "target": "./src/core",
            "from": "./src/components"
          },
          {
            "target": "./src/core",
            "from": "./src/lib"
          },
          {
            "target": "./src/core",
            "from": "./src/pages"
          },
          {
            "target": "./src/lib",
            "from": "./src/pages"
          },
          {
            "target": "./src/components",
            "from": "./src/pages"
          }
        ]
      }
    ]
  },
};
