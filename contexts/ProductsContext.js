"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, fetchProducts } from "@/lib/actions";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: products,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  // State for selected filters
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000000]); // [min, max]
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    console.log("event.target.value", event.target.value);
    setQuery(event.target.value);
  };

  const handleCompanyChange = (company) => {
    console.log("inside handle company change", company);
    if (company === "all") {
      setSelectedCompanies([]);
      return;
    }

    setSelectedCompanies((prevSelected) => {
      if (company) {
        if (!prevSelected.includes(company)) {
          return [...prevSelected, company.toLowerCase()];
        }
        return prevSelected.filter((tempCompany) => tempCompany !== company);
      }
      return prevSelected;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) => {
      if (category) {
        if (!prevSelected.includes(category)) {
          return [...prevSelected, category.toLowerCase()];
        }
        return prevSelected.filter((cat) => cat !== category);
      }
      return prevSelected;
    });
  };

  const handleColorChange = (color) => {
    console.log("entered color change:", color);
    setSelectedColors((prevSelected) => {
      if (color) {
        if (!prevSelected.includes(color)) {
          return [...prevSelected, color.toLowerCase()];
        }
        return prevSelected.filter((tempColor) => tempColor !== color);
      }
      return prevSelected;
    });
  };

  const handlePriceRangeChange = (value) => {
    console.log("value", value);
    switch (value) {
      case 0:
        setSelectedPriceRange([0, 50]);
        break;
      case 1:
        setSelectedPriceRange([50, 100]);
        break;
      case 2:
        setSelectedPriceRange([100, 150]);
        break;
      case 3:
        setSelectedPriceRange([150, 1000000]);
        break;
      case 4:
        setSelectedPriceRange([0, 1000000]);
        break;
    }
  };

  // Filter products based on query, categories, colors, and price range
  const filteredData = useMemo(() => {
    let filteredProducts = products;

    // Filter by search query
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCompanies.length > 0) {
      console.log("entered filtering by companies", selectedCompanies);
      filteredProducts = filteredProducts.filter((product) =>
        selectedCompanies.includes(product.company.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category.toLowerCase())
      );
    }

    if (selectedColors.length > 0) {
      console.log("filtering selectedColors", selectedColors);
      filteredProducts = filteredProducts.filter((product) =>
        selectedColors.includes(product.color.toLowerCase())
      );
    }

    if (selectedPriceRange[0] !== 0 || selectedPriceRange[1] !== 1000000) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.newPrice >= selectedPriceRange[0] &&
          product.newPrice <= selectedPriceRange[1]
      );
    }
    return filteredProducts;
  }, [
    products,
    selectedCategories,
    selectedColors,
    selectedPriceRange,
    selectedCompanies,
    query,
  ]);

  return (
    <ProductsContext.Provider
      value={{
        filteredData,
        products,
        isLoading,
        isError,
        error,
        filteredData,
        query,
        handleInputChange,
        handleCategoryChange,
        handleColorChange,
        handlePriceRangeChange,
        handleCompanyChange,
        createProduct: createProductMutation.mutate,
        isCreating: createProductMutation.isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
