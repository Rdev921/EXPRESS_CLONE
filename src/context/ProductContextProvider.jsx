import React from "react";
import axios from "axios";

export const ProductContext = React.createContext();

export default function ProductContextProvider({ children }) {

  const getCartItems = async () => {
    let res = await axios.get(`http://localhost:8080/products`);
    let data = res.data.filter((elem) => elem.quantity !== 0);
    setCartData(data);
    setCartLength(data.length);
  };

  React.useEffect(() => {
    getCartItems();
  }, []);

  const [login,setLogin] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("1");
  const [maxPrice, setMaxPrice] = React.useState("9999");
  const [minDiscount, setMinDiscount] = React.useState("0");
  const [maxDiscount, setMaxDiscount] = React.useState("80");
  const [cartLength, setCartLength] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);

  return (
    <ProductContext.Provider
      value={{
        login,setLogin,
        getCartItems,
        cartData,
        setCartData,
        cartLength,
        setCartLength,
        category,
        setCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        minDiscount,
        setMinDiscount,
        maxDiscount,
        setMaxDiscount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}