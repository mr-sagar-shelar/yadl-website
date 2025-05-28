import { SiteHeader } from "@/components/site-header"
import PlaygroundContent from "./components/playground-content"

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SiteHeader />
      <PlaygroundContent />
    </div>
  )
}
