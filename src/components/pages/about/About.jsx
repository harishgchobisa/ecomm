import { Container } from 'react-bootstrap';
import InnerBanner from '../../common/innerBanner/InnerBanner';
import './About.scss';
import OurTeam from '../../common/ourTeam/OurTeam';

const About = () => {
  return (
    <>
      <InnerBanner  pagetitle="About Us" />
      <Container>
        <div className="about-container">
          <p className="about-description">Welcome to Danza Store, your one-stop destination for quality products at great prices! At Danza Store, we believe shopping should be simple, enjoyable, and affordable. Whether you’re looking for fashion, accessories, home essentials, or unique gifts, we bring you carefully selected items that blend style, comfort, and functionality. </p>
          <p className="about-description">Our journey started with a passion for delivering top-notch products while ensuring an easy and satisfying shopping experience for our customers. We are committed to excellence, from product selection to customer service, because your happiness is our priority.</p>
        </div>
      </Container>
      <OurTeam />
    </>
  );
}

export default About;