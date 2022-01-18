const {sassPlugin} = require('esbuild-sass-plugin');

require('esbuild').build({
    entryPoints: [
        "./src/index.tsx"
    ],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: ["chrome89", "firefox91", "safari15", "ios15"],
    outdir: './dist',
    loader: { '.eot': 'file', '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.svg': 'file' },
    plugins: [sassPlugin()],
    format: 'esm'
}).catch(() => process.exit(1))