import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactForm from './contactForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact(){
	return(
		<React.Fragment>
			<section className='contact'>
				<Container>
					<h3>Fale Conosco</h3>
					<h4>Queremos te ouvir! Conte conosco para dar o próximo 
					passo no seu negócio. Preencha o formulário com os seus dados 
					e um integrante de nossa equipe entrará em contato para identificar 
					melhor as suas necessidades.</h4>
					<Row>
						<Col>
							<ContactForm/>
						</Col>
					</Row>					
				</Container>
			</section>
		</React.Fragment>
	);
}