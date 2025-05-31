import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextFontSize } from "@/components/search/select/select-text-font-size";

interface ConfigureTextProps {
    isOpen: boolean;
    onStatusChange: (isOpen: boolean) => void;
}

export function ConfigureText(props: ConfigureTextProps) {

    return (
        <Dialog open={props.isOpen}>
            <form>
                {/* <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger> */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Text configuration</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap">
                        <TextFontSize />
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => { props.onStatusChange(false) }}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" onClick={() => { props.onStatusChange(false) }}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
