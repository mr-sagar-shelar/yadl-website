import { useMemo } from "react";
import * as AzureIcons from "yadl-azure-icons";
import { AzureIconNames } from "yadl-azure-icons";
import { memo } from "react";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import { CONSTANTS } from '@/components/constants';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const SearchAzureIcons = () => {
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const IconsComponent = useMemo(() => {
        const listItems = Object.entries(AzureIconNames)
            .map((icons) => {
                const [key, iconDetails] = icons;
                // @ts-ignore
                let Icon = AzureIcons[iconDetails.icon];
                if (Icon) {
                    return (
                        <div
                            key={key}
                            className="dndnode m-2"
                            onDragStart={(event) =>
                                onDragStart(event, {
                                    type: "icon",
                                    data: {
                                        icon: `${key}`,
                                        category: "azure",
                                        width: CONSTANTS.iconDropSize,
                                        height: CONSTANTS.iconDropSize
                                    },
                                })
                            }
                            draggable
                        >
                            {Icon &&
                                <>
                                    <HoverCard>
                                        <HoverCardTrigger><Icon width={CONSTANTS.iconPreviewSize} height={CONSTANTS.iconPreviewSize} /></HoverCardTrigger>
                                        <HoverCardContent className="w-[200px] h-[210px]">
                                            <Icon width={CONSTANTS.iconHoverSize} height={CONSTANTS.iconHoverSize} />
                                            <div className="text-center">
                                                {iconDetails.name}
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </>
                            }
                        </div>
                    );
                }
                return null;
            });
        return listItems;
    }, []);
    return (
        <>
            <div className="flex flex-wrap">
                {IconsComponent}
            </div>
        </>
    );
};

const Memo = memo(SearchAzureIcons);
export default Memo;
