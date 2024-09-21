"use client";
import React from "react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { useProducts } from "@/contexts/ProductsContext";

const Recommended = () => {
  const { handleCompanyChange } = useProducts();

  return (
    <div className="flex flex-col w-full gap-y-2 items-center sm:items-start">
      <Heading className="">Recommended</Heading>
      <div className="flex flex-wrap justify-center sm:justify-start gap-y-2 sm:gap-y-0 gap-x-4 w-full">
        <Button
          className="w-full max-w-32 sm:max-w-28"
          value=""
          title="All Products"
          outline
          onClick={() => handleCompanyChange("all")}
        >
          All Products
        </Button>

        <Button
          value="Nike"
          title="Nike"
          outline
          className="w-full max-w-32 sm:max-w-28"
          onClick={() => handleCompanyChange("nike")}
        >
          Nike
        </Button>
        <Button
          value="Adidas"
          title="Adidas"
          outline
          className="w-full max-w-32 sm:max-w-28"
          onClick={() => handleCompanyChange("adidas")}
        >
          Adidas{" "}
        </Button>
        <Button
          value="Puma"
          title="Puma"
          outline
          className="w-full max-w-32 sm:max-w-28"
          onClick={() => handleCompanyChange("puma")}
        >
          Puma
        </Button>
        <Button
          value="Vans"
          title="Vans"
          outline
          className="w-full max-w-32 sm:max-w-28"
          onClick={() => handleCompanyChange("vans")}
        >
          Vans
        </Button>
      </div>
    </div>
  );
};

export default Recommended;
