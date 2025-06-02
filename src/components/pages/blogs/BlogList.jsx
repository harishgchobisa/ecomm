import { Col } from "react-bootstrap";
import './Blogs.scss'
import { Link } from "react-router";
import ImagePlaceholdar from "/public/placeholderImg.svg";

const BlogList = (props) => {
  const{id, title, body, postImg} = props.data;
  console.log()
  return(
    <>
      <Col xs={12} sm={6} xl={4} xxl={3}>
        <div className="blog">
          <div className="blogImg">
            <Link to={`/blogs/${id}`} title={title}>
              {(postImg !== "") ? <img src={postImg} alt={title} /> : <img src={ImagePlaceholdar} alt={title} />}              
            </Link>
          </div>
          <h3><Link to={`/blogs/${id}`} title={title}>{title}</Link></h3>
          <p>{body}</p>
          <Link to={`/blogs/${id}`} title={title} className="primaryBtn">Read More</Link>
        </div>
      </Col>
    </>
  )
}

export default BlogList;