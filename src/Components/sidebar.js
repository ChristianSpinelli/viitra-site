import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function SideBar(props){
		return(
			<React.Fragment>
				<Navbar className='sidebar' expand="md"  fixed='top'>
			 		<Container> 
         				<Navbar.Collapse>
            				<Nav activeKey={props.tab}>
              					<Nav.Link href="/home">Home</Nav.Link>
              					<Nav.Link href="/sobre">Quem Somos</Nav.Link>
              					<Nav.Link href="/solucoes">Soluções</Nav.Link>
              					<Nav.Link href="/contato">Contato</Nav.Link>
           				 	</Nav>
            			</Navbar.Collapse>
            			<Navbar.Collapse className="justify-content-end">
            				<Nav>
           				 		<Nav.Link href='https://www.facebook.com/viitrainovacoes/' target='_blank'><FontAwesomeIcon icon={faFacebookF}/></Nav.Link>
           				 		<Nav.Link href='https://www.instagram.com/viitrainovacoes/' target='_blank'><FontAwesomeIcon icon={faInstagram}/></Nav.Link>
           				 		<Nav.Link href='https://www.linkedin.com/company/viitrainovacoes/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn}/></Nav.Link>
           				 	</Nav>
            			</Navbar.Collapse>
				  		<Navbar.Toggle/>
			 		</Container> 
				</Navbar>
			</React.Fragment>
		);
}