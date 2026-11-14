import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'default-map-to-openstreetmap-without-api-keys',
        enforce: 'pre',
        transform(source, id) {
          if (!id.endsWith('/src/components/ActualGISMap.tsx')) return null;

          // CARTO requires an API key now, so use the key-free OSM layer by default.
          return source.replace(
            "GIS_API_KEY ? 'satellite' : 'carto'",
            "GIS_API_KEY ? 'satellite' : 'osm'",
          );
        },
      },
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env VAR.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
