## 🎁 How to build

## In editor
- change `"yadl-client-ts/monaco-editor-workers/workers",` to `"/monaco-editor-workers/workers",`
- change `worker: "yadl-client-ts/worker/yadl-server-worker.js",` to `worker: "/worker/yadl-server-worker.js",`
- `npm run build:editor`

## In 'yadl-client-ts'
- change reference of editor to local directory instead of npm artifactory package
- Update `vite.config.ts` from `base: "/yadl-client-ts",` to `base: "/",`
- `npm run build`

## In 'yadl-website'
- copy `yadl-server-worker.js` to `static` folder
- `npm run copy:playground-assets1`
- `npm run build`