"use client";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/ui/sidebar";
import { SidebarLayout } from "@/components/ui/sidebar-layout";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { ImRocket } from "react-icons/im";
import { Input, InputGroup } from "./ui/input";

import { useState } from "react";
import Category from "./sidebar/Category";
import Price from "./sidebar/Price";
import Color from "./sidebar/Color";

import { Dialog, DialogActions, DialogBody, DialogTitle } from "./ui/dialog";
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
              <SidebarItem>
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
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
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <Category />
              <SidebarSection>
                <Price />
              </SidebarSection>
            </SidebarSection>
            <SidebarSection>
              <Color />
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
