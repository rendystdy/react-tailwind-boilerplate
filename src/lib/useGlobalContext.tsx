import React, { createContext, Dispatch, useContext, useReducer } from "react";

interface IitemCart {
    id: number;
    title: string;
    description: string;
    quantity: number;
    price: string;
    imageUrl: string;
}

interface IState {
  carts: IitemCart[];
  menus: IitemCart[];
}


type CartAction = 
  | { type: 'ADD_TO_CART', value: IitemCart }
  | { type: 'REMOVE_FROM_CART', value: IitemCart }
  | { type: 'RESET_CART' }


const Context = createContext<[IState, Dispatch<CartAction>] | undefined>(undefined);

const initialState: IState = {
  carts: [],
  menus: [
    {
      id: 1,
      imageUrl: "/images/content/burger2.png",
      title: "LOREM IPSUM 1",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      quantity: 1,
      price: "50000",
    },
    {
      id: 2,
      imageUrl: "/images/content/burger1.png",
      title: "LOREM IPSUM 2",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      quantity: 1,
      price: "30000",
    },
    {
      id: 3,
      imageUrl: "/images/content/burger2.png",
      title: "LOREM IPSUM 3",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      quantity: 1,
      price: "40000",
    },
  ]
};

export function useGlobalContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useGlobalContext must be used within a Provider");
  }

  const [state, dispatch] = context;

  return { state, dispatch };
}

function Reducer(state: IState, action: CartAction): IState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemExists = state.carts.find(item => item.id === action.value.id);
      if (itemExists) {
        return {
          ...state,
          carts: state.carts.map(item =>
            item.id === action.value.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, action.value],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const newData = state.carts.filter(item => item.id !== action.value.id);
      return {
        ...state,
        carts: newData
      };
    }
    case "RESET_CART": {
      return {
        ...state,
        carts: initialState.carts,
      };
    }

    default: 
      return state;
  }
}

export default function Provider(props:any) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}

