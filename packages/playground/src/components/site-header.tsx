import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeaderMenu } from "./layout/header-menu"
import { PresetShare } from "./layout/preset-share"
import { ThemeToggle } from "./layout/mode-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <HeaderMenu />
        <div className="ml-auto px-3 flex gap-4">
          <PresetShare />
          <Button >
            <Plus />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
