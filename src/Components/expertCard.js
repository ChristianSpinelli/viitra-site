import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ExpertCard(props){
	return(
		<React.Fragment>
			<Card bg='ligth' border='dark'>
				<Card.Title>{props.title}</Card.Title>
				<Card.Body>{props.body}</Card.Body>
				<Card.Img variant='bottom' src={props.image} alt='Card-Image'/>
			</Card>
		</React.Fragment>
	)
}