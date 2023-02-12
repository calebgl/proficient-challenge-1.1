import { INITIAL_STATE } from "./components/StoreProvider";
import { StoreAction, StoreState } from "./types";

export function storeReducer(
  state: StoreState,
  action: StoreAction
): StoreState {
  switch (action.type) {
    case "increment_item": {
      const items = [
        ...state.items.map(({ ...item }) => {
          const quantity =
            item.quantity + (item.id === action.payload.id ? 1 : 0);
          return { ...item, quantity };
        }),
      ];
      return { ...state, items };
    }

    case "decrement_item": {
      const items = [
        ...state.items.map(({ ...item }) => {
          if (item.quantity === 0) {
            return item;
          }
          const quantity =
            item.quantity - (item.id === action.payload.id ? 1 : 0);
          return { ...item, quantity };
        }),
      ];
      return { ...state, items };
    }

    case "set_item": {
      const items = [
        ...state.items.map(({ ...item }) => {
          const quantity =
            item.id === action.payload.id
              ? action.payload.quantity
              : item.quantity;
          return { ...item, quantity };
        }),
      ];
      return { ...state, items };
    }

    case "clear_store": {
      return INITIAL_STATE;
    }

    default: {
      throw new Error("Unknown action type");
    }
  }
}
