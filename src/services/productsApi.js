import supabase from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) throw new error("Products could not be fetched");

  return data;
}
