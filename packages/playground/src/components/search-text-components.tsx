import { useMemo, useState } from "react";
import { TextNames } from "yadl-ui-components";
import { memo } from "react";
import { Text } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import FontPicker from "react-fontpicker-ts";
import "react-fontpicker-ts/dist/index.css";
import { GradientDirection, FontSizes } from "./constants";

const SearchTextComponents = () => {
    const [currentFont, setCurrentFont] = useState<string>("Audiowide");
    const [currentText, setCurrentText] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const [currentFontSize, setCurrentFontSize] = useState<string>("text-2xl");
    const [currentBackgroundType, setBackgroundType] = useState<string>("Solid");
    const [currentGradientDirection, setCurrentGradientDirection] = useState<string>(GradientDirection[0].key);
    const [currentCustomStyle, setCustomStyles] = useState<string>("");


    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const TextComponent = useMemo(() => {
        const listItems = Object.entries(TextNames)
            .map((text) => {
                const [key, textDetails] = text;
                return (
                    <div
                        key={key}
                        className="m-2 cursor-grab px-5"
                        onDragStart={(event) =>
                            onDragStart(event, {
                                type: "text",
                                data: {
                                    icon: `${key}`,
                                    classes: `text-wrap ${textDetails.classes} ${currentFontSize}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""} ${currentCustomStyle}`,
                                    text: currentText,
                                    fontFamily: currentFont,
                                    props: textDetails.props,
                                },
                            })
                        }
                        draggable
                        title={textDetails.name}
                    >
                        <Text
                            text={currentText}
                            classes={`${textDetails.classes} ${currentFontSize}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""} ${currentCustomStyle}`}
                        />
                    </div>
                );
            });
        return listItems;
    }, [currentFont, currentFontSize, currentText, currentBackgroundType, currentGradientDirection, currentCustomStyle]);

    const renderOptions = () => {
        return FontSizes.map((fontSize) => {
            return <option key={fontSize.label}>{fontSize.label}</option>
        })
    }

    const renderGradientDirections = () => {
        return GradientDirection.map((direction) => {
            return <option key={direction.label}>{direction.label}</option>
        })
    }

    return (
        <>
            <div>
                <div className="px-5 pt-5">
                    <label className="w-full">Select font:</label>
                    <FontPicker
                        defaultValue={"Audiowide"}
                        autoLoad
                        value={(font2: string) => setCurrentFont(font2)}
                    />
                </div>
                <div className="px-5 pt-5">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Text</legend>
                        <input value={currentText} type="text" className="input w-full" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setCurrentText(event.target.value);
                        }} />
                    </fieldset>
                </div>
                <div className="flex flex-wrap gap-5 pb-5">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Font Size</legend>
                        <select defaultValue={"2XL"} className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            const foundFontSize = FontSizes.find(fontSize => fontSize.label == event.target.value);
                            if (foundFontSize) {
                                setCurrentFontSize(foundFontSize.key);
                            }
                        }}>
                            {renderOptions()}
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
                <div
                    style={{ fontFamily: currentFont }}
                    className={`grid grid-cols-1 overflow-auto w-full h-full ${currentFontSize}`}
                >
                    {TextComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchTextComponents);
export default Memo;
