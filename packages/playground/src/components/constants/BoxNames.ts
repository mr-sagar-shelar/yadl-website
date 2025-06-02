export interface BoxDetails {
    name: string;
    component: string;
    type?: string;
    props: any;
}
export interface BoxNames {
    [key: string]: BoxDetails;
}

export const BoxNames: BoxNames = {
    boxPrimary: {
        name: "Primary",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-primary"
        },
    },
    boxPrimaryContent: {
        name: "Primary Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-primary-content"
        },
    },
    boxSecondary: {
        name: "Secondary",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-secondary"
        },
    },
    boxSecondaryContent: {
        name: "Secondary Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-secondary-content"
        },
    },
    boxAccent: {
        name: "Accent",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-accent"
        },
    },
    boxAccentContent: {
        name: "Accent Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-accent-content"
        },
    },
    boxNeutral: {
        name: "Neutral",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-neutral"
        },
    },
    boxNeutralContent: {
        name: "Neutral Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-neutral-content"
        },
    },
    boxInfo: {
        name: "Info",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-info"
        },
    },
    boxInfoContent: {
        name: "Info Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-info-content"
        },
    },
    boxSuccess: {
        name: "Success",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-success"
        },
    },
    boxSuccessContent: {
        name: "Success Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-success-content"
        },
    },
    boxWarning: {
        name: "Warning",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-warning"
        },
    },
    boxWarningContent: {
        name: "Warning Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-warning-content"
        },
    },
    boxError: {
        name: "Error",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-error"
        },
    },
    boxErrorContent: {
        name: "Error Content",
        component: "Box1",
        type: "Solid",
        props: {
            height: 100,
            width: 100,
            classes: "bg-error-content"
        },
    },
    boxGradient1: {
        name: "Gradient 1",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-red-500 via-orange-500 to-yellow-500"
        },
    },
    boxGradient2: {
        name: "Gradient 2",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-cyan-700 via-blue-500 to-indigo-600"
        },
    },
    boxGradient3: {
        name: "Gradient 3",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-indigo-500 via-purple-500 to-pink-500"
        },
    },
    boxGradient4: {
        name: "Gradient 4",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-pink-500 via-red-500 to-orange-500"
        },
    },
    boxGradient5: {
        name: "Gradient 5",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-cyan-400 via-blue-400 to-indigo-400"
        },
    },
    boxGradient6: {
        name: "Gradient 6",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-yellow-500 via-orange-500 to-red-500"
        },
    },
    boxGradient7: {
        name: "Gradient 7",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-green-500 via-emerald-500 to-teal-500"
        },
    },
    boxGradient8: {
        name: "Gradient 8",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-amber-500 via-orange-500 to-red-500"
        },
    },
    boxGradient9: {
        name: "Gradient 9",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-blue-500 via-cyan-500 to-teal-500"
        },
    },
    boxGradient10: {
        name: "Gradient 10",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-purple-500 via-indigo-500 to-blue-500"
        },
    },
    boxGradient11: {
        name: "Gradient 11",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  "
        },
    },
    boxGradient12: {
        name: "Gradient 12",
        component: "Box1",
        type: "Gradient",
        props: {
            height: 100,
            width: 100,
            classes: "from-rose-500 via-pink-500 to-red-500"
        },
    }
};
