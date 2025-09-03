import supabase from "./supabase";

export async function getCartItems(userId) {
  let { data, error } = await supabase
    .from("cartItems")
    .select("*, products(name,price,image)")
    .eq("userId", userId);

  if (error) throw new Error(error.message);

  return data;
}
