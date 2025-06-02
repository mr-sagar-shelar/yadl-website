import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextFontSize } from "@/components/search/select/select-text-font-size";
import { TextColorType } from "@/components/search/select/select-text-color-type";
import { TextColorGradient } from "@/components/search/select/select-text-color-gradient-direction";
import { useAtom } from 'jotai'
import { userText, userClasses, fontFamily, colorType } from '@/atoms/text-tag-atoms'
import FontPicker from "react-fontpicker-ts";

interface ConfigureTextProps {
    isOpen: boolean;
    onStatusChange: (isOpen: boolean) => void;
}

export function ConfigureTextDialog(props: ConfigureTextProps) {
    const [currentUserText, setCurrentUserText] = useAtom(userText);
    const [currentClasses, setCurrentClasses] = useAtom(userClasses);
    const [currentFontFamily, setCurrentFontFamily] = useAtom(fontFamily);
    const [currentColorType] = useAtom(colorType);

    return (
        <Dialog
            open={props.isOpen}
            onOpenChange={(isOpen) => {
                props.onStatusChange(isOpen)
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Text Variant</DialogTitle>
                    <DialogDescription>
                        New variants added by you will be stored in your local cache and will be cleared if the cache is cleared.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="user-text">Text</Label>
                        <Input
                            id="user-text"
                            value={currentUserText}
                            onChange={(event) => {
                                setCurrentUserText(event.target.value);
                            }}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="user-text-font-family">Font Family</Label>
                        <FontPicker
                            id="user-text-font-family"
                            defaultValue={currentFontFamily}
                            autoLoad
                            value={(fontFamily: string) => setCurrentFontFamily(fontFamily)}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="user-custom-classes">Classes</Label>
                        <Input
                            id="user-custom-classes"
                            value={currentClasses}
                            onChange={(event) => {
                                setCurrentClasses(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap gap-5 pb-5">
                        <TextFontSize />
                        <TextColorType />
                        {currentColorType == "Gradient" && <TextColorGradient />}
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => { props.onStatusChange(false) }}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
