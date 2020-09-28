import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function SideFooter(){
	return(
		<React.Fragment>
			<Navbar expand='md' sticky='bottom'>
				<Container>
					<Navbar.Text className='sideFooter'>© Todos os direitos reservados</Navbar.Text>
					<Navbar.Text className='sideFooter'>Powered by Viitra</Navbar.Text>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}