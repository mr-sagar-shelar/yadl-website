import { atomWithStorage } from 'jotai/utils';

export const borderSize = atomWithStorage("box-border-size", {
    key: "border-none",
    label: "None"
});
export const borderStyle = atomWithStorage("box-border-style", {
    key: "border-solid",
    label: "SOLID"
});
export const borderRadius = atomWithStorage("box-border-radius", {
    key: "rounded-none",
    label: "NONE"
});
export const opacity = atomWithStorage("box-border-opacity", {
    key: "opacity-100",
    label: "100"
});
export const gradientDirection = atomWithStorage("box-color-gradient-direction", {
    key: "bg-linear-to-t",
    label: "TOP"
});
export const userClasses = atomWithStorage("box-user-classes", "");
export const colorType = atomWithStorage("box-color-type", "Solid");
