import { useMemo, useState } from "react";
import { memo } from "react";
import { Avatar, AvatarNames } from "yadl-avatar";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import { AvatarTopType, AccessoriesType, HairColor, FacialHairType, ClotheType, EyeType, EyebrowType, MouthType, SkinColor, CONSTANTS } from "../constants";
import type { AvatarProps } from "yadl-avatar/dist/components/AvatarComponent";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const SearchAvatars = () => {
    const [top, setTop] = useState<string>("");
    const [avatarType, setAvatarType] = useState<string>("");
    const [accessoriesType, setAccessoriesType] = useState<string>("");
    const [hairColor, setHairColor] = useState<string>("");
    const [facialHairType, setFacialHairType] = useState<string>("");
    const [clotheType, setClotheType] = useState<string>("");
    const [eyeType, setEyeType] = useState<string>("");
    const [eyebrowType, setEyebrowType] = useState<string>("");
    const [mouthType, setMouthType] = useState<string>("");
    const [skinColor, setSkinColor] = useState<string>("");
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const renderTopOptions = () => {
        return AvatarTopType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderAccessoriesType = () => {
        return AccessoriesType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderHairColor = () => {
        return HairColor.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderFacialHairType = () => {
        return FacialHairType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderClotheType = () => {
        return ClotheType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderEyeType = () => {
        return EyeType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderEyebrowType = () => {
        return EyebrowType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderMouthType = () => {
        return MouthType.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const renderSkinColor = () => {
        return SkinColor.map((item) => {
            return <option key={item.label}>{item.label}</option>
        })
    }

    const AvatarComponent = useMemo(() => {
        const customProps: AvatarProps = {
            avatarStyle: "Circle",
            width: 50,
            height: 50
        };
        if (top != "") {
            customProps["topType"] = top;
        }
        if (accessoriesType != "") {
            customProps["accessoriesType"] = accessoriesType;
        }
        if (hairColor != "") {
            customProps["hairColor"] = hairColor;
        }
        if (facialHairType != "") {
            customProps["facialHairType"] = facialHairType;
        }
        if (clotheType != "") {
            customProps["clotheType"] = clotheType;
        }
        if (eyeType != "") {
            customProps["eyeType"] = eyeType;
        }
        if (eyebrowType != "") {
            customProps["eyebrowType"] = eyebrowType;
        }
        if (mouthType != "") {
            customProps["mouthType"] = mouthType;
        }
        if (skinColor != "") {
            customProps["skinColor"] = skinColor;
        }
        if (avatarType != "") {
            customProps["avatarStyle"] = avatarType;
        }

        const listItems = Object.entries(AvatarNames)
            .map((text) => {
                const [key, textDetails] = text;
                return (
                    <div
                        key={key}
                        className={`m-2 cursor-grab px-5 size-[${CONSTANTS.iconPreviewSize}px]`}
                        onDragStart={(event) =>
                            onDragStart(event, {
                                type: "avatar",
                                data: {
                                    ...textDetails as AvatarProps,
                                    ...customProps,
                                    width: CONSTANTS.iconDropSize,
                                    height: CONSTANTS.iconDropSize
                                },
                            })
                        }
                        draggable
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <Avatar
                                    {...textDetails as AvatarProps}
                                    {...customProps}
                                    width={CONSTANTS.iconPreviewSize}
                                    height={CONSTANTS.iconPreviewSize}
                                />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-[200px] h-[200px]">
                                <Avatar
                                    {...textDetails as AvatarProps}
                                    {...customProps}
                                    width={CONSTANTS.iconHoverSize}
                                    height={CONSTANTS.iconHoverSize}
                                />
                            </HoverCardContent>
                        </HoverCard>

                    </div>
                );
            });
        return listItems;
    }, [top, accessoriesType, hairColor, facialHairType, clotheType, eyeType, eyebrowType, mouthType, skinColor, avatarType]);

    return (
        <>
            <div>

                <div className="flex flex-wrap gap-5 pb-5">
                    <fieldset className="fieldset flex">
                        <legend className="fieldset-legend">Avatar Style</legend>
                        <input type="radio" name="radio-1" className="radio" defaultChecked onClick={() => setAvatarType("Circle")} /> Circle
                        <input type="radio" name="radio-1" className="radio" onClick={() => setAvatarType("Transparent")} /> Transparent
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Font Size</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setTop(event.target.value);
                        }}>
                            {renderTopOptions()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Accessories Type</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setAccessoriesType(event.target.value);
                        }}>
                            {renderAccessoriesType()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Hair Color</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setHairColor(event.target.value);
                        }}>
                            {renderHairColor()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Facial Hair Type</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setFacialHairType(event.target.value);
                        }}>
                            {renderFacialHairType()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Cloth Type</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setClotheType(event.target.value);
                        }}>
                            {renderClotheType()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Eye Type</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setEyeType(event.target.value);
                        }}>
                            {renderEyeType()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Eyebrow Type</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setEyebrowType(event.target.value);
                        }}>
                            {renderEyebrowType()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Mouth Type</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setMouthType(event.target.value);
                        }}>
                            {renderMouthType()}
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Skin Color</legend>
                        <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setSkinColor(event.target.value);
                        }}>
                            {renderSkinColor()}
                        </select>
                    </fieldset>

                </div>
                <div
                    className={`flex flex-wrap overflow-auto w-full h-full`}
                >
                    {AvatarComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchAvatars);
export default Memo;
