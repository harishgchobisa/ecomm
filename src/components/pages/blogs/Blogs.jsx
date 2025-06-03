import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../../common/innerBanner/InnerBanner";
import Loader from "../../common/loader/Loader";
import { useEffect, useState } from "react";
import axios from 'axios';
import BlogList from "./BlogList";

const Blogs = () =>{
  const[blogs, setBlogs] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);


  const API = "http://localhost:5173/src/services/blogs.json";

  const fetchBlog = async () => {
    try {
      const blogsData = await axios.get(API);
      setBlogs(blogsData.data.posts);
      setLoading(false);
    } catch (error) {
      setError(`Error ouucred: ${error}`)
      setLoading(false);
    }
  }

  useEffect(() => {
    document.title = 'Danza - Blogs';
    fetchBlog();
  }, [])
  
  if(error) return <p>{error}</p>;

  return(
    <>
      <InnerBanner pagetitle="Blogs" />
      <div className="blogs">
        <Container>
          <Row>
            {
              (loading) ? <Loader /> :
              blogs.map((res) => {
                return(<BlogList key={res.id} data={res} />)
              })
            }
          </Row>
        </Container>
      </div>      
    </>
  )
}

export default Blogs;