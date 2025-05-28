import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Preview, SearchComponents, DnDProvider } from "yadl-preview";

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
                    <div data-theme="aqua" className="flex h-full">
                        <Preview
                            initialNodes={[]}
                            initialEdges={[]}
                        // onNodeSelect={(node) => {
                        //     editorReference.current?.onNodeSelect(node);
                        // }}
                        // onEdgeConnect={(edge: any) => {
                        //     editorReference.current?.onEdgeConnect(edge);
                        // }}
                        // onNodePositionChanged={(node: any) => {
                        //     editorReference.current?.onNodePositionChanged(node);
                        // }}
                        // onNodeRemoved={(node: any) => {
                        //     editorReference.current?.onNodeRemoved(node);
                        // }}
                        // onNodeResized={(node: any) => {
                        //     editorReference.current?.onNodeResized(node);
                        // }}
                        // onNodeAdded={(node: any) => {
                        //     editorReference.current?.onNodeAdded(node);
                        // }}
                        />
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={25} minSize={10}>
                    <div data-theme="light" className="flex h-full items-center justify-center p-6">
                        <SearchComponents />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
