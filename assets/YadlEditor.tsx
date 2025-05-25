import * as React from "react";
import { createRoot } from 'react-dom/client';

export default function YadlEditor() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
      <div style={{ minHeight: "74vh" }}>
        <h2>From React App</h2>
      </div>
    </div>
  );
}


const root = createRoot(document.getElementById('editor'));
root.render(<YadlEditor />);
