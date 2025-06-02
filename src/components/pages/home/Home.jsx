import { useEffect } from "react";
import { Container } from "react-bootstrap"

const Home = () => {
  useEffect(() => {
    document.title = 'Welcome to Danza';
  }, [])

  return(
    <>
      <Container>
        Home Page
      </Container>
    </>
  )
}

export default Home;