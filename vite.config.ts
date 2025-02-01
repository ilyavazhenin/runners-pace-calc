import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
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
  start_url: "/",
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
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW',
      // when using strategies 'injectManifest' you need to provide the srcDir
      // srcDir: 'src',
      // when using strategies 'injectManifest' use claims-sw.ts or prompt-sw.ts
      // filename: 'prompt-sw.ts',
      registerType: 'prompt',
      injectRegister: false,
      pwaAssets: { disabled: true, config: true, htmlPreset: '2023', overrideManifestIcons: true },
      manifest: manifest,
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,svg,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,svg,ico}'],
      },
      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        /* when using generateSW the PWA plugin will switch to classic */
        type: 'module',
      },
    })
  ],
})

