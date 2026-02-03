import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["vite.svg"],
      manifest: {
        name: "Кухня Калькулятор",
        short_name: "Кухня Калькулятор",
        description: "Калькулятор для кухни",
        theme_color: "#ffffff",
        icons: [
          {
            src: "vite-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "vite-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
