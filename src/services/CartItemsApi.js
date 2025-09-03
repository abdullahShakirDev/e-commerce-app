import supabase from "./supabase";

export async function getCartItems(userId) {
  let { data, error } = await supabase
    .from("cartItems")
    .select("*, products(name,price,image)")
    .eq("userId", userId);

  if (error) throw new Error(error.message);

  return data;
}

// Add to cart or update quantity

export async function addToCart({
  userId,
  productId,
  quantity = 1,
  productPrice,
}) {
  // Fetch existing cart item
  const { data: existingItem, error: fetchError } = await supabase
    .from("cartItems")
    .select("id, quantity")
    .eq("userId", userId)
    .eq("productId", productId)
    .single(); // fetch single row

  if (fetchError && fetchError.code !== "PGRST116") throw fetchError;

  let newQuantity = quantity;
  if (existingItem) {
    newQuantity += existingItem.quantity;

    // Update existing row
    const { data, error } = await supabase
      .from("cartItems")
      .update({ quantity: newQuantity, totalPrice: newQuantity * productPrice })
      .eq("id", existingItem.id);

    if (error) throw error;
    return data;
  } else {
    // Insert new row
    const { data, error } = await supabase
      .from("cartItems")
      .insert([
        {
          userId,
          productId,
          quantity: newQuantity,
          totalPrice: newQuantity * productPrice,
        },
      ]);

    if (error) throw error;
    return data;
  }
}
