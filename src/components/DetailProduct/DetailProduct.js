import "./DetailProduct.scss";
import { Button, Input, StarRating } from "../../components";
import React, { useState } from 'react';

export default function DetailProduct({ detail }) {
    const [valueCart, setValueCart] = useState(0);

    const addToCart = () =>{
        let newValue = parseInt(valueCart) + 1;
        setValueCart(newValue);
    }

    const changeCart = (value) =>{
        setValueCart(value);
    }

  return (
    <div className="row contentDetail">
      <div className="col-md-5">
        <div className="contentImg">
          <img src={detail.image} alt={`detail-product-${detail.id}`} />
        </div>
      </div>
      <div className="col-md-7 mt-3 p-0">
        <h3 className="title">{detail.title}</h3>
        <hr/>
        <div className="col-12 my-2">
            <StarRating rate={detail.rating?.rate} />
          </div>
        <p className="price">{detail.price} MXN</p>
        <p>{detail.description}</p>
        <hr/>
        <div className="row">
          <div className="col-6">
            <Input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              value={valueCart}
              changeCart={changeCart}
            />
          </div>
          <div className="col-6">
            <Button position="right" large value="Añadir al carrito" onClick={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
