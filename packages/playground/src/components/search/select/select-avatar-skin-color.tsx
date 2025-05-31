import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { SkinColor } from "@/components/constants";
import { skinColor } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarSkinColor() {
    const [currentFontSize, setCurrentFontSize] = useAtom(skinColor);
    const renderOptions = () => {
        return SkinColor.map((skinColor) => {
            return <SelectItem key={skinColor.key} value={skinColor.label}>{skinColor.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-skin-color">Skin Color:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = SkinColor.find(skinColor => skinColor.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-skin-color">
                    <SelectValue placeholder="Skin Color" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
