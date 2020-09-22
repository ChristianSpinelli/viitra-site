import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function TestmonialsCarousel(){
	 const [index, setIndex] = useState(0);
	 const handleSelect = (selectedIndex, e) => {
    	setIndex(selectedIndex);
  	};
	return(
		<React.Fragment>
			<Carousel pause='hover' activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<Card>
						<Container>
							<Card.Body>
								<Card.Text>Através da Pró-reitoria de Comunicação e Tecnologia da 
								Informação da UFPE, a Viitra desenvolveu produtos que revolucionaram 
								a comunicação interna da nossa instituição. O Portal do Estudante, o 
								UFPE Mobile e o Sinalização Digital agilizaram e facilitaram o acesso 
								à informação dentro do Campus. Recentemente, a empresa padronizou e 
								automatizou todo processo de controle de estágios, por meio do Sistema 
								de Estágios. Participei diretamente do desenvolvimento desses produtos 
								e posso atestar a competência e profissionalismo com que a Viitra desenvolveu 
								e mantém serviços de enorme relevância para toda comunidade da UFPE.</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Card.Title>Ricardo Massa</Card.Title>
								<Card.Subtitle>Professor, UFPE</Card.Subtitle>
							</Card.Footer>
						</Container>
					</Card>
				</Carousel.Item>
				<Carousel.Item>
					<Card>
						<Container>
							<Card.Body>
								<Card.Text>A equipe da Viitra atuou com muita presteza e empatia, 
								mobilizando pessoas competentes para ouvir nossa demanda complexa 
								e executando um trabalho com segurança, pontualidade e cortesia ao 
								longo de todo o processo. Parabéns a todos e muito obrigado!</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Card.Title>Alex Gomes</Card.Title>
								<Card.Subtitle>Coordenador, Projeto Samsung</Card.Subtitle>
							</Card.Footer>
						</Container>
					</Card>
				</Carousel.Item>
			</Carousel>
		</React.Fragment>
	);
}