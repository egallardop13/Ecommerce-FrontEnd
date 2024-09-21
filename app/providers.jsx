"use client";
import { ProductsProvider } from "@/contexts/ProductsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>{children}</ProductsProvider>
    </QueryClientProvider>
  );
}
