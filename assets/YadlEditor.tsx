import * as React from "react";
import { createRoot } from 'react-dom/client';
// import "@xyflow/react/dist/style.css";
// import "yadl-preview/dist/yadl-preview.css";
// import "react-fontpicker-ts/dist/index.css";
import { Allotment } from "allotment";

export default function YadlEditorContainer() {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr" }} data-theme={"dark"}>
      <div style={{ minHeight: "96vh" }}>
        <Allotment
          snap
        // defaultSizes={[100, 100, 100]}
        >
          <Allotment.Pane>
            <div style={{ height: "100vh" }}>
              <h1>Editor</h1>
            </div>
          </Allotment.Pane>
          <Allotment.Pane>
            <div style={{ height: "100vh" }}>
              <h1>Preview</h1>
            </div>
          </Allotment.Pane>
          <Allotment.Pane>
            <h1>Search</h1>
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
}


const root = createRoot(document.getElementById('editor'));
root.render(<YadlEditorContainer />);
