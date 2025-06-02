import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { AvatarTopTypeComponent } from "@/components/search/select/select-avatar-top-type";
import { AvatarAccessoriesType } from "@/components/search/select/select-avatar-accessories-type";
import { AvatarHairColor } from "@/components/search/select/select-avatar-hair-color";
import { AvatarFacialHairTYpe } from "@/components/search/select/select-avatar-facial-hair-type";
import { AvatarClothType } from "@/components/search/select/select-avatar-cloth-type";
import { AvatarEyeType } from "@/components/search/select/select-avatar-eye-type";
import { AvatarEyebrowType } from "@/components/search/select/select-avatar-eyebrow-type";
import { AvatarMouthType } from "@/components/search/select/select-avatar-mouth-type";
import { AvatarSkinColor } from "@/components/search/select/select-avatar-skin-color";

interface ConfigureTextProps {
    isOpen: boolean;
    onStatusChange: (isOpen: boolean) => void;
}

export function ConfigureAvatarDialog(props: ConfigureTextProps) {

    return (
        <Dialog
            open={props.isOpen}
            onOpenChange={(isOpen) => {
                props.onStatusChange(isOpen)
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Avatar Variant</DialogTitle>
                    <DialogDescription>
                        New variants added by you will be stored in your local cache and will be cleared if the cache is cleared.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="flex flex-wrap gap-5 pb-5">
                        <AvatarTopTypeComponent />
                        <AvatarAccessoriesType />
                        <AvatarHairColor />
                        <AvatarFacialHairTYpe />
                        <AvatarClothType />
                        <AvatarEyeType />
                        <AvatarEyebrowType />
                        <AvatarMouthType />
                        <AvatarSkinColor />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => { props.onStatusChange(false) }}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
