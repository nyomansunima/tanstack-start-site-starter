import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src/app",
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        concurrency: 14,
        retryCount: 3,
      },
      sitemap: {
        enabled: true,
        host: "https://yoursite.com",
      },
    }),
    react(),
  ],
})
