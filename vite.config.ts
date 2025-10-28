import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { version } from './package.json'

// Function to convert version string "0.9.6 beta - 06.2025" to "096beta062025"
function convertVersionToHash(versionString: string): string {
  return versionString
    .replace(/(\d+)\.(\d+)\.(\d+)\s+(beta|alpha|rc)\s+-\s+(\d{2})\.(\d{4})/g, '$1$2$3$4$5$6')
    .replace(/\./g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

const str_ver = convertVersionToHash(version);

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), tailwindcss()],
	build: {
		rollupOptions: {
			output: {
				// aggiunge .v{version} e l'hash al nome dei file per forzare l'invalidamento cache
        entryFileNames: `assets/js/[name].${str_ver}.js`,
        chunkFileNames: `assets/js/[name].${str_ver}.js`,
        assetFileNames: `assets/[ext]/[name]-[hash].[ext]`,
			}
		}
	}
})
