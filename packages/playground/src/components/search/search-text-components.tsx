import { useMemo } from "react";
import { TextNames } from "yadl-ui-components";
import { memo } from "react";
import { Text } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import "react-fontpicker-ts/dist/index.css";
import { useAtom } from 'jotai'
import { fontSize, userText, fontFamily, userClasses, colorType, gradientDirection } from '@/atoms/text-tag-atoms'

const SearchTextComponents = () => {
    const [currentFontSize] = useAtom(fontSize);
    const [currentText] = useAtom(userText);
    const [currentFont] = useAtom(fontFamily);
    const [currentCustomStyle] = useAtom(userClasses);
    const [currentBackgroundType] = useAtom(colorType);
    const [currentGradientDirection] = useAtom(gradientDirection);

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
    }, [currentFont, currentFontSize.key, currentText, currentBackgroundType, currentGradientDirection.key, currentCustomStyle]);

    return (
        <>
            <div>
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
