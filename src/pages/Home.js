import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/app.slice";
import { Product } from "../components";
// import { responseProducts } from "../mocks/products.mock";

export default function Home() {
  const { listProducts } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="my-2">
      <h3 className="pl-2">Listado de productos:</h3>
      <div className="row mx-0">
        {listProducts.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
