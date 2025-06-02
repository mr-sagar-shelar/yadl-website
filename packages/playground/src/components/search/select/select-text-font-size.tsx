import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { FontSizes } from "@/components/constants";
import { fontSize } from '@/atoms/text-tag-atoms'
import { Label } from "@/components/ui/label";

export function TextFontSize() {
    const [currentFontSize, setCurrentFontSize] = useAtom(fontSize);
    const renderOptions = () => {
        return FontSizes.map((fontSize) => {
            return <SelectItem key={fontSize.key} value={fontSize.label}>{fontSize.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-text-font-size">Font Size:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = FontSizes.find(fontSize => fontSize.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-text-font-size">
                    <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
