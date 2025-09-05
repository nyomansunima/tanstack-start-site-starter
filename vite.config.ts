import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  plugins: [
    viteTsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
})

export default config
