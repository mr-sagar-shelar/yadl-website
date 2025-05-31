import { useMemo } from "react";
import * as Boxes from "yadl-ui-components";
import { memo } from "react";
import { BoxNames } from "@/components/constants/BoxNames";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import { userClasses, colorType, gradientDirection, borderStyle, borderRadius, borderSize, opacity } from '@/atoms/box-tag-atoms'
import { useAtom } from 'jotai'


const SearchBoxes = () => {
    const [currentCustomStyle] = useAtom(userClasses);
    const [currentBackgroundType] = useAtom(colorType);
    const [currentGradientDirection] = useAtom(gradientDirection);
    const [currentBorderStyle] = useAtom(borderStyle);
    const [currentBorderRadius] = useAtom(borderRadius);
    const [currentBorderSize] = useAtom(borderSize);
    const [currentOpacity] = useAtom(opacity);

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
                                            classes: `${boxDetails.props.classes} ${currentOpacity.key} ${currentBorderSize.key} ${currentBorderRadius.key} ${currentBorderStyle.key} ${currentCustomStyle} ${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""}`,
                                        }
                                    },
                                })
                            }
                            draggable
                        >
                            {Box && <Box {...boxDetails.props} classes={`${boxDetails.props.classes} ${currentOpacity.key} ${currentBorderSize.key} ${currentBorderRadius.key} ${currentBorderStyle.key} ${currentCustomStyle}${currentBackgroundType == "Gradient" ? " " + currentGradientDirection : ""}`} />}
                        </div>
                    );
                }
                return null;
            });
        return listItems;
    }, [currentBorderStyle.key, currentBorderRadius.key, currentBorderSize.key, currentOpacity.key, currentCustomStyle, currentBackgroundType, currentGradientDirection.key]);

    return (
        <>
            <div className="h-full" data-theme="light">
                <div className="flex flex-wrap gap-5 overflow-auto h-full">
                    {IconsComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchBoxes);
export default Memo;
