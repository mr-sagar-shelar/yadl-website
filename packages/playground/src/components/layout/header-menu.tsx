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
import { useAtom } from 'jotai'
import { codeVisible, searchShapesVisible, previewTheme } from '@/atoms/application-config-atoms'
import { ThemeNames } from "@/components/constants/ThemeNames";

export function HeaderMenu() {
    const [isCodeVisible, setCodeVisible] = useAtom(codeVisible);
    const [isSearchShapesVisible, setSearchShapesVisible] = useAtom(searchShapesVisible);
    const [currentPreviewTheme, setPreviewTheme] = useAtom(previewTheme);

    const renderThemeNames = () => {
        return ThemeNames.map(theme =>
            <MenubarRadioItem
                key={theme.value}
                value={theme.title}
                onClick={() => {
                    setPreviewTheme(theme)
                }}
            >
                {theme.title}
            </MenubarRadioItem>
        )
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
                    <MenubarCheckboxItem
                        checked={isCodeVisible}
                        onClick={() => setCodeVisible(!isCodeVisible)}
                    >
                        Code
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                        checked={isSearchShapesVisible}
                        onClick={() => setSearchShapesVisible(!isSearchShapesVisible)}
                    >
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
                        <MenubarRadioGroup
                            value={currentPreviewTheme.title}
                        >
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
