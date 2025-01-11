import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        injectRegister: 'auto',
        includeAssets: ["**/*"],
        manifest: 
          {
            name: "Running Calc by Ilya Vazhenin",
            short_name: "Running Calc by Ilya V.",
            icons: [
              {
                src: "favicon.ico",
                sizes: "64x64",
                type: "image/x-icon"
              },
              {
                src: "app-icon-new192.png",
                type: "image/png",
                sizes: "192x192"
              },
              {
                src: "app-icon-new.png",
                type: "image/png",
                sizes: "512x512"
              }
            ],
            start_url: "/distancerun",
            id: "/distancerun",
            display: "standalone",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            screenshots: [
              {
              src: "distance1.jpg",
                sizes: "590x1212",
                type: "image/jpg",
                form_factor: "narrow",
                label: "Get pace by every kilometer"
              },
              {
                src: "track1.jpg",
                sizes: "590x1212",
                type: "image/jpg",
                form_factor: "narrow",
                label: "Get pace by every lap on track"
              }
          ]
          },
          workbox: {
            globPatterns: ["**/*"],
            navigateFallback: '/distancerun',
          },
          devOptions: {
            enabled: true,
            type: 'module',
          }
      }
    ),
  ],
});