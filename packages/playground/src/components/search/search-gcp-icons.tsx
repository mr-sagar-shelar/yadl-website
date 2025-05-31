import { useMemo } from "react";
import * as GcpIcons from "yadl-gcp-icons";
import { GCPIconNames } from "yadl-gcp-icons";
import { memo } from "react";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import { CONSTANTS } from '@/components/constants';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const SearchSkillIcons = () => {
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const IconsComponent = useMemo(() => {
        const listItems = Object.entries(GCPIconNames)
            .map((icons) => {
                const [key, iconDetails] = icons;
                // @ts-ignore
                let Icon = GcpIcons[iconDetails.icon];
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
                                        category: "gcp",
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

const Memo = memo(SearchSkillIcons);
export default Memo;
