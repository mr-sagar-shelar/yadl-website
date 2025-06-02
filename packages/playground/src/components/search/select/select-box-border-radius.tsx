import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { BorderRadius } from "@/components/constants";
import { borderRadius } from '@/atoms/box-tag-atoms'
import { Label } from "@/components/ui/label";

export function BoxBorderRadius() {
    const [currentBorderRadius, setCurrentBorderRadius] = useAtom(borderRadius);
    const renderOptions = () => {
        return BorderRadius.map((borderRadius) => {
            return <SelectItem key={borderRadius.key} value={borderRadius.label}>{borderRadius.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-box-border-radius">Border Radius:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = BorderRadius.find(borderRadius => borderRadius.label == value);
                    if (foundFontSize) {
                        setCurrentBorderRadius(foundFontSize);
                    }
                }}
                value={currentBorderRadius.label}
            >
                <SelectTrigger id="select-box-border-radius">
                    <SelectValue placeholder="Border Radius" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
