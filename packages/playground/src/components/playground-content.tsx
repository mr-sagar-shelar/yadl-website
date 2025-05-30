import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
// import { Preview, SearchComponents } from "yadl-preview";
import { Preview } from "yadl-preview";
// import { AppSidebar } from "@/components/app-sidebar";
import { SearchComponents } from "@/components/search-components";

export default function PlaygroundContent() {
    const previewTheme = "light";
    return (
        <div
            className="w-screen h-screen"
        >
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-screen"
            >
                <ResizablePanel defaultSize={25} minSize={10}>
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Code</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50} minSize={40}>
                    <div data-theme={previewTheme} className="flex h-full">
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
                    <div className="flex h-full justify-center p-6">
                        <SearchComponents />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
