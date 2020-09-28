import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function MainFooter(){
	return(
		<React.Fragment>
				<Navbar expand="md" bg='dark' sticky='bottom'>
					<Container>
						<Col>
							<Row>
								<Navbar.Brand href='/home'><img alt='viitra-logo' src='./viitra-branca.svg' width="160" height="70"/></Navbar.Brand>
							</Row>
							<Row>
								<Nav.Link href='https://www.facebook.com/viitrainovacoes/' target='_blank'><FontAwesomeIcon icon={faFacebookF}/></Nav.Link>
           				 		<Nav.Link href='https://www.instagram.com/viitrainovacoes/' target='_blank'><FontAwesomeIcon icon={faInstagram}/></Nav.Link>
           				 		<Nav.Link href='https://www.linkedin.com/company/viitrainovacoes/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn}/></Nav.Link>
							</Row>
						</Col>
							
						<Col>
							<Row>
								<Nav>
									<Nav.Link href='/home'>Home</Nav.Link>
									<Nav.Link href='/sobre'>Quem somos</Nav.Link>
									<Nav.Link href='/solucoes'>Soluções</Nav.Link>
									<Nav.Link href='/contato'>Contato</Nav.Link>
								</Nav>
							</Row>
							<Row>
								<Col>
									<Navbar.Text>Endereço</Navbar.Text>
									<Navbar.Text className='subtext'>Rua Acadêmico Hélio Ramos, 60 - SL 13 Várzea, Recife - PE</Navbar.Text>
								</Col>
								<Col>
									<Navbar.Text>Telefone</Navbar.Text>
									<br/>
									<Navbar.Text className='subtext'>(81) 4101-7433</Navbar.Text>
								</Col>
							</Row>
						</Col>						
					</Container>
				</Navbar>
		</React.Fragment>
	);
}
