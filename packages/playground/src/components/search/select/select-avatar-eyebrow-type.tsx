import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { EyebrowType } from "@/components/constants";
import { eyebrowType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarEyebrowType() {
    const [currentFontSize, setCurrentFontSize] = useAtom(eyebrowType);
    const renderOptions = () => {
        return EyebrowType.map((eyebrowType) => {
            return <SelectItem key={eyebrowType.key} value={eyebrowType.label}>{eyebrowType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-eyebrow-type">Eyebrow Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = EyebrowType.find(eyebrowType => eyebrowType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-eyebrow-type">
                    <SelectValue placeholder="Eyebrow Type" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
