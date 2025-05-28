import { Share2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
import { HeaderMenu } from "./header-menu"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        {/* <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" /> */}
        <HeaderMenu />
        <div className="ml-auto px-3 flex gap-4">
          <Button variant="secondary">
            <Share2 />
          </Button>
          <Button >
            <Plus />
          </Button>
        </div>
      </div>
    </header>
  )
}
