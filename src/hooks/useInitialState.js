import { useState } from "react";

const initialState = {
    cart: [],
    orderIsOpen: false,
    menuIsOpen: false,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
        });
    }

    const toggleOrder = () => {
        setState({
          ...state,
          orderIsOpen: !state.orderIsOpen,
        });
      };

      const toggleMenu = () => {
        setState({
          ...state,
          menuIsOpen: !state.menuIsOpen,
        });
      };

      const toggleMenu2 = () => {
        setState({
          ...state,
          menuIsOpen: !state.menuIsOpen,
        });
      };

    return {
        state,
        addToCart,
        removeFromCart,
        toggleOrder,
        toggleMenu,
        toggleMenu2
    }
}

export default useInitialState;