/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier/skip-formatting"
	],
	parserOptions: {
		ecmaVersion: "latest"
	},
	rules: {
		"vue/multi-word-component-names": "off", // 关闭vue组件命名规则，允许使用单个单词组件名
		"no-unused-vars": "off", // 关闭未使用变量警告，因为tslint会处理它
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_"
			}
		]
	}
};
