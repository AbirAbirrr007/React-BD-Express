export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedPrice = totalPrice + product.price;
        updatedQty = qty + 1;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;
    case "INC":
      console.log("Inc run");
      product = shoppingCart.find((product) => product.id === action.id);
      index = shoppingCart.findIndex((product) => product.id === action.id);
      product.qty = product.qty + 1;
      updatedQty = qty + 1;
      updatedPrice = totalPrice + product.price;
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;

    case "DEC":
      product = shoppingCart.find((product) => product.id === action.id);
      index = shoppingCart.findIndex((product) => product.id === action.id);
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: qty,
        };
      }
      break;
    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedPrice = totalPrice - product.price * product.qty;
      updatedQty = qty - product.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    default:
      return state;
  }
};
