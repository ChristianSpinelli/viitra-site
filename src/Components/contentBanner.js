import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ContentBanner(props){
	return(
		<React.Fragment>
			<section class='content-banner'>
				<h1>{props.title}</h1>
				<Card>				
					<Button variant='primary'>Entre em contato!</Button>
				</Card>
			</section>
		</React.Fragment>
	);
}