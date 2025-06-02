import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { GradientDirection } from "@/components/constants";
import { gradientDirection } from '@/atoms/text-tag-atoms'
import { Label } from "@/components/ui/label";

export function TextColorGradient() {
    const [currentGradientDirection, setCurrentGradientDirection] = useAtom(gradientDirection);
    const renderOptions = () => {
        return GradientDirection.map((gradientDirection) => {
            return <SelectItem key={gradientDirection.key} value={gradientDirection.label}>{gradientDirection.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-text-font-size">Gradient Direction:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundItem = GradientDirection.find(gradientDirection => gradientDirection.label == value);
                    if (foundItem) {
                        setCurrentGradientDirection(foundItem);
                    }
                }}
                value={currentGradientDirection.label}
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
