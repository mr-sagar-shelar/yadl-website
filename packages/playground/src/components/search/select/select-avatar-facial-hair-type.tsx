import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { FacialHairType } from "@/components/constants";
import { facialHairType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarFacialHairTYpe() {
    const [currentFontSize, setCurrentFontSize] = useAtom(facialHairType);
    const renderOptions = () => {
        return FacialHairType.map((facialHairType) => {
            return <SelectItem key={facialHairType.key} value={facialHairType.label}>{facialHairType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-facial-hair-type">Facial Hair Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = FacialHairType.find(facialHairType => facialHairType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-facial-hair-type">
                    <SelectValue placeholder="Facial Hair Type" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
