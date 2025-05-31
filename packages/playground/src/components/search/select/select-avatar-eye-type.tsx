import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { EyeType } from "@/components/constants";
import { eyeType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarEyeType() {
    const [currentFontSize, setCurrentFontSize] = useAtom(eyeType);
    const renderOptions = () => {
        return EyeType.map((eyeType) => {
            return <SelectItem key={eyeType.key} value={eyeType.label}>{eyeType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-eye-type">Eye Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = EyeType.find(eyeType => eyeType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-eye-type">
                    <SelectValue placeholder="Eye Type" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
