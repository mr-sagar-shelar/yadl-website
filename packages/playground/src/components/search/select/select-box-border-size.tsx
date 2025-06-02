import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { BorderSizes } from "@/components/constants";
import { borderSize } from '@/atoms/box-tag-atoms'
import { Label } from "@/components/ui/label";

export function BoxBorderSize() {
    const [currentBorderSize, setCurrentBorderSize] = useAtom(borderSize);
    const renderOptions = () => {
        return BorderSizes.map((borderSize) => {
            return <SelectItem key={borderSize.key} value={borderSize.label}>{borderSize.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-text-font-size">Border Size:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = BorderSizes.find(borderSize => borderSize.label == value);
                    if (foundFontSize) {
                        setCurrentBorderSize(foundFontSize);
                    }
                }}
                value={currentBorderSize.label}
            >
                <SelectTrigger id="select-text-font-size">
                    <SelectValue placeholder="Border Size" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
