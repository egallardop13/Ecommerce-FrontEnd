export async function fetchProducts() {
  const res = await fetch(
    "https://ecommerceBackend.azurewebsites.net/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function createProduct(newProduct) {
  const res = await fetch(
    "https://ecommerceBackend.azurewebsites.net/products",
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
}
