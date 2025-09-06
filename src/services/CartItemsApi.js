import supabase from "./supabase";

export async function getCartItems(userId) {
  let { data, error } = await supabase
    .from("cartItems")
    .select("*, products(name,price,image)")
    .eq("userId", userId)
    .order("created_at", { ascending: true });

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

    if (error) throw new Error(error.message);
    return data;
  } else {
    // Insert new row
    const { data, error } = await supabase.from("cartItems").insert([
      {
        userId,
        productId,
        quantity: newQuantity,
        totalPrice: newQuantity * productPrice,
      },
    ]);

    if (error) throw new Error(error.message);
    return data;
  }
}

export async function deleteItemCart(id) {
  const { error } = await supabase.from("cartItems").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

export async function getCountCart(userId) {
  const { count, error } = await supabase
    .from("cartItems")
    .select("*", { count: "exact", head: true })
    .eq("userId", userId);

  if (error) throw new Error(error.message);
  return count;
}

export async function updateCartItemQuantity({
  cartItemId,
  newQuantity,
  productPrice,
}) {
  const totalPrice = newQuantity * productPrice;

  const { data, error } = await supabase
    .from("cartItems")
    .update({ quantity: newQuantity, totalPrice })
    .eq("id", cartItemId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
