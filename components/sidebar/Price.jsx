import { SidebarHeading, SidebarItem } from "../ui/sidebar";
import { Label } from "../ui/fieldset";
import { Radio, RadioField, RadioGroup } from "../ui/radio";
import { useProducts } from "@/contexts/ProductsContext";

const Price = () => {
  const { handlePriceRangeChange } = useProducts();

  const options = ["$0-$50", "$50-$100", "$100-$150", "Over $150"];

  return (
    <>
      <SidebarHeading>Price</SidebarHeading>
      <RadioGroup role="group" aria-label="Prices">
        <SidebarItem>
          <RadioField>
            <Radio
              value="all"
              onClick={() => {
                handlePriceRangeChange(4);
              }}
            />
            <Label>All</Label>
          </RadioField>
        </SidebarItem>
        {options.map((option, index) => (
          <SidebarItem key={option}>
            <RadioField>
              <Radio
                value={option}
                onClick={() => {
                  handlePriceRangeChange(index);
                }}
              />
              <Label>{option}</Label>
            </RadioField>
          </SidebarItem>
        ))}
      </RadioGroup>
    </>
  );
};
export default Price;
