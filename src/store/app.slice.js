import { createSlice } from "@reduxjs/toolkit";
import { FakestoreService } from "../services/FakestoreApi";
import { setErrorGral, setErrorMsgGral } from "./errors.slice";
import { Messages } from "../constants/messages";

const initialState = {
  listProducts: [],
  loading: false,
  detailProduct: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setListProducts: (state, action) => {
      state.listProducts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDetailProduct: (state, action) => {
      state.detailProduct = action.payload;
    },
  },
});

export const { setLoading, setListProducts, setDetailProduct } =
  appSlice.actions;

export const getProducts = () => async (dispatch, getState) => {
    //Obtener todos los productos
  dispatch(setLoading(true));
  try {
    const resProducts = await FakestoreService.get("/products");
    if (resProducts.status === 200) {
      dispatch(setListProducts(resProducts.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setErrorMsgGral(Messages.genericServices));
      dispatch(setErrorGral(true));
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setErrorGral(true));
    dispatch(setErrorMsgGral(Messages.genericServices));
    dispatch(setLoading(false));
  }
};

export const getDetailProduct = (id) => async (dispatch, getState) => {
    //Obtener el detalle de un poducto
  dispatch(setLoading(true));
  try {
      const resDetail = await FakestoreService.get(`/products/${id}`);
      if (resDetail.status === 200) {
        dispatch(setDetailProduct(resDetail.data));
        dispatch(setLoading(false));
      } else {
        dispatch(setErrorMsgGral(Messages.tryAgain));
        dispatch(setErrorGral(true));
        dispatch(setLoading(false));
      }

  } catch (error) {
    dispatch(setErrorGral(true));
    dispatch(setErrorMsgGral(Messages.genericServices));
    dispatch(setLoading(false));
  }
};

export default appSlice.reducer;
