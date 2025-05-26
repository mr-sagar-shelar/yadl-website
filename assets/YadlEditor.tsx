import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Allotment } from "allotment";

export default function YadlEditorContainer() {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr" }} data-theme={"dark"}>
      <div style={{ minHeight: "96vh" }}>
        <Allotment
          snap
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
