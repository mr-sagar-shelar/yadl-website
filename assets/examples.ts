interface CodeExample {
    name: string;
    description?: string;
    code: string;
}
export const Examples: CodeExample[] = [
    {
        "name": "Tags",
        "description": "",
        "code":
            `<Aws
      id : "AWS1"
      dimension: { height : 50 width : 50 }
      position: { x : 0 y : 10 }
      icon : aWSAnalyticsAthena
/>
<Azure
      id : "Azure1"
      dimension: { height : 50 width : 50 }
      position: { x : 50 y : 10 }
      icon : azureAnalyticsAnalysisServices
/>
<Gcp
      id : "Gcp1"
      dimension: { height : 50 width : 50 }
      position: { x : 100 y : 10 }
      icon : gCPAccessContextManager
/>
<Skill
      id : "Skill1"
      dimension: { height : 50 width : 50 }
      position: { x : 150 y : 10 }
      icon : skillIconBabel
/>
<Themeisle
      id : "Themeisle1"
      dimension: { height : 50 width : 50 }
      position: { x : 200 y : 10 }
      icon : themeisle101
/>
<Undraw
      id : "Undraw1"
      dimension: { height : 50 width : 50 }
      position: { x : 250 y : 10 }
      icon : undrawADayOff
/>
<Author
      id : "Author1"
      fontFamily : "Sarif"
      profileHandle : "@Sagar"
      profilePic : "https://www.google.com"
      classes : ""
      dimension: { height : 10 width : 10 }
      position: { x : 10 y : 10 }
/>
<Avatar
        id : "Avatar1"
      accessoriesType : Blank
      classes : ""
      clotheType : BlazerShirt
      eyeType : Close
      eyebrowType : Angry
      facialHairType : BeardLight
      fontFamily : "sdf"
      graphicType : Bat
      hairColor : Auburn
      mouthType : Concerned
      skinColor : Black
      style : Circle
      topType : Hat
      dimension: { height : 100 width : 100 }
      position: { x : 10 y : 100 }
/>
<Box
      id : "Box1"
      classes : "from-amber-500 via-orange-500 to-red-500 opacity-100 border-1 rounded-none border-solid  bg-linear-to-t"
      type : Box1
      dimension: { height : 100 width : 100 }
      position: { x : 130 y : 100 }
/>
<Text
      id : "Text1"
      classes : "mx-auto break-words truncate from-pink-500 to-yellow-500 bg-clip-text text-transparent text-3xl bg-linear-to-t "
      fontFamily : "Black Ops One"
      text : "Hello world"
      dimension: { height : 30 width : 200 }
      position: { x : 10 y : 200 }
/>
<Edge
      classes : ""
      label : "Label 1"
      style: "{ 'stroke': 'pink' }"
      labelStyle : "{ 'fill': 'pink', 'fontWeight': 700 }"
      source : "Themeisle1"
      sourceHandle : bottom
      target : "Avatar1"
      targetHandle : left
      type : step
/>
<Edge
      classes : ""
      label : "Label 1"
      style: "{ 'stroke': 'red' }"
      labelStyle : "{ 'fill': 'red', 'fontWeight': 700 }"
      source : "AWS1"
      sourceHandle : bottom
      target : "Skill1"
      targetHandle : bottom
      type : smoothstep
/>
`
    },
    {
        "name": "Edge Example",
        "description": "",
        "code":
            `
<Skill
      id : "SkillActivityPub"
      dimension: { height : 50 width : 50 }
      position: { x : 15 y : 35 }
      icon : skillIconDevTo
/>
<Gcp
      id : "GcpAnthos"
      dimension: { height : 50 width : 50 }
      position: { x : 193 y : 177 }
      icon : gCPAnthos
/>
<Azure
      id : "AzureAI"
      dimension: { height : 50 width : 50 }
      position: { x : -199 y : -107 }
      icon : azureAnalyticsAzureWorkbooks
/>
<Skill
      id : "SkillAngular"
      dimension: { height : 50 width : 50 }
      position: { x : 202 y : -101 }
      icon : skillIconDiscordJS
/>
<Skill
      id : "SkillAtom"
      dimension: { height : 50 width : 50 }
      position: { x : -196 y : 161 }
      icon : skillIconDebian
/>

<Edge
      label : "smooth edge"
      style: "{ 'stroke': 'pink' }"
      labelStyle : "{ 'fill': 'pink', 'fontWeight': 700 }"
      source : "SkillActivityPub"
      target : "GcpAnthos"
      sourceHandle : right
      type : smoothstep
/>
<Edge
      label : "straight edge"
      style: "{ 'stroke': 'red' }"
      labelStyle : "{ 'fill': 'red', 'fontWeight': 700 }"
      source : "SkillActivityPub"
      target : "AzureAI"
      sourceHandle : left
      targetHandle : bottom
      type : straight
/>
<Edge
      label : "straight edge"
      style: "{ 'stroke': 'green' }"
      source : "SkillActivityPub"
      target : "SkillAngular"
      targetHandle : left
      type : step
/>
<Edge
      label : "straight edge"
      style: "{ 'stroke': 'blue' }"
      source : "SkillActivityPub"
      target : "SkillAtom"
      sourceHandle : bottom
      targetHandle : right
      type : default
/>
`
    },
    {
        "name": "Fonts Example",
        "description": "",
        "code":
            `
text "AUTOWIDWe" { position { x: -138 y: -18 } dimension { width: 205 height: 33 }  fontFamily: "Audiowide" classes: "text-wrap mx-auto break-words truncate text-primary text-2xl " }
text "Bagel Fat One" { position { x: -134 y: 24 } dimension { width: 195 height: 41 }  fontFamily: "Bagel Fat One" classes: "text-wrap mx-auto break-words truncate text-primary text-2xl " }
text "Beth Ellen" { position { x: -137 y: 75 } dimension { width: 191 height: 44 }  fontFamily: "Beth Ellen" classes: "text-wrap mx-auto break-words truncate text-primary text-2xl " }
text "Bruno Ace" { position { x: -144 y: 124 } dimension { width: 219 height: 35 }  fontFamily: "Bruno Ace" classes: "text-wrap mx-auto break-words truncate text-primary text-2xl " }
text "Bubblegum Sans" { position { x: -141 y: 172 } dimension { width: 216 height: 57 }  fontFamily: "Bubblegum Sans" classes: "text-wrap mx-auto break-words truncate text-primary text-2xl " }
// text "Barriecito" { position { x: -152 y: 211 } dimension { width: 216 height: 57 }  fontFamily: "Barriecito" classes: "text-wrap mx-auto break-words truncate text-primary text-2xl " }
`
    },
    {
        "name": "Avatars Example",
        "description": "",
        "code":
            `
<Avatar
      id : "AVATAR"
      accessoriesType : Sunglasses
      clotheType : GraphicShirt
      eyeType : Close
      eyebrowType : Angry
      facialHairType : BeardLight
      fontFamily : "sdf"
      graphicType : Bat
      hairColor : Blonde
      mouthType : Grimace
      skinColor : DarkBrown
      style : Circle
      topType : LongHairCurly
      dimension: { height : 100 width : 100 }
      position: { x : 10 y : 0 }
/>
// avatar "AVATAR" style: Circle topType: LongHairCurly accessoriesType: Sunglasses hairColor: Blonde facialHairType: BeardMedium clotheType: GraphicShirt eyeType: Hearts eyebrowType: Angry mouthType: Grimace skinColor: DarkBrown { position { x: -152 y: 211 } dimension { width: 216 height: 57 }}
`
    },
    {
        "name": "Z Index Example",
        "description": "",
        "code":
            `
undraw-icon undrawPhoneCall { position { x: -233 y: -264 } dimension { width: 470 height: 470 } }
skill-icon skillIconActivityPub { position { x: -137 y: -144 } dimension { width: 136 height: 136 } }
skill-icon skillIconC { position { x: -54 y: -93 } dimension { width: 113 height: 113 } }
skill-icon skillIconDjango { position { x: -144 y: -27 } dimension { width: 110 height: 110 } }
skill-icon skillIconFortran { position { x: -49 y: -16 } dimension { width: 123 height: 123 } }
text "Z Index Example Z Index Example Z Index Example " { position { x: -362 y: -14 } fontFamily: "Audiowide" classes: "mx-auto break-words truncate bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-2xl" }

`
    },
    {
        "name": "Boxes Example",
        "description": "",
        "code":
            `

skill-icon skillIconActivityPub { position { x: -22 y: 21 } dimension { width: 50 height: 50 } }
box Box1 { position { x: -61 y: -37 } dimension { width: 81 height: 82 } classes: "bg-primary opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 77 y: -35 } dimension { width: 93 height: 139 } classes: "bg-primary-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 221 y: -31 } dimension { width: 64 height: 62 } classes: "bg-secondary opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 251 y: 27 } dimension { width: 186 height: 67 } classes: "bg-secondary-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: -11 y: 157 } dimension { width: 54 height: 44 } classes: "bg-accent opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 113 y: 130 } dimension { width: 65 height: 54 } classes: "bg-accent-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 200 y: 102 } dimension { width: 99 height: 166 } classes: "bg-warning opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 329 y: 128 } dimension { width: 95 height: 33 } classes: "bg-warning-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 257 y: -179 } dimension { width: 100 height: 100 } classes: "bg-secondary-content opacity-100 border-2 rounded-e-full border-dashed border-blue-500" }
box Box1 { position { x: 222 y: 185 } dimension { width: 100 height: 100 } classes: "bg-secondary-content opacity-50 border-2 rounded-e-full border-dashed border-blue-500" }

`
    }
]