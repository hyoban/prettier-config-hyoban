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

/** @type {import('prettier').Options} */
module.exports = {
	experimentalTernaries: true,
	useTabs: true,
	quoteProps: "consistent",

	// Defaults
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	arrowParens: "always",
	endOfLine: "lf",
	overrides: [
		{
			files: GLOB_EXCLUDE,
			options: {
				requirePragma: true,
			},
		},
		{
			files: [".vscode/*.json", "tsconfig.json"],
			options: {
				parser: "jsonc",
			},
		},
	],
};
