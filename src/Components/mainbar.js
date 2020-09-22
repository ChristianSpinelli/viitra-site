import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function MainBar(props){
	return(
		<React.Fragment>
      <Navbar expand="md" bg='white' variant='ligth' fixed='top'>
        <Container>
          <Navbar.Brand href="/home"><img alt='viitra_logo' src='./viitra_logo.svg' width="160" height="70"/></Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="flex-column" >
              <Navbar.Text className='phone'>(81) 4101-7433</Navbar.Text>
              <Navbar.Text className='address'>Rua Acadêmico Hélio Ramos, 60 - SL 13 <br/> Várzea, Recife - PE</Navbar.Text>
            </Nav>          
          </Navbar.Collapse>
        </Container>  
      </Navbar>	     	
		</React.Fragment>
	);

	
}