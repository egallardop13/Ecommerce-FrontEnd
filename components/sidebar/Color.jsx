import { useState } from "react";
import { SidebarHeading, SidebarItem } from "../ui/sidebar";
import { Checkbox, CheckboxField, CheckboxGroup } from "../ui/checkbox";
import { Label } from "../ui/fieldset";
import Category from "./Category";
import { useProducts } from "@/contexts/ProductsContext";

const Color = () => {
  const { handleColorChange } = useProducts();
  const options = ["Red", "Blue", "Black", "Green", "White"];

  return (
    <>
      <SidebarHeading>Colors</SidebarHeading>
      <CheckboxGroup role="group" aria-label="Colors">
        {options.map((option) => (
          <SidebarItem key={option}>
            <CheckboxField>
              <Checkbox
                name={option}
                onChange={() => {
                  console.log("clicked:", option);
                  handleColorChange(option.toLocaleLowerCase());
                }}
                color={option === "Black" ? "dark" : option.toLocaleLowerCase()}
              />
              <Label>{option}</Label>
            </CheckboxField>
          </SidebarItem>
        ))}
      </CheckboxGroup>
    </>
  );
};
export default Color;
