import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { ClotheType } from "@/components/constants";
import { clotheType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarClothType() {
    const [currentFontSize, setCurrentFontSize] = useAtom(clotheType);
    const renderOptions = () => {
        return ClotheType.map((clotheType) => {
            return <SelectItem key={clotheType.key} value={clotheType.label}>{clotheType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-cloth-type">Clothe Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = ClotheType.find(clotheType => clotheType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-cloth-type">
                    <SelectValue placeholder="Clothe Type" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
