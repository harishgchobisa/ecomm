import { Container } from 'react-bootstrap'
import './InnerBanner.scss'

const InnerBanner = (props) => {
  return(
    <div className='inner-banner'>
      <Container>
        <h1>{props.pagetitle}</h1>
      </Container>
    </div>
  )
}

export default InnerBanner;