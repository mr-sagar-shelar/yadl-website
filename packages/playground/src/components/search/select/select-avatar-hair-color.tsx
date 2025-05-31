import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { HairColor } from "@/components/constants";
import { hairColor } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarHairColor() {
    const [currentFontSize, setCurrentFontSize] = useAtom(hairColor);
    const renderOptions = () => {
        return HairColor.map((hairColor) => {
            return <SelectItem key={hairColor.key} value={hairColor.label}>{hairColor.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-hair-color">Hair Color:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = HairColor.find(hairColor => hairColor.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-hair-color">
                    <SelectValue placeholder="Hair Color" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
