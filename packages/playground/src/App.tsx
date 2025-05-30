import { SiteHeader } from "@/components/site-header"
import PlaygroundContent from "./components/playground-content"
import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
import "react-fontpicker-ts/dist/index.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Page() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="[--header-height:calc(theme(spacing.14))]">
          <SiteHeader />
          <PlaygroundContent />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
