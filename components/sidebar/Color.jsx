import { useState } from "react";
import { SidebarHeading, SidebarItem } from "../ui/sidebar";
import { Checkbox, CheckboxField, CheckboxGroup } from "../ui/checkbox";
import { Label } from "../ui/fieldset";

const Color = () => {
  let [selected, setSelected] = useState([""]);

  const options = ["Red", "Blue", "Black", "Green", "White"];

  return (
    <>
      <SidebarHeading>Colors</SidebarHeading>
      <CheckboxGroup role="group" aria-label="Colors">
        <SidebarItem>
          <CheckboxField>
            <Checkbox
              checked={selected.length > 0}
              indeterminate={selected.length !== options.length}
              onChange={(checked) => setSelected(checked ? options : [])}
            />
            <Label>Select all</Label>
          </CheckboxField>
        </SidebarItem>
        {options.map((option) => (
          <SidebarItem key={option}>
            <CheckboxField>
              <Checkbox
                name={option}
                checked={selected.includes(option)}
                onChange={(checked) => {
                  return setSelected((pending) => {
                    return checked
                      ? [...pending, option]
                      : pending.filter((item) => item !== option);
                  });
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
