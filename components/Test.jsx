"use client";
import { Avatar } from "@/components/ui/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/ui/sidebar";
import { SidebarLayout } from "@/components/ui/sidebar-layout";
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/components/ui/checkbox";
import { Field, Label } from "@/components/ui/fieldset";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";

import { ImRocket } from "react-icons/im";
import { Input, InputGroup } from "./ui/input";

import { useState } from "react";
// import Category from "./sidebar/Category";
// import Price from "./sidebar/Price";
// import Color from "./sidebar/Color";
import { Divider } from "./ui/divider";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
export default function Test({ children }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem onClick={() => setIsOpen(true)} aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <Dialog as={SidebarItem} open={isOpen} onClose={setIsOpen}>
              <DialogTitle>Search for a product</DialogTitle>
              <DialogBody>
                <InputGroup>
                  <MagnifyingGlassIcon />
                  <Input
                    name="search"
                    placeholder="Search&hellip;"
                    aria-label="Search"
                  />
                </InputGroup>
              </DialogBody>
              <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem>
              <div className="logo-container">
                <ImRocket size={40} style={{ top: "20px" }} />
              </div>
              <SidebarLabel>Ecommerce Project</SidebarLabel>
            </SidebarItem>
            <SidebarSection
              className="max-lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Dialog as={SidebarItem} open={isOpen} onClose={setIsOpen}>
                <DialogBody>
                  <InputGroup>
                    <MagnifyingGlassIcon />
                    <Input
                      name="search"
                      placeholder="Search&hellip;"
                      aria-label="Search"
                    />
                  </InputGroup>
                </DialogBody>
                <DialogActions>
                  <Button plain onClick={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection></SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
