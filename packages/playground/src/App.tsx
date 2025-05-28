import { SiteHeader } from "@/components/site-header"
import PlaygroundContent from "./components/playground-content"
import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
import "react-fontpicker-ts/dist/index.css";

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SiteHeader />
      <PlaygroundContent />
    </div>
  )
}
