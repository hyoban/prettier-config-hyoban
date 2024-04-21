const GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",

  "**/output",
  "**/coverage",
  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.next",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.cache",
  "**/.output",
  "**/.vite-inspect",
  "**/.yarn",

  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts",
  "**/eslint-typegen.d.ts",
];

const DEFAULT_GLOB_TS_SRC = ["**/*.cts", "**/*.mts", "**/*.ts", "**/*.tsx"];

const DEFAULT_GLOB_JS_SRC = ["**/*.cjs", "**/*.mjs", "**/*.js", "**/*.jsx"];

const DEFAULT_GLOB_SRC = [...DEFAULT_GLOB_TS_SRC, ...DEFAULT_GLOB_JS_SRC];

const GLOB_JSON = '**/*.json'
const GLOB_JSON5 = '**/*.json5'
const GLOB_JSONC = '**/*.jsonc'

const GLOB_JSON_ALL = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC]

/** @type {import('prettier').Options} */
module.exports = {
  overrides: [
    {
      files: [...GLOB_EXCLUDE, ...DEFAULT_GLOB_SRC, ...GLOB_JSON_ALL],
      options: {
        requirePragma: true,
      },
    },
  ],
};
