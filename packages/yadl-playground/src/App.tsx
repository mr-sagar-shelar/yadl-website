import { useEffect, useState } from "react";
import Playground from "./Playground";

function App() {
  const [currentCode, setCurrentCode] = useState<string>("");

  useEffect(() => {
    let code = "";
    const editorCodeElement = document.getElementById("editor-code");
    if (editorCodeElement) {
      code = editorCodeElement.dataset.code || "";
    }
    setCurrentCode(code);
  }, []);


  return (
    <div className="">
      <Playground code={currentCode} />
    </div>
  );
}

export default App;
