import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
import "react-fontpicker-ts/dist/index.css";
import { Preview, SearchComponents, DnDProvider } from "yadl-preview";
import { YadlEditor, YadlEditorRef, YadlEditorResponse } from "yadl-editor";
import { Allotment } from "allotment";
import "./allotment.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Edge, Node } from "@xyflow/react";
import { debounce } from "lodash";
import { availableThemes } from "./Constants";

interface PlaygroundProps {
    code?: string
}

function Playground(props: PlaygroundProps) {
    const { code = "// Yadl Playground" } = props;
    const [currentNodes, setCurrentNodes] = useState<Node[]>([]);
    const [currentEdges, setCurrentEdges] = useState<Edge[]>([]);
    const editorReference = useRef<YadlEditorRef | null>(null);
    const [codeVisible, setCodeVisible] = useState(true);
    const [previewVisible, setPreviewVisible] = useState(true);
    const [componentsVisible, setComponentsVisible] = useState(true);
    const [hasReadFromLocalStorage, setHasReadFromLocalStorage] = useState(false);
    const [sizes, setSizes] = useState<number[]>();
    const [currentTheme, setCurrentTheme] = useState<string>("light");
    const [currentCode, setCurrentCode] = useState<string>(code);
    const [currentFonts, setCurrentFonts] = useState<string[] | undefined>([]);

    useEffect(() => {
        setCurrentCode(code);
    }, [code]);

    const handleChange = useMemo(
        () =>
            debounce((sizes: any) => {
                localStorage.setItem("sizes", JSON.stringify(sizes));
            }, 100),
        []
    );

    const loadFontFromObject = useCallback(
        (font: string) => {
            let cssId = 'google-font-' + font

            const cssIdAll = cssId + '-all'
            const existing = document.getElementById(cssId)
            const existingAll = document.getElementById(cssIdAll)
            if (!existing && !existingAll && font) {
                const link = document.createElement('link')
                link.rel = 'stylesheet'
                link.id = cssId
                link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
                link.setAttribute('data-testid', cssId) // for react testing library
                document.head.appendChild(link)
            }
        },
        []
    );

    useMemo(() => {
        currentFonts?.forEach((fontName) => {
            loadFontFromObject(fontName)
        });
    }, [currentFonts?.length]);

    useEffect(() => {
        const value = localStorage.getItem("sizes");
        if (value) {
            setSizes(JSON.parse(value));
        }
        setHasReadFromLocalStorage(true);
    }, []);

    const renderThemeOptions = () => {
        return availableThemes.map((theme) => {
            return <option key={theme.title}>{theme.title}</option>
        })
    }

    return (
        <div data-theme={currentTheme}>
            <DnDProvider>
                <div className="flex justify-between">
                    <div className="join p-2">
                        <button
                            className={`btn btn-sm join-item ${codeVisible ? "btn-primary" : ""}`}
                            onClick={() => {
                                setCodeVisible((codeVisible) => !codeVisible);
                            }}
                        >
                            Code
                        </button>
                        <button
                            className={`btn btn-sm join-item ${previewVisible ? "btn-primary" : ""}`}
                            onClick={() => {
                                setPreviewVisible((previewVisible) => !previewVisible);
                            }}
                        >
                            Preview
                        </button>
                        <button
                            className={`btn btn-sm join-item ${componentsVisible ? "btn-primary" : ""}`}
                            onClick={() => {
                                setComponentsVisible((componentsVisible) => !componentsVisible);
                            }}
                        >
                            Components
                        </button>
                    </div>
                    <div className="flex flex-column p-1">
                        <fieldset className="fieldset pr-2">
                            <select defaultValue={currentTheme} className="select select-sm" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                const foundFontSize = availableThemes.find(fontSize => fontSize.title == event.target.value);
                                if (foundFontSize) {
                                    setCurrentTheme(foundFontSize.value);
                                }
                            }}>
                                {renderThemeOptions()}
                            </select>
                        </fieldset>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
                    <div style={{ minHeight: "96vh", width: "100%" }}>
                        {hasReadFromLocalStorage &&
                            <Allotment
                                snap
                                defaultSizes={sizes}
                                onChange={handleChange}
                            >
                                <Allotment.Pane visible={codeVisible}>
                                    <div style={{ height: "100vh", width: "100%" }}>
                                        <YadlEditor
                                            ref={editorReference}
                                            onChange={(code: YadlEditorResponse) => {
                                                setCurrentNodes(code.nodes as Node[]);
                                                setCurrentEdges(code.edges as Edge[]);
                                                setCurrentFonts(code.fontsUsed);
                                            }}
                                            code={currentCode}
                                        />
                                    </div>
                                </Allotment.Pane>
                                <Allotment.Pane visible={previewVisible}>
                                    <div style={{ height: "100vh", width: "100%" }}>
                                        <Preview
                                            initialNodes={currentNodes}
                                            initialEdges={currentEdges}
                                            onNodeSelect={(node) => {
                                                editorReference.current?.onNodeSelect(node);
                                            }}
                                            onEdgeConnect={(edge: any) => {
                                                editorReference.current?.onEdgeConnect(edge);
                                            }}
                                            onNodePositionChanged={(node: any) => {
                                                editorReference.current?.onNodePositionChanged(node);
                                            }}
                                            onNodeRemoved={(node: any) => {
                                                editorReference.current?.onNodeRemoved(node);
                                            }}
                                            onNodeResized={(node: any) => {
                                                editorReference.current?.onNodeResized(node);
                                            }}
                                            onNodeAdded={(node: any) => {
                                                editorReference.current?.onNodeAdded(node);
                                            }}
                                        />
                                    </div>
                                </Allotment.Pane>
                                <Allotment.Pane visible={componentsVisible}>
                                    <SearchComponents />
                                </Allotment.Pane>
                            </Allotment>
                        }
                    </div>
                </div>
            </DnDProvider>
        </div>
    );
}

export default Playground;
