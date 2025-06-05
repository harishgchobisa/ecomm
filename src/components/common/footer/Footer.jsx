import { Container, Row, Col, } from 'react-bootstrap';
import { NavLink } from 'react-router';
import { SiGooglemaps } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import footerInfo from '../../../services/footerInfo.json';

const icons = {
  IoIosMail: <IoIosMail />,
  FiPhoneCall: <FiPhoneCall />,
  SiGooglemaps: <SiGooglemaps />
};

import './footer.scss';

const Footer = () => {
  return(
    <footer>
      <div className="footer-info">
        <Container>
          <Row>
            {
              footerInfo.map((item, index) => {
                return (
                  <Col sm={4} className="footer-info__item" key={index}>
                    {icons[item.iconName]}
                    <div className="footer-info__item__content">
                      <h6>{item.title}</h6>
                      <p>{item.content}</p>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container>
          <Row>
            <Col sm={6}>
              <p>&copy; {new Date().getFullYear()} Danza. All rights reserved.</p>
            </Col>
            <Col sm={6} className="links">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;