import { useState, useEffect } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './Products.scss';
import InnerBanner from '../../common/innerBanner/InnerBanner';
import Loader from '../../common/loader/Loader';
import ProductList from './ProductList';
import { getProducts } from '../../../services/ProductsServices';
import { IoSearch } from "react-icons/io5";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";



const Products = () => {
  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  
    
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
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

  // Function to handle sorting in ascending order
  const handleSortAscending = () => {
    const sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setProducts(sortedProducts);
    
  }

  // Function to handle sorting in descending order
  const handleSortDescending = () => {
    const sortedProducts = [...products].sort((a, b) => b.title.localeCompare(a.title));
    setProducts(sortedProducts);
  }

  // Function to handle search input
  const searchProduct = (e) => {
    // Converts the input value to lowercase for case-insensitive search
    const searchItem = e.target.value.toLowerCase();

    // Filters products based on the search term
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchItem));  
    
    // If search term is empty, reset to original products
    if (searchItem) {
      setProducts(filteredProducts);
    } else {
      fetchProducts(); // Reset to original products if search term is empty
    }
  }

  return (
    <>
      <InnerBanner pagetitle="Products" />
      <Container className="products">
        <div className='sort-serach'>
          <div className='sort'>
            <span>Sort By:</span>
            <div className='sort-icon'>
              <AiOutlineSortAscending className='sort-icon-up' title='Ascending' onClick={handleSortAscending} />
              <AiOutlineSortDescending className='sort-icon-down' title='Descending' onClick={handleSortDescending}/>
            </div>
          </div>
          <div className='product-serach'>
            <Form.Control type="text" placeholder="Search for product name" onChange={searchProduct} />
            <IoSearch className='search-icon' />
          </div>
        </div>
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