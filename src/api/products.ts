import { api } from "@api/client";
import type { CreateProductDto, Product } from "@core/types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products");
  return data;
};

export const createProduct = async (payload: CreateProductDto) => {
  const { data } = await api.post("/products", payload);
  return data;
};

export const updateProduct = async (
  id: number,
  payload: Partial<CreateProductDto>
): Promise<Product> => {
  const { data } = await api.patch(`/products/${id}`, payload);
  return data;
};
