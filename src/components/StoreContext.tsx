import { createContext } from "react";
import { StoreContextProps } from "~/types";

export const StoreContext = createContext<StoreContextProps>(
  {} as StoreContextProps
);
