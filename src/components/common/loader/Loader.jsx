import { Container } from "react-bootstrap"
import './loader.scss'
const loader = () => {
  return(
    <div className="loading">
      <Container>
        <p>Loading...</p>
      </Container>
    </div>
  )
}

export default loader;