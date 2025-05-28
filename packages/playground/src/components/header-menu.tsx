import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ScrollArea } from "@/components/ui/scroll-area"

export function HeaderMenu() {
    const themeNames = [
        "Light",
        "Dark",
        "Cupcake",
        "Bumblebee",
        "Emerald",
        "Corporate",
        "Synthwave",
        "Retro",
        "Cyberpunk",
        "Valentine",
        "Halloween",
        "Harden",
        "Forest",
        "Aqua",
        "Lofi",
        "Pastel",
        "Fantasy",
        "Wireframe",
        "Black",
        "Luxury",
        "Dracula",
        "Cmyk",
        "Autumn",
        "Ausiness",
        "Acid",
        "Lemonade",
        "Night",
        "Coffee",
        "Winter",
        "Dim",
        "Nord",
        "Sunset",
        "Caramellatte",
        "Abyss",
        "Silk"
    ];

    const renderThemeNames = () => {
        return themeNames.map(theme => <MenubarRadioItem key={theme} value={theme}>{theme}</MenubarRadioItem>)
    }

    return (
        <Menubar className="border-0 shadow-none">
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarItem>Copy code</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Email link</MenubarItem>
                            <MenubarItem>Messages</MenubarItem>
                            <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Configurations... <MenubarShortcut>⌘C</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Export</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>JPG</MenubarItem>
                    <MenubarItem>WEBP</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>MP4</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Capture Screen</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Convert to MP4.</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem checked>Code</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                        Shapes
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Theme</MenubarTrigger>
                <MenubarContent>
                    <ScrollArea className="h-72 w-48">
                        <MenubarRadioGroup value="Light">
                            {renderThemeNames()}
                        </MenubarRadioGroup>
                    </ScrollArea>
                    <MenubarSeparator />
                    <MenubarItem inset>Make your theme.</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
