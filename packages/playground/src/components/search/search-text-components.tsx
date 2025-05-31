import { useMemo, useState } from "react";
import { TextNames } from "yadl-ui-components";
import { memo } from "react";
import { Text } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import "react-fontpicker-ts/dist/index.css";
import { GradientDirection } from "@/components/constants";
import { useAtom } from 'jotai'
import { fontSize, userText, fontFamily, userClasses } from '@/atoms/text-tag-atoms'

const SearchTextComponents = () => {
    const [currentBackgroundType, setBackgroundType] = useState<string>("Solid");
    const [currentGradientDirection, setCurrentGradientDirection] = useState<string>(GradientDirection[0].key);

    const [currentFontSize] = useAtom(fontSize);
    const [currentText] = useAtom(userText);
    const [currentFont] = useAtom(fontFamily);
    const [currentCustomStyle] = useAtom(userClasses);


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
                                    classes: `text-wrap ${textDetails.classes} ${currentFontSize.key}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""} ${currentCustomStyle}`,
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
                            classes={`${textDetails.classes} ${currentFontSize.key}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""} ${currentCustomStyle}`}
                        />
                    </div>
                );
            });
        return listItems;
    }, [currentFont, currentFontSize.key, currentText, currentBackgroundType, currentGradientDirection, currentCustomStyle]);

    const renderGradientDirections = () => {
        return GradientDirection.map((direction) => {
            return <option key={direction.label}>{direction.label}</option>
        })
    }

    return (
        <>
            <div>
                <div className="flex flex-wrap gap-5 pb-5">
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
                    className={`grid grid-cols-1 overflow-auto w-full h-full ${currentFontSize.key}`}
                >
                    {TextComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchTextComponents);
export default Memo;
