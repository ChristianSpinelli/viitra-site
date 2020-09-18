import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function MainBar(props){
	return(
		<React.Fragment>
      <Navbar expand="lg" bg='white' fixed>
        <Container>
          <Navbar.Brand href="#home"><img alt='viitra_logo' src='./viitra_logo.svg' width="160" height="70"/></Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="flex-column" >
              <Navbar.Text>(81) 4101-7433</Navbar.Text>
              <Navbar.Text>Rua Acadêmico Hélio Ramos, 60 - SL 13</Navbar.Text>
              <Navbar.Text>Várzea, Recife - PE</Navbar.Text>
            </Nav>          
          </Navbar.Collapse>
        </Container>  
      </Navbar>	     	
		</React.Fragment>
	);

	
}