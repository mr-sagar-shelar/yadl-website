import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { colorType } from '@/atoms/text-tag-atoms'
import { Label } from "@/components/ui/label";

export function TextColorType() {
    const [currentColorType, setCurrentColorType] = useAtom(colorType);

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-text-font-size">Color Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    setCurrentColorType(value);
                }}
                value={currentColorType}
            >
                <SelectTrigger id="select-text-font-size">
                    <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem key={"Solid"} value={"Solid"}>Solid</SelectItem>
                    <SelectItem key={"Gradient"} value={"Gradient"}>Gradient</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
