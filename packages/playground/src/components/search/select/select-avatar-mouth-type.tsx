import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { MouthType } from "@/components/constants";
import { mouthType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarMouthType() {
    const [currentFontSize, setCurrentFontSize] = useAtom(mouthType);
    const renderOptions = () => {
        return MouthType.map((mouthType) => {
            return <SelectItem key={mouthType.key} value={mouthType.label}>{mouthType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-mouth-type">Mouth Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = MouthType.find(mouthType => mouthType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-mouth-type">
                    <SelectValue placeholder="Mouth Type" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
