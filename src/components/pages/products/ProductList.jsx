import { Button, Col } from "react-bootstrap";
import Rating from "../../common/ratings/Rating";
import { Link } from "react-router";

const ProductList = (props) => {
  const{ title, brand, price, rating, thumbnail} = props.data;

  const handleClickAddToCart = () => {
    alert(`${title} has been added to your cart!`);
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="product">
      <div className="product-card">
        <div className="product-image">
          <Link to={`/products/${title}`} title={title}><img src={thumbnail} alt={title} /></Link>
          <Button className="secondaryBtn add-to-cart" onClick={() => handleClickAddToCart()}>Add to Cart</Button>
        </div>
        <p className="brand">{brand}</p>
        <h3><Link to={`/products/${title}`} title={title}> {title} </Link> </h3>
        <Rating rating={rating} />
        <span className="price">${price}</span>
      </div>
    </Col>
  );
}

export default ProductList;