import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from "../store/app.slice";
import { useParams } from "react-router-dom";
import { DetailProduct } from "../components";
// import { responseDetail } from "../mocks/products.mock";

export default function Detail() {
  const { detailProduct } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailProduct(id));
    // eslint-disable-next-line 
  }, [id]);

  return (
    <DetailProduct detail={detailProduct} />
  )
}
