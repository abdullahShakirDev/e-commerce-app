import supabase from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) throw new error("Products could not be fetched");

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new error(`Product #${id} not found`);

  return data;
}
