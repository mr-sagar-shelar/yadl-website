import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function PlaygroundContent() {
    return (
        <div
            className="h-screen w-screen"
        >
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full"
            >
                <ResizablePanel defaultSize={25} minSize={10}>
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Code</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50} minSize={40}>
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Preview</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={25} minSize={10}>
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Shapes</span>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
