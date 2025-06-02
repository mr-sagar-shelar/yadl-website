import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { AvatarTopType } from "@/components/constants";
import { topType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarTopTypeComponent() {
    const [currentFontSize, setCurrentFontSize] = useAtom(topType);
    const renderOptions = () => {
        return AvatarTopType.map((topType) => {
            return <SelectItem key={topType.key} value={topType.label}>{topType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-top-type">Top:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = AvatarTopType.find(topType => topType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-top-type">
                    <SelectValue placeholder="top" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
