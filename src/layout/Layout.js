import LandingElement from '../pages/LandingElement'
import ParticleBackground from '../ParticleBackground'
import { Container } from './LayoutStyles'



export const Layout = ({children}) => {
    return (
      <Container>
        {/* <ParticleBackground /> */}
        <LandingElement/>
       {/* <Header/> */}
       <main>{children}</main> 
       {/* <Footer/> */}
      </Container>
    )
  }
  