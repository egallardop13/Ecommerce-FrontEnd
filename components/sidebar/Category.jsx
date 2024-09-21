import { useState } from "react";
import { SidebarHeading, SidebarItem } from "../ui/sidebar";
import { Checkbox, CheckboxField, CheckboxGroup } from "../ui/checkbox";
import { Label } from "../ui/fieldset";
import { useProducts } from "@/contexts/ProductsContext";

const Category = () => {
  const { handleCategoryChange } = useProducts();

  const options = ["Sneakers", "Flats", "Sandals", "Heels"];

  return (
    <>
      <SidebarHeading>Category</SidebarHeading>
      <CheckboxGroup role="group" aria-label="Categories">
        {options.map((option) => (
          <SidebarItem key={option}>
            <CheckboxField>
              <Checkbox
                name={option}
                onChange={() => {
                  handleCategoryChange(option.toLocaleLowerCase());
                }}
              />
              <Label>{option}</Label>
            </CheckboxField>
          </SidebarItem>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default Category;
