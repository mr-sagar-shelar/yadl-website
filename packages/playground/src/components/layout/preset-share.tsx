import { Copy, Share2, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"

export function PresetShare() {
    const [currentUrl, setCurrentUrl] = useState<string>("https://yadl.in");
    const [isCopied, setIsCopied] = useState<boolean>(false);
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" onClick={() => {
                    setIsCopied(false);
                }}>
                    <Share2 /> Share
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[520px]">
                <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-semibold">Share diagram</h3>
                </div>
                <div className="flex items-center space-x-2 pt-4">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue={currentUrl}
                            readOnly
                            className="h-9"
                        />
                    </div>
                    <Button
                        type="submit"
                        size="sm"
                        className="px-3"
                        onClick={async () => {
                            await navigator.clipboard.writeText(currentUrl);
                            setIsCopied(true);
                        }}
                    >
                        <span className="sr-only">Copy</span>
                        {isCopied ? <Check /> : <Copy />}
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}