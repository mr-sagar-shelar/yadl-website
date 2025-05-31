import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAtom } from 'jotai'
import { AccessoriesType } from "@/components/constants";
import { accessoriesType } from '@/atoms/avatar-tag-atoms'
import { Label } from "@/components/ui/label";

export function AvatarAccessoriesType() {
    const [currentFontSize, setCurrentFontSize] = useAtom(accessoriesType);
    const renderOptions = () => {
        return AccessoriesType.map((accessoriesType) => {
            return <SelectItem key={accessoriesType.key} value={accessoriesType.label}>{accessoriesType.label}</SelectItem>
        })
    }

    return (
        <div className="grid gap-3">
            <Label htmlFor="select-avatar-accessories-type">Accessories Type:</Label>
            <Select
                onValueChange={(value: string) => {
                    const foundFontSize = AccessoriesType.find(accessoriesType => accessoriesType.label == value);
                    if (foundFontSize) {
                        setCurrentFontSize(foundFontSize);
                    }
                }}
                value={currentFontSize.label}
            >
                <SelectTrigger id="select-avatar-accessories-type">
                    <SelectValue placeholder="Accessories Type" />
                </SelectTrigger>
                <SelectContent>
                    {renderOptions()}
                </SelectContent>
            </Select>
        </div>
    )
}
