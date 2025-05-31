import { Minus, Plus, Cog } from "lucide-react"
import { SearchForm } from "@/components/search/search-form"
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
import SearchAwsIcons from "./search-aws-icons";
import SearchSkillIcons from "./search-skill-icons";
import SearchAzureIcons from "./search-azure-icons";
import SearchGcpIcons from "./search-gcp-icons";
import SearchTextComponents from "./search-text-components";
import SearchBoxComponents from "./search-box-components";
import SearchAvatars from "./search-avatars";
import { ConfigureTextDialog } from "./dialogs/configure-text-dialog";
import { ConfigureBoxDialog } from "./dialogs/configure-box-dialog";
import { ConfigureAvatarDialog } from "./dialogs/configure-avatar-dialog";
import { useState } from "react";


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
  let [configureTextDialogOpen, setConfigureTextDialogOpen] = useState<boolean>(false);
  let [configureBoxDialogOpen, setConfigureBoxDialogOpen] = useState<boolean>(false);
  let [configureAvatarDialogOpen, setConfigureAvatarDialogOpen] = useState<boolean>(false);

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
                    {/* <X className="m-1 hover:bg-primary hover:text-secondary" /> */}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchAwsIcons />
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
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchAzureIcons />
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
                    GCP Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchGcpIcons />
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"skill-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Skill Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchSkillIcons />
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"text-components"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Text
                    <Cog onClick={(event) => { setConfigureTextDialogOpen(true); event.preventDefault(); }} className="m-1 ml-auto hover:bg-primary hover:text-secondary" />
                    <Plus className="m-1 group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchTextComponents />
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"text-components"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Box
                    <Cog onClick={(event) => { setConfigureBoxDialogOpen(true); event.preventDefault(); }} className="m-1 ml-auto hover:bg-primary hover:text-secondary" />
                    <Plus className="m-1 group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchBoxComponents />
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"text-components"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Avatar
                    <Cog onClick={(event) => { setConfigureAvatarDialogOpen(true); event.preventDefault(); }} className="m-1 ml-auto hover:bg-primary hover:text-secondary" />
                    <Plus className="m-1 group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SearchAvatars />
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
      {/* <div className="p-1 absolute bottom-0">
        <Button variant="secondary" >
          <Plus /> More Shapes
        </Button>
      </div> */}
      <ConfigureTextDialog onStatusChange={(isOpen) => { setConfigureTextDialogOpen(isOpen) }} isOpen={configureTextDialogOpen} />
      <ConfigureBoxDialog onStatusChange={(isOpen) => { setConfigureBoxDialogOpen(isOpen) }} isOpen={configureBoxDialogOpen} />
      <ConfigureAvatarDialog onStatusChange={(isOpen) => { setConfigureAvatarDialogOpen(isOpen) }} isOpen={configureAvatarDialogOpen} />
    </>
  )
}
