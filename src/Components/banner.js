import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function Banner(){
	return(
		<React.Fragment>
			<Jumbotron  fluid>
				<Container>
					<h1>Soluções Inovadoras</h1>
					<h4>para negócios de alto impacto</h4>
				</Container>
			</Jumbotron>
		</React.Fragment>
	);
}