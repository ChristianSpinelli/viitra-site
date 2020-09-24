import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function ContactForm(){
	return(
		<React.Fragment>
			<Form>
				<Form.Group controlId='name'> 
					<Form.Control required type='text' placeholder='NOME*:'/>
				</Form.Group>
				<Form.Group controlId='email'> 
					<Form.Control required type='email' placeholder='EMAIL*:'/>
				</Form.Group>
				<Form.Group controlId='telephone'> 
					<Form.Control type='number' placeholder='Telefone:'/>
				</Form.Group>
				<Form.Group controlId='subject'> 
					<Form.Control required type='text' placeholder='ASSUNTO*:'/>
				</Form.Group>
				<Form.Group controlId='message'> 
					<Form.Control required as='textarea' rows='5' placeholder='MENSAGEM*:'/>
				</Form.Group>
				<Button variant="primary" type="submit">Enviar</Button>
			</Form>
		</React.Fragment>
	);
}