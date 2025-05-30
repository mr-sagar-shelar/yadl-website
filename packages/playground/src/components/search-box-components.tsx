import { useMemo, useState } from "react";
import * as Boxes from "yadl-ui-components";
import { memo } from "react";
import { BoxNames } from "yadl-ui-components";
import { BorderStyles, BorderRadius, BorderSizes, Opacity, GradientDirection } from "./constants";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";


const SearchBoxes = () => {
    const [currentBorderStyle, setCurrentBorderStyle] = useState<string>(BorderStyles[0].key);
    const [currentBorderRadius, setCurrentBorderRadius] = useState<string>(BorderRadius[0].key);
    const [currentBorderSize, setCurrentBorderSize] = useState<string>(BorderSizes[0].key);
    const [currentOpacity, setCurrentOpacity] = useState<string>(Opacity[0].key);
    const [currentGradientDirection, setCurrentGradientDirection] = useState<string>(GradientDirection[0].key);
    const [currentBackgroundType, setBackgroundType] = useState<string>("Solid");
    const [currentCustomStyle, setCustomStyles] = useState<string>("");
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const IconsComponent = useMemo(() => {
        const listItems = Object.entries(BoxNames)
            .map((icon) => {
                const [key, boxDetails] = icon;
                // @ts-ignore
                let Box = Boxes[boxDetails.component];

                if (Box) {
                    return (
                        <div
                            key={key}
                            title={boxDetails.name}
                            onDragStart={(event) =>
                                onDragStart(event, {
                                    type: "box",
                                    data: {
                                        component: boxDetails.component,
                                        props: {
                                            ...boxDetails.props,
                                            classes: `${boxDetails.props.classes} ${currentOpacity} ${currentBorderSize} ${currentBorderRadius} ${currentBorderStyle} ${currentCustomStyle}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""}`,
                                        }
                                    },
                                })
                            }
                            draggable
                        >
                            {Box && <Box {...boxDetails.props} classes={`${boxDetails.props.classes} ${currentOpacity} ${currentBorderSize} ${currentBorderRadius} ${currentBorderStyle} ${currentCustomStyle}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""}`} />}
                        </div>
                    );
                }
                return null;
            });
        return listItems;
    }, [currentBorderStyle, currentBorderRadius, currentBorderSize, currentOpacity, currentCustomStyle, currentBackgroundType, currentGradientDirection]);

    const renderBorderStyles = () => {
        return BorderStyles.map((borderStyle) => {
            return <option key={borderStyle.label}>{borderStyle.label}</option>
        })
    }

    const renderBorderRadius = () => {
        return BorderRadius.map((borderRadius) => {
            return <option key={borderRadius.label}>{borderRadius.label}</option>
        })
    }

    const renderBorderSize = () => {
        return BorderSizes.map((borderSize) => {
            return <option key={borderSize.label}>{borderSize.label}</option>
        })
    }

    const renderOpacity = () => {
        return Opacity.map((opacity) => {
            return <option key={opacity.label}>{opacity.label}</option>
        })
    }

    const renderGradientDirections = () => {
        return GradientDirection.map((direction) => {
            return <option key={direction.label}>{direction.label}</option>
        })
    }

    return (
        <>
            <div className="h-full" data-theme="light">
                <div className="flex flex-wrap gap-5 pb-5">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Border Style</legend>
                        <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            const foundItem = BorderStyles.find(borderStyle => borderStyle.label == event.target.value);
                            if (foundItem) {
                                setCurrentBorderStyle(foundItem.key);
                            }
                        }}>
                            {renderBorderStyles()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Border Radius</legend>
                        <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            const foundItem = BorderRadius.find(radius => radius.label == event.target.value);
                            if (foundItem) {
                                setCurrentBorderRadius(foundItem.key);
                            }
                        }}>
                            {renderBorderRadius()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Border Size</legend>
                        <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            const foundItem = BorderSizes.find(borderSize => borderSize.label == event.target.value);
                            if (foundItem) {
                                setCurrentBorderSize(foundItem.key);
                            }
                        }}>
                            {renderBorderSize()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Opacity</legend>
                        <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            const foundItem = Opacity.find(opacity => opacity.label == event.target.value);
                            if (foundItem) {
                                setCurrentOpacity(foundItem.key);
                            }
                        }}>
                            {renderOpacity()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Custom Styles</legend>
                        <input
                            type="search"
                            className="input"
                            value={currentCustomStyle}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCustomStyles(event.target.value);
                            }}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Color Type</legend>
                        <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setBackgroundType(event.target.value)
                        }}>
                            <option key={"solid"}>Solid</option>
                            <option key={"gradient"}>Gradient</option>
                        </select>
                    </fieldset>
                    {currentBackgroundType == "Gradient" && <fieldset className="fieldset">
                        <legend className="fieldset-legend">Gradient Direction</legend>
                        <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            const foundItem = GradientDirection.find(direction => direction.label == event.target.value);
                            if (foundItem) {
                                setCurrentGradientDirection(foundItem.key);
                            }
                        }}>
                            {renderGradientDirections()}
                        </select>
                    </fieldset>
                    }
                </div>
                <div className="flex flex-wrap gap-5 overflow-auto h-full">
                    {IconsComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchBoxes);
export default Memo;
