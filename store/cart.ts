type CartItem = {
  id: string;
  quantity: number;
  price: number;
  image: string;
  name: string;
};

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartItem[]>([]);
  const cartModalOpened = ref(false);

  const addToCart = (productId: string, productName = "", productPrice = 0, productImage = "") => {
    const existingItemIndex = cartItems.value.findIndex((item) => item.id === productId);
    if (existingItemIndex !== -1) {
      const existingItem = cartItems.value[existingItemIndex];
      cartItems.value[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + 1 };
    } else {
      cartItems.value.push({ id: productId, name: productName, price: productPrice, image: productImage, quantity: 1 });
    }
  };

  const removeFromCart = (productId: string) => {
    const index = cartItems.value.findIndex((item) => item.id === productId);
    if (index !== -1) {
      if (cartItems.value[index].quantity > 1) {
        const existingItem = cartItems.value[index];
        cartItems.value[index] = { ...existingItem, quantity: existingItem.quantity - 1 };
      } else {
        cartItems.value.splice(index, 1);
      }
    }
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  return {
    cartModalOpened,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
