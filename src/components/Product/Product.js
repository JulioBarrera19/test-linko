import "./Product.scss";
import { Chip } from "../../components";
import { useNavigate } from 'react-router-dom';

export default function Product({ product }) {
    const navigate = useNavigate();

    const goDetail = (e, id) =>{
        e.preventDefault();
        navigate(`/product/${id}`)
    }

  return (
    <div className="col-md-6 col-lg-4 contentProduct">
      <div className="card cardProduct" onClick={(e) => goDetail(e, product.id)}>
        <Chip text={product.category} />
        <div className="contentImgProduct">
          <img
            className="imgProduct"
            src={product.image}
            alt={`product-${product.id}`}
          />
        </div>
        <p className="titleProduct">{product.title}</p>
        <p className="priceProduct">{product.price} MXN</p>
      </div>
    </div>
  );
}
