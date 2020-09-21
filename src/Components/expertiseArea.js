import React from 'react';
import Container from 'react-bootstrap/Container';
import ExpertCard from './expertCard';
import CardDeck from 'react-bootstrap/CardDeck';

export default function ExpertiseArea(){
	return(
		<React.Fragment>
			<section class='expertise-areas'>
					<Container>
						<h3>Áreas de atuação</h3>
						<CardDeck>
							<ExpertCard 
								title='Soluções Educacionais' 
								body='Nossas soluções de aprendizagem 
								são otimizadas para os objetivos estratégicos do seu negócio. 
								Além de fornecer plataforma e aplicativos, também produzimos 
								diversos tipos de mídia como ebooks, vídeos, infográficos, 
								questões, etc; todos adequados ao contexto e com o objetivo 
								de tornar o processo de aprendizagem mais leve e mais dinâmico.'
								image="solutions-edu.jpg"/>
								<ExpertCard 
								title='Gestão de Estágios' 
								body='A solução de estágios proporciona a conexão entre estudante, 
								instituição de ensino e empresas, visando a inclusão e acompanhamento 
								do aluno no mercado de trabalho através de conteúdos preparatórios, 
								captação e divulgação de oportunidades, gerenciamento de estágios e 
								muito mais.'
								image='solutions-est.jpg'/>
								<ExpertCard 
								title='Comunicação Institucional' 
								body='Nossa plataforma veicula notícias através Smartphones (Android e iOS)
								 e SmartTVs para integrantes internos e externos à instituição. A solução 
								 possui integração automática com portais de conteúdos e proporciona
								 interação entre os usuários.'
								 image="solutions-com.jpg"/>
						</CardDeck>
						<CardDeck>
							<ExpertCard 
								title='Visualização de Dados' 
								body='Possuímos equipe especializada em inteligência e análise de negócios
								 (Business Intelligence) para desenvolvimento de painéis de visualizações 
								 integrados com as bases de dados da sua organização.'
								 image='solutions-vis.jpg'/>
								<ExpertCard 
								title='Projetos Personalizados' 
								body='Deseja adquirir um projeto personalizado para a sua empresa? Confira 
								as diversas vantagens que nosso desenvolvimento customizado pode trazer 
								para o seu negócio.'
								image='solutions-pro.jpg'/>
						</CardDeck>
					</Container>
				</section>
		</React.Fragment>
	);

}