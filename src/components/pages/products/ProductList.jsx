import { useState } from "react";
import { Link } from "react-router";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Rating from "../../common/ratings/Rating";
import { IoCloseSharp } from "react-icons/io5";


const ProductList = (props) => {
  const{ title, brand, price, rating, thumbnail, description} = props.data;
  const [productModalShow, setProductModalShow] = useState(false);

  const handleClickAddToCart = () => {
    alert(`${title} has been added to your cart!`);
    setProductModalShow(false);
  } 

  const ProductDetailsModal = (props) =>{
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="custom-modal product-details-modal"
      >
        <Button onClick={props.onHide} className="close-btn"><IoCloseSharp/></Button>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6} className="product-image">
              <img src={thumbnail} alt={title} />
            </Col>
            <Col xs={12} md={6} className="product-details">
              <p className="brand">Brand: {brand}</p>
              <h2>{title}</h2>
              <p className="description">{description}</p>
              <Rating rating={rating} />
              <div className="price">${price}</div>
              <Button className="secondaryBtn add-to-cart" onClick={() => handleClickAddToCart()}>Add to Cart</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3} className="product">
        <div className="product-card">
          <div className="product-image">
            <img src={thumbnail} alt={title} onClick={() => setProductModalShow(true)} />
            <Button className="secondaryBtn add-to-cart" onClick={() => handleClickAddToCart()}>Add to Cart</Button>
          </div>
          <p className="brand">{brand}</p>
          <h3><Link to={void(0)} title={title} onClick={() => setProductModalShow(true)}> {title} </Link> </h3>
          <Rating rating={rating} />
          <span className="price">${price}</span>
        </div>
      </Col>
      <ProductDetailsModal
        show={productModalShow}
        onHide={() => setProductModalShow(false)}
      />
    </>
  );
}

export default ProductList;