---
title: "Mixed components example"
meta_title: "Mixed components example"
description: "Mixed components example"
image: "/images/Diagram3.gif"
categories: ["Software"]
author: "Sagar Shelar"
tags: ["software", "tailwind"]
hideHeader: true
draft: false
---

{{< yadlEditor code=
`// Simple Example
<Aws
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
<Author src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" 
      position: { x: -5 y: -102 } 
      dimension: { width: 221 height: 85 }
      classes: "shrink-0 group block flex items-center gap-4 bg-base-300 rounded-2xl p-2"
      name: "John Doe" 
      caption: "Frontend Engineer" 
      nameClasses: "text-base-content text-xl font-semibold"
      captionClasses: "text-base-content/50 text-sm"
      imageClasses: "inline-block relative object-cover object-center !rounded-full border border-warning p-0.5" 
      nameFontFamily: "ADLaM Display"
      captionFontFamily: "Agbalumo"
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
      source : "Themeisle1"
      sourceHandle : bottom
      target : "Avatar1"
      targetHandle : left
      type : step
/>
<Edge
      classes : ""
      label : "Label 1"
      source : "AWS1"
      sourceHandle : bottom
      target : "Skill1"
      targetHandle : bottom
      type : smoothstep
/>
` >}}