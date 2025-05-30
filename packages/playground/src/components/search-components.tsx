import { Minus, Plus, X } from "lucide-react"
import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import SearchSkillIcons from "./search-skill-icons";


const data = {
  navMain: [
    {
      title: "Aws",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Azure",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "GCP",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Skill",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "Text",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
    {
      title: "Box",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
    {
      title: "Avatar",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
}

export function SearchComponents() {
  return (
    <>
      <SidebarContent className="gap-0">
        <SearchForm />
        {/* <ScrollArea className="h-90%"> */}
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible
              key={"aws-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    AWS Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <X className="m-1 hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ScrollArea className="h-70">
                    <SearchSkillIcons />
                  </ScrollArea>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"azure-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Azure Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <X className="m-1 hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ScrollArea className="h-70">
                    <SearchSkillIcons />
                  </ScrollArea>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"gcp-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Gcp Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <X className="m-1 hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ScrollArea className="h-70">
                    <SearchSkillIcons />
                  </ScrollArea>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            {/* {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                      <Trash2 />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ScrollArea className="h-72 w-48 p-2">
                      <h3> Icons Here</h3>
                    </ScrollArea>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))} */}
          </SidebarMenu>
        </SidebarGroup>
        {/* </ScrollArea> */}
      </SidebarContent>
      <div className="p-1 absolute bottom-0">
        <Button variant="secondary" >
          <Plus /> More Shapes
        </Button>
      </div>
    </>
  )
}
