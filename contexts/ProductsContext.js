// context/ProductsContext.js
"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/actions";

// Create the context
const ProductsContext = createContext();

// Custom hook to use the context
export const useProducts = () => {
  return useContext(ProductsContext);
};

// Create ProductContextProvider
export const ProductsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Fetching products using React Query
  const {
    data: products,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Create product mutation
  const createProductMutation = useMutation({
    mutationFn: async (newProduct) => {
      const res = await fetch(
        "https://<your-azure-app>.azurewebsites.net/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  // State for filtering
  // State for selected filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000000]); // [min, max]
  const [query, setQuery] = useState("");

  // Handlers for filter input
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle category change
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

  // Handle color change
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

  // Handle price range change
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

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category.toLowerCase())
      );
    }

    // Filter by selected colors
    if (selectedColors.length > 0) {
      console.log("filtering selectedColors", selectedColors);
      filteredProducts = filteredProducts.filter((product) =>
        selectedColors.includes(product.color.toLowerCase())
      );
    }

    // Filter by price range
    if (selectedPriceRange[0] !== 0 || selectedPriceRange[1] !== 1000000) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.newPrice >= selectedPriceRange[0] &&
          product.newPrice <= selectedPriceRange[1]
      );
    }
    return filteredProducts;
  }, [products, selectedCategories, selectedColors, selectedPriceRange, query]);

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
        createProduct: createProductMutation.mutate,
        isCreating: createProductMutation.isLoading,
        selectedCategories,
        setSelectedCategories,
        selectedColors,
        setSelectedColors,
        selectedPriceRange,
        setSelectedPriceRange,
        handleCategoryChange,
        handleColorChange,
        handlePriceRangeChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
