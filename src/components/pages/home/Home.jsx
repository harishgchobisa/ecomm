import { useEffect } from "react";
import { Container } from "react-bootstrap"
import Banner from "../../common/banner/Banner";
import BannerImg from '/public/dance-banner.jpg';
import OurTeam from "../../common/ourTeam/OurTeam";

const Home = () => {
  useEffect(() => {
    document.title = 'Welcome to Danza';
  }, [])
  
  return(
    <>
      <Banner 
        image={BannerImg} 
        title="Welcome to Danza" 
        description="Discover the best products at unbeatable prices!"
      />
      <Container>
        Home Page
      </Container>
      <OurTeam />
    </>
  )
}

export default Home;