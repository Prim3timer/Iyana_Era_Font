import {
  Children,
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import reducer from "../reducer";
import initialState from "../store";
import axios from "../app/api/axios";

const ItemContext = createContext({});
export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [items, setItems] = useState([]);
  const currency = "$";

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getItems = async () => {
    try {
      const response = await axios.get("/items");
      if (response) {
        dispatch({ type: "ACQUIITEMS", payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReceipts = async () => {
    try {
      const response = await axios.get("/acquisition");
      dispatch({ type: "RECEIPTS", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ItemContext.Provider
      value={{
        getItems,
        currency,
        numberWithCommas,
        getReceipts,
        ...state,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
