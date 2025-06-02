import { atomWithStorage } from 'jotai/utils';

export const avatarStyle = atomWithStorage("avatar-top-type", "Solid");
export const topType = atomWithStorage("avatar-font-size", {
    key: "LongHairStraight",
    label: "LongHairStraight"
});
export const accessoriesType = atomWithStorage("avatar-accessories-type", {
    "key": "Blank",
    "label": "Blank"
});
export const hairColor = atomWithStorage("avatar-hair-color", {
    "key": "Auburn",
    "label": "Auburn"
});
export const facialHairType = atomWithStorage("avatar-facial-hair-color", {
    "key": "Blank",
    "label": "Blank"
});
export const clotheType = atomWithStorage("avatar-cloth-type", {
    "key": "BlazerShirt",
    "label": "BlazerShirt"
});
export const eyeType = atomWithStorage("avatar-eye-type", {
    "key": "Default",
    "label": "Default"
});
export const eyebrowType = atomWithStorage("avatar-eyebrow-type", {
    "key": "Default",
    "label": "Default"
});
export const mouthType = atomWithStorage("avatar-mouth-type", {
    "key": "Default",
    "label": "Default"
});
export const skinColor = atomWithStorage("avatar-skin-color", {
    "key": "Yellow",
    "label": "Yellow"
});
