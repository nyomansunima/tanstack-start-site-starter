import {
  combine,
  ignores,
  imports,
  javascript,
  node,
  react,
  typescript,
} from "@antfu/eslint-config"

export default combine(
  ignores([".nitro/**", ".output/**", ".tanstack/**", "**/*.gen.ts"]),
  javascript(),
  node(),
  imports(),
  typescript(),
  react(),
)
