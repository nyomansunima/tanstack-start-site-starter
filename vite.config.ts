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
      // target: "vercel",
      customViteReactPlugin: true,
      tsr: {
        srcDirectory: "src/app",
      },
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        concurrency: 14,
        retryCount: 3,
      },
      sitemap: {
        enabled: true,
        host: "https://yoursite.com",
      },
    }),
    viteReact(),
  ],
})

export default config
