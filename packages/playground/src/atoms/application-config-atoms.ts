import { atomWithStorage } from 'jotai/utils';

export const codeVisible = atomWithStorage("app-code-visible", true);
export const searchShapesVisible = atomWithStorage("app-search-shapes-visible", true);

export const previewTheme = atomWithStorage("app-preview-theme", {
    value: "light",
    title: "Light"
});
