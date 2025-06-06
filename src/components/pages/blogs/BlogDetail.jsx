import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../common/loader/Loader";
import InnerBanner from "../../common/innerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";


const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const[loading, setLoading] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);
  const API = `https://dummyjson.com/posts/${id}`;
  const fetchBlog = async () => {
    try {
      const blogsData = await axios.get(API);
      setBlog(blogsData.data);
      setLoading(false);
    } catch (error) {
      setErrorMessage(`Error ouucred: ${error}`)
      setLoading(false);
    }
  }
  
  useEffect(() => {
    document.title = 'Danza - Blog details';
    fetchBlog();
  }, [id])
  
  if(loading) return <Loader />;
  if(errorMessage) return <p>{errorMessage}</p>;

  const{title, body, views, tags, postImg, reactions} = blog;
  return(
    <>
      <InnerBanner pagetitle={`Danza - Blog details`} />
      <div className="blog-details">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="blogImg"><img src={postImg} alt={title} /></div>
            </Col>
            <Col lg={6}>
              <div className="right">
                <h2>{title}</h2>
                <p>{body}</p>
                <div className="moreInfo">
                  <div className="view"><FiEye /> {views}</div>
                  <div className="reactions">
                    <div className="like"><AiOutlineLike /> {reactions.likes}</div>
                    <div className="dislike"><AiOutlineDislike /> {reactions.dislikes}</div>
                  </div>
                </div>
                <div className="tags">
                  {
                    tags.map((item, index) => {
                      return <span key={index}>{item}</span>
                    })                                
                  }
                </div>
              </div> 
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogDetail;