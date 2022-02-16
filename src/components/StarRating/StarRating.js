import Rating from "@mui/material/Rating";
import "./StarRating.scss";

export default function StarRating({ rate }) {
  return (
    <div className="contentStars">
      {rate && (
        <Rating
          name="half-rating-read"
          size="large"
          defaultValue={rate}
          precision={0.1}
          readOnly
        />
      )}
    </div>
  );
}
