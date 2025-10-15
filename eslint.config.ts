import config from "@antfu/eslint-config"

export default config({
  stylistic: false,
  typescript: {
    overrides: {
      "eslint-comments/no-unlimited-disable": "off",
    },
  },
})
