import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import axios from 'axios';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import './OurTeam.scss';



const OurTeam = () => {
  const [userData, setUserData] = useState();

  const UserAPI = "http://localhost:5173/src/services/users.json";

  const fetchUserData = async () => {
    const response = await axios.get(UserAPI);
    setUserData(response.data);    
  }
  
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="team-container">
      <Container>
        <h2 className="team-title">Meet Our Team</h2>
        <p className='team-info'>Leading with vision and innovation to drive success.</p>
        <Row className="team-members">
          {userData && userData.map((user) => (
            <Col key={user.userID} xs={12} sm={6} md={4} lg={3} className="team-member-col">
              <div className="team-member">
                <Link to={`/user/${user.userID}`} title={user.name}><img src={user.userImage} alt={user.name} className="team-member-image" /></Link>
                <h3 className="team-member-name"><Link to={`/user/${user.userID}`} title={user.name}>{user.name}</Link></h3>
                <p className="team-member-role">{user.designation}</p>
                <ul className="team-member-socials">
                  <li><Link to={user.socialLinks.linkedin}><IoLogoLinkedin /></Link></li>
                  <li><Link to={user.socialLinks.twitter}><FaSquareTwitter /></Link></li>
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;