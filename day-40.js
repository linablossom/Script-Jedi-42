//https://www.codewars.com/kata/587593285448632b8d000143
const submitOrder = async user => {
  // Get the current user's shopping cart
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  
  // Also look up the ZIP code from their profile
  const { zipCode } = await CustomerAPI.getProfileAsync(user);
  
  // Calculate the shipping fees
  const shippingRate = calculateShipping(shoppingCart, zipCode);
  
  // Submit the order
  const orderSuccessful = OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
