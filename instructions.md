## 🎁 How to build

## In editor
- change `"yadl-client-ts/monaco-editor-workers/workers",` to `"/yadl-website/monaco-editor-workers/workers",`
- change `worker: "yadl-client-ts/worker/yadl-server-worker.js",` to `worker: "/yadl-website/worker/yadl-server-worker.js",`
- `npm run build:editor`

## In 'yadl-client-ts'
- change reference of editor to local directory instead of npm artifactory package
- `npm run build`

## In 'yadl-website'
- copy `yadl-server-worker.js` to `static` folder
- `npm run copy:playground-assets1`
- `npm run build`