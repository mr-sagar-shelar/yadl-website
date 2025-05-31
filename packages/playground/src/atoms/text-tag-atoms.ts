import { atomWithStorage } from 'jotai/utils';

export const fontSize = atomWithStorage("text-font-size", {
    key: "text-2xl",
    label: "2XL"
});
export const userText = atomWithStorage("text-user-text", "Lorem ipsum dolor sit amet");
export const userClasses = atomWithStorage("text-user-classes", "");
export const fontFamily = atomWithStorage("text-font-family", "Audiowide");
