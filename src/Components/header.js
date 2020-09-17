import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Header(){
	return(
		<React.Fragment>
			 <Navbar expand="lg" bg="light" variant="light" fixed='top'>
			 	<Container> 
			 		<Navbar.Collapse>		
					    <Nav>
					      <Nav.Link href="#home">Home</Nav.Link>
					      <Nav.Link href="#sobre">Quem Somos</Nav.Link>
					      <Nav.Link href="#solucoes">Soluções</Nav.Link>
					      <Nav.Link href="#contato">Contato</Nav.Link>
					    </Nav>
				    </Navbar.Collapse>
				  	<Navbar.Toggle/>
			    </Container> 
			  </Navbar>
			
		</React.Fragment>
	);

	
}