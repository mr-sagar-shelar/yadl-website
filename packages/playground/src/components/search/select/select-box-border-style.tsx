import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { BorderStyles } from "@/components/constants";
import { borderStyle } from '@/atoms/box-tag-atoms'
import { Label } from "@/components/ui/label";

export function BoxBorderStyle() {
    const [currentBorderStyle, setCurrentBorderStyle] = useAtom(borderStyle);
    const renderOptions = () => {
        return BorderStyles.map((borderStyle) => {
            return <SelectItem key={borderStyle.key} value={borderStyle.label}>{borderStyle.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-text-font-size">Border Style:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = BorderStyles.find(borderStyle => borderStyle.label == value);
                    if (foundFontSize) {
                        setCurrentBorderStyle(foundFontSize);
                    }
                }}
                value={currentBorderStyle.label}
            >
                <SelectTrigger id="select-text-font-size">
                    <SelectValue placeholder="Border Style" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
