import { Container } from "react-bootstrap";
import { Link } from "react-router";
import "./Banner.scss";

const Banner = (props) => {
  const {image, title, description } = props;
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      <div className="banner-overlay"></div>
      <Container>
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-description">{description}</p>
          <Link className="primaryFilledBtn" to={'/products'}>View Products</Link>
        </div>
      </Container>
    </div>
  );
}

export default Banner;