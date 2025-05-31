import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { Opacity } from "@/components/constants";
import { opacity } from '@/atoms/box-tag-atoms'
import { Label } from "@/components/ui/label";

export function BoxBorderOpacity() {
    const [currentOpacity, setCurrentOpacity] = useAtom(opacity);
    const renderOptions = () => {
        return Opacity.map((opacity) => {
            return <SelectItem key={opacity.key} value={opacity.label}>{opacity.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-text-font-size">Opacity:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = Opacity.find(opacity => opacity.label == value);
                    if (foundFontSize) {
                        setCurrentOpacity(foundFontSize);
                    }
                }}
                value={currentOpacity.label}
            >
                <SelectTrigger id="select-text-font-size">
                    <SelectValue placeholder="Opacity" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
