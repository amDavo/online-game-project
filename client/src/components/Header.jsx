import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Header(){

return(
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Link to='/'> <Navbar.Brand >ELGAME</Navbar.Brand></Link> 
    <Nav className="me-auto">
     <Link to='/add'> <Nav.Link href='/game' >START GAME</Nav.Link> </Link> 
    </Nav>
    </Container>
  </Navbar>
  
</>
)
}
