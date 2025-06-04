import { useState, useEffect } from 'react';
import { Container, Row, Modal } from 'react-bootstrap';
import axios from 'axios';
import './Products.scss';
import InnerBanner from '../../common/innerBanner/InnerBanner';
import Loader from '../../common/loader/Loader';
import ProductList from './ProductList';

const Products = () => {
  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  
  const ProductAPI = 'http://localhost:5173/src/services/products.json';
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(ProductAPI);
      setProducts(response.data.products);
      setLoading(false);      
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <div>Error: {error}</div>;


  return (
    <>
      <InnerBanner pagetitle="Products" />
      <Container className="products">
        <Row>
          {
            (loading) ? <Loader /> :
            products.map((res) => {
              return(<ProductList key={res.id} data={res} />)
            })
          }
        </Row>

      </Container>
    </>
  );
}

export default Products;