const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let competitions = {
  'ciencias_naturais': [
  {
		"id": "3626ff1a-2820-4519-bf50-f115257d9fa6",
		"title": "Olimpíada Brasileira de Biologia (OBB)",
		"specialty": "Biologia",
		"type": "Presencial",
		"description": "Competição nacional de Biologia para estudantes do ensino médio em todo o Brasil.",
		"prize": "Medalhas de Ouro, Prata e Bronze.",
		"competition_url": "http://www.obb.org.br/"
	},
	{
		"id": "6d6940de-8858-4cdc-8f32-348407a6bbf2",
		"title": "Olimpíada Nacional de Ciências (ONC)",
		"specialty": "Ciências Naturais",
		"type": "Online",
		"description": "Competição de Ciências Naturais para estudantes do ensino médio de todo o Brasil.",
		"prize": "Medalhas e certificados.",
		"competition_url": "http://www.onciencias.org/"
	},
	{
		"id": "a2d5234d-8335-4603-94f6-19373ffe2ccf",
		"title": "Olimpíada Brasileira de Astronomia e Astronáutica (OBA)",
		"specialty": "Astronomia",
		"type": "Presencial",
		"description": "Olimpíada de Astronomia para estudantes do ensino fundamental e médio em todo o Brasil.",
		"prize": "Medalhas de Ouro, Prata e Bronze.",
		"competition_url": "http://www.oba.org.br/site/index.php"
	},
	{
		"id": "5229dd16-67e7-46a7-a379-1cda8b1378c5",
		"title": "Olimpíada Brasileira de Física (OBF)",
		"specialty": "Física",
		"type": "Presencial",
		"description": "Competição de Física para estudantes do ensino médio em todo o Brasil.",
		"prize": "Medalhas de Ouro, Prata e Bronze.",
		"competition_url": "http://www.sbfisica.org.br/v1/olimpiada/"
	},
	{
		"id": "b22c2b9e-eca1-4261-a24f-cc9d046483d4",
		"title": "Olimpíada Brasileira de Química (OBQ)",
		"specialty": "Química",
		"type": "Presencial",
		"description": "Competição de Química para estudantes do ensino médio em todo o Brasil.",
		"prize": "Medalhas de Ouro, Prata e Bronze.",
		"competition_url": "http://www.obquimica.org/"
	},
	{
		"id": "1d70b113-6d4b-45db-86d5-e395ecda72f9",
		"title": "Mostra Brasileira de Foguetes (MOBFOG)",
		"specialty": "Física e Astronomia",
		"type": "Presencial",
		"description": "Evento que envolve a construção e lançamento de foguetes, promovendo o interesse em ciências.",
		"prize": "Certificados de participação.",
		"competition_url": "http://www.oba.org.br/site/index.php/mostra-brasileira-de-foguetes"
	},
  { "id": "3c27fb6d-1a4f-41a0-a2fd-b7993ce35a51",
    "title": "Olimpíada Nacional de Ciências (ONC)",
    "specialty": "Ciências Naturais",
    "type": "Online",
    "description": "A Olimpíada Nacional de Ciências é uma competição que abrange diversas áreas das ciências naturais, incluindo biologia, química, física e astronomia. Destinada a estudantes do ensino médio, a ONC promove o estudo interdisciplinar das ciências, incentivando a investigação científica, o raciocínio lógico e a resolução de problemas complexos.",
    "prize": "Medalhas e certificados para os melhores colocados.",
    "competition_url": "https://www.onciencias.org/"
  }],
  'ciencias_sociais': [
  {
    "id": "dfe273e6-728b-4192-a5b9-b6a4c70f4fe0",
    "title": "Olimpíada Brasileira de Geografia (OBG)",
    "specialty": "Geografia",
    "type": "Presencial",
    "description": "A Olimpíada Brasileira de Geografia é uma competição nacional que avalia o conhecimento dos estudantes sobre temas relevantes de geografia física, humana e econômica. Por meio de provas teóricas e práticas, os participantes são desafiados a demonstrar sua compreensão dos processos geográficos e sua capacidade de análise e interpretação de mapas e dados geográficos.",
    "prize": "Medalhas de Ouro, Prata e Bronze, além de certificados de participação.",
    "competition_url": "https://obgeografia.com.br/"
  },
  {
    "id": "d1bde4b3-6afe-4d9c-be0d-74b86fd995b6",
    "title": "Olimpíada Brasileira de Economia (OBE)",
    "specialty": "Economia",
    "type": "Online",
    "description": "A Olimpíada Brasileira de Economia é uma competição que visa estimular o interesse dos estudantes pelo estudo da economia e suas aplicações práticas. Por meio de provas teóricas e práticas, os participantes são desafiados a aplicar conceitos econômicos para analisar problemas econômicos reais e propor soluções criativas e sustentáveis.",
    "prize": "Certificados de participação e reconhecimento para os destaques.",
    "competition_url": "https://obecon.org/"
  }],
  'humanidades': [
  {
		"id": "8b76098c-6d72-4fe7-b0db-25db9f8eb6a3",
		"title": "Olimpíada de Filosofia",
		"specialty": "Filosofia",
		"type": "Presencial",
		"description": "Competição de Filosofia para estudantes do ensino médio promovida pela Universidade Federal do Rio de Janeiro (UFRJ).",
		"prize": "Certificados de participação e reconhecimento.",
		"competition_url": "http://www.labes.fe.ufrj.br/index.php?ct_id=47&ct_chave=6b1730f88c572bc0165f32ab07230765"
	},
	{
		"id": "281fd940-ede2-44ff-8afe-00cec26a1027",
		"title": "Olimpíada de Literatura",
		"specialty": "Literatura",
		"type": "Online",
		"description": "A Olimpíada de Literatura é uma competição anual que visa promover o interesse pela leitura e pela produção literária entre estudantes do ensino médio no Brasil. Por meio de desafios envolvendo interpretação de textos, análise crítica e criação literária, os participantes têm a oportunidade de aprimorar suas habilidades literárias e explorar diferentes gêneros e estilos literários.",
		"prize": "Os participantes recebem certificados de participação.",
		"competition_url": "https://www.olimpiadadeliteratura.com.br/"
	},
	{
		"id": "4127a32b-b50b-4fd0-bca3-20f93a9d898d",
		"title": "Olimpíada de Língua Portuguesa Escrevendo o Futuro",
		"specialty": "Língua Portuguesa",
		"type": "Presencial",
		"description": "Competição de produção de textos em Língua Portuguesa para estudantes de escolas públicas.",
		"prize": "Medalhas e publicações dos melhores textos.",
		"competition_url": "https://www.escrevendoofuturo.org.br/"
	},
	{
		"id": "ae2e3ec1-c8ba-480c-bbf6-9fc85807569c",
		"title": "Olimpíada Internacional de Filosofia",
		"specialty": "Filosofia",
		"type": "Presencial",
		"description": "Competição internacional de Filosofia para estudantes do ensino médio em todo o mundo.",
		"prize": "Medalhas de Ouro, Prata e Bronze.",
		"competition_url": "http://www.internationalphilosophyolympiad.org/"
	}],
  'tecnologia': [
  {
      "id": "23ee195c-5ea6-4851-960f-162f59c6e2d7",
      "title": "Maratona de Programação da Sociedade Brasileira de Computação (SBC)",
      "specialty": "Ciência da Computação",
      "type": "Presencial",
      "description": "A Maratona de Programação da SBC é uma competição de programação competitiva voltada para estudantes universitários de cursos relacionados à computação. Os participantes são desafiados a resolver problemas complexos de algoritmos em um período limitado de tempo.",
      "prize": "Troféus e certificados.",
      "competition_url": "https://maratona.ime.usp.br/"
    },
    {
      "id": "1399db6d-7b49-4a27-a88a-5782f3395cb5",
      "title": "Olimpíada Brasileira de Robótica (OBR)",
      "specialty": "Robótica",
      "type": "Presencial",
      "description": "A Olimpíada Brasileira de Robótica é uma competição anual que visa estimular o estudo da robótica e o desenvolvimento de habilidades técnicas e criativas entre estudantes do ensino fundamental e médio.",
      "prize": "Medalhas e certificados.",
      "competition_url": "http://www.obr.org.br/"
    },
    {
      "id": "86d443f2-68ad-4f3b-a8bd-4e6deceb64a9",
      "title": "Desafio Nacional Acadêmico (DNA)",
      "specialty": "Diversas áreas acadêmicas",
      "type": "Online",
      "description": "O Desafio Nacional Acadêmico (DNA) é uma competição que abrange diversas áreas do conhecimento, incluindo Engenharia, Tecnologia da Informação, Ciência da Computação, Administração, entre outras. Os participantes são desafiados a resolver problemas complexos e aplicar conhecimentos teóricos em situações práticas, estimulando o aprendizado e a inovação.",
      "prize": "Prêmios em dinheiro, bolsas de estudo e reconhecimento acadêmico.",
      "competition_url": "https://www.desafionacional.com.br/dna_em/index.html"
    },
    {
      "id": "89c9c20a-9368-48d1-86f6-50edf0a1720e",
      "title": "Imagine Cup",
      "specialty": "Tecnologia da Informação",
      "type": "Online",
      "description": "A Imagine Cup é uma competição global promovida pela Microsoft que desafia estudantes a criar soluções inovadoras usando tecnologia, com o objetivo de abordar desafios sociais e ambientais.",
      "prize": "Prêmios em dinheiro, mentoria e suporte técnico.",
      "competition_url": "https://imaginecup.microsoft.com/"
  }],
  'matematica': [
  {
      "id": "06c2cace-869f-4a42-8a3f-50be3977900d",
      "title": "Olimpíada Brasileira de Matemática (OBM)",
      "specialty": "Matemática",
      "type": "Presencial",
      "description": "A OBM é uma competição anual que tem como objetivo estimular o estudo da Matemática e identificar jovens talentosos nessa área. Realizada em várias etapas, a OBM abrange questões de diferentes níveis de dificuldade, desafiando os participantes a resolverem problemas matemáticos criativos e complexos.",
      "prize": "Os participantes recebem medalhas de ouro, prata e bronze, além de certificados de participação.",
      "competition_url": "https://www.obm.org.br/"
    },
    {
      "id": "af65d9ed-6c31-4217-a82f-d76b10c14836",
      "title": "Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP)",
      "specialty": "Matemática",
      "type": "Presencial",
      "description": "A OBMEP é uma competição nacional que tem como objetivo estimular o estudo da Matemática entre alunos de escolas públicas. Com provas de múltipla escolha e questões dissertativas, a OBMEP busca identificar e premiar jovens talentosos na área da Matemática.",
      "prize": "Os participantes recebem medalhas de ouro, prata e bronze, além de bolsas de estudo.",
      "competition_url": "https://www.obmep.org.br/"
    },
    {
      "id": "6811ee60-045c-4a93-bbc9-86ddfc323ee8",
      "title": "Olimpíada Canguru de Matemática",
      "specialty": "Matemática",
      "type": "Presencial",
      "description": "A Olimpíada Canguru de Matemática é uma competição internacional que tem como objetivo estimular o raciocínio lógico e o interesse pela Matemática entre estudantes de várias idades. Com questões de múltipla escolha, a competição desafia os participantes a resolverem problemas matemáticos de forma criativa.",
      "prize": "Os participantes recebem certificados de participação.",
      "competition_url": "https://www.cangurudematematicabrasil.com.br/"
    },
    {
      "id": "461aff3c-9c07-4f2d-b0b3-7fcc2cdda57b",
      "title": "Olimpíada de Matemática do Estado de São Paulo (OMESP)",
      "specialty": "Matemática",
      "type": "Presencial",
      "description": "A OMESP é uma competição anual que tem como objetivo promover o estudo da Matemática entre alunos do estado de São Paulo. Com provas desafiadoras, a OMESP busca identificar e premiar os melhores estudantes de Matemática da região.",
      "prize": "Os participantes recebem medalhas de ouro, prata e bronze, além de certificados de participação.",
      "competition_url": "https://olimpiadassp.educacao.sp.gov.br/omasp/"
    },
    {
      "id": "07a5eacd-dda3-4117-a433-4ece1b91ef5a",
      "title": "Olimpíada de Matemática da Universidade de São Paulo (OMU-SP)",
      "specialty": "Matemática",
      "type": "Presencial",
      "description": "A OMU-SP é uma competição anual promovida pela Universidade de São Paulo que tem como objetivo estimular o estudo da Matemática entre alunos do ensino médio. Com provas teóricas e práticas, a competição desafia os participantes a resolverem problemas matemáticos complexos e criativos.",
      "prize": "Os participantes recebem medalhas de ouro, prata e bronze, além de certificados de participação.",
      "competition_url": "https://www.olimpiada.ime.unicamp.br/"
  }],
  'artes': [
  {
      "id": "deb31d6f-8253-461d-89fd-354eefb6c150",
      "title": "Festival de Cannes",
      "specialty": "Cinema e Audiovisual",
      "type": "Presencial",
      "description": "Um dos festivais de cinema mais renomados do mundo, realizado anualmente em Cannes, França. O evento apresenta uma seleção diversificada de filmes de diversos gêneros e países, incluindo competições de longas-metragens, curtas-metragens e documentários.",
      "prize": "Prêmios prestigiados, como a Palma de Ouro para o melhor filme.",
      "competition_url": "https://www.festival-cannes.com/"
    },
    {
      "id": "e51fec5c-642f-4f5a-ae1c-5b95c1d17e95",
      "title": "Festival de Teatro de Edimburgo",
      "specialty": "Teatro",
      "type": "Presencial",
      "description": "Um dos maiores festivais de teatro do mundo, realizado anualmente em Edimburgo, Escócia. O evento apresenta uma ampla variedade de produções teatrais, incluindo peças de teatro tradicional, teatro experimental, comédias, dramas e muito mais.",
      "prize": "Oportunidades de exposição, networking e reconhecimento para os participantes.",
      "competition_url": "https://www.edfringe.com/"
    },
    {
      "id": "7fd94191-ba30-43ea-9a3c-405e2bf78bf4",
      "title": "Bolshoi International Ballet Competition",
      "specialty": "Dança",
      "type": "Presencial",
      "description": "Uma das competições de dança clássica mais prestigiadas do mundo, realizada pelo famoso Teatro Bolshoi em Moscou, Rússia. O evento destaca jovens talentos da dança clássica, oferecendo oportunidades para se apresentarem em um palco internacional e receberem reconhecimento por suas habilidades.",
      "prize": "Medalhas, bolsas de estudo e contratos com companhias de dança.",
      "competition_url": "https://www.bolshoi.ru/en/"
    },
    {
      "id": "39bdfac5-7051-4e62-904c-bc7f9e577cf0",
      "title": "Bienal Internacional de Dança de Lyon",
      "specialty": "Dança",
      "type": "Presencial",
      "description": "Um dos maiores eventos de dança contemporânea do mundo, realizado em Lyon, França. A Bienal Internacional de Dança de Lyon apresenta uma programação diversificada de performances, workshops, debates e eventos relacionados à dança, destacando talentos emergentes e estabelecidos na área.",
      "prize": "Reconhecimento internacional e oportunidades de colaboração na indústria da dança.",
      "competition_url": "https://www.biennaledelyon.com/"
    },
    {
      "id": "0eb99447-8637-48a3-a52c-3ff1a56778d2",
      "title": "Festival de Cannes - Semaine de la Critique",
      "specialty": "Cinema e Audiovisual",
      "type": "Presencial",
      "description": "Uma seção paralela do Festival de Cannes dedicada a descobrir novos talentos no cinema. A Semana da Crítica destaca filmes de diretores estreantes e oferece uma plataforma para que cineastas emergentes exibam seu trabalho e recebam reconhecimento internacional.",
      "prize": "Prêmios especiais e oportunidades de distribuição internacional.",
      "competition_url": "https://www.semainedelacritique.com/"
    },
    {
      "id": "d79969b7-c3fd-425a-9f24-12469be0ec08",
      "title": "Bienal de Arte Contemporânea de São Paulo",
      "specialty": "Artes Visuais",
      "type": "Presencial",
      "description": "Uma das mais importantes exposições de arte contemporânea da América Latina, realizada a cada dois anos em São Paulo, Brasil. A Bienal de São Paulo apresenta uma ampla variedade de obras de artistas nacionais e internacionais, abrangendo diversas mídias e tendências artísticas.",
      "prize": "Reconhecimento internacional e oportunidades de exposição para os artistas selecionados.",
      "competition_url": "https://www.bienal.org.br/"
  }],
  'saude': [
  {
      "id": "81e19f40-311a-4df1-a1ed-34e69db4d81f",
      "title": "Olimpíada Brasileira de Saúde e Meio Ambiente",
      "specialty": "Saúde Pública",
      "type": "Online",
      "description": "A Olimpíada Brasileira de Saúde e Meio Ambiente é uma competição nacional organizada pela Fiocruz, destinada a estudantes do ensino médio. Seu objetivo é promover a reflexão e o debate sobre temas relacionados à saúde pública e ao meio ambiente, incentivando a pesquisa e o desenvolvimento de soluções para problemas nessas áreas. Os participantes são desafiados a criar projetos e apresentá-los em diversas modalidades, como produção audiovisual, relatos de experiência, produção textual e fotografia.",
      "prize": "Os participantes recebem certificados de participação e prêmios simbólicos.",
      "competition_url": "https://olimpiada.fiocruz.br/"
    },
    {
      "id": "ad572f32-b97c-4a0f-b9bd-1d3a1b7a52ab",
      "title": "Olimpíada Brasileira de Medicina (OBM)",
      "specialty": "Medicina",
      "type": "Presencial",
      "description": "A OBM é uma competição nacional voltada para estudantes de medicina, com o objetivo de avaliar conhecimentos teóricos e habilidades práticas relacionadas à prática médica. Por meio de provas teóricas, práticas e estudos de casos clínicos, os participantes têm a oportunidade de aprimorar suas habilidades clínicas, de raciocínio diagnóstico e de tomada de decisões clínicas.",
      "prize": "Os participantes recebem certificados de participação e prêmios simbólicos.",
      "competition_url": "https://olimpiadademedicina.org/"
  }],
'ciencias_da_terra': [
{
      "id": "6f630234-cfd6-45ef-88f4-82c25ba197e1",
      "title": "Olimpíada do Oceano",
      "specialty": "Oceanografia",
      "type": "Online",
      "description": "A Olimpíada do Oceano é uma competição online que visa promover o conhecimento e a conscientização sobre os oceanos e seus ecossistemas. Os participantes são desafiados com questões teóricas e práticas relacionadas à oceanografia, biologia marinha, conservação marinha e impactos ambientais.",
      "prize": "Certificados de participação e reconhecimento para os destaques.",
      "competition_url": "https://olimpiada.maredeciencia.eco.br/"
  }],
  'empreendedorismo': [
  {
      "id": "12690ec6-d9e4-4a44-b013-278117c13399",
      "title": "Desafio Liga Jovem",
      "specialty": "Empreendedorismo e Inovação",
      "type": "Online",
      "description": "O Desafio Liga Jovem é uma competição promovida pelo SEBRAE que tem como objetivo premiar projetos inovadores desenvolvidos por estudantes do ensino médio e técnico. Os participantes são desafiados a criar soluções criativas e viáveis para problemas reais, estimulando o empreendedorismo e a cultura da inovação.",
      "prize": "Prêmios em dinheiro e reconhecimento.",
      "competition_url": "https://agenciasebrae.com.br/cultura-empreendedora/desafio-liga-jovem-abre-inscricoes-para-premiar-projetos-inovadores-de-estudantes/"
  }]
};

app.use((req, res, next) => {
  console.log(`Solicitação recebida: ${req.method} ${req.url}`);
  next();
});

app.get('/competitions', (req, res) => {
  const descricao = `
    Bem-vindo a nossa api de competições educacionais! Aqui, você pode encontrar uma variedade de competições em diversas áreas do conhecimento. Abaixo, detalhamos como acessar as informações e interagir com nosso serviço:

    1. Acessando Competições Existentes (GET):
       - Para visualizar as competições existentes em uma determinada área, você pode acessar o seguinte link no seu navegador: http://<Endereço Ip>:3001/competitions/nome_da_area. Substitua nome_da_area pela área específica em que deseja visualizar as competições, como ciencias_naturais, ciencias_sociais, tecnologia, entre outras. Isso retornará uma lista de todas as competições disponíveis na área especificada.

    2. Adicionando uma Nova Competição (POST):
       - Para adicionar uma nova competição, você precisará enviar uma solicitação POST para o endpoint /competitions/nome_da_area, onde nome_da_area é a área à qual deseja adicionar a competição. Certifique-se de incluir as informações da competição no corpo da solicitação, seguindo o formato JSON esperado.

    3. Atualizando uma Competição Existente (PUT):
       - Se desejar atualizar as informações de uma competição existente, envie uma solicitação PUT para o endpoint /competitions/nome_da_area/id_da_competicao, substituindo nome_da_area pela área relevante e id_da_competicao pelo ID único da competição que deseja atualizar. No corpo da solicitação, inclua as informações atualizadas da competição.

    4. Excluindo uma Competição (DELETE):
       - Para excluir uma competição existente, envie uma solicitação DELETE para o endpoint /competitions/nome_da_area/id_da_competicao, onde nome_da_area é a área relevante e id_da_competicao é o ID único da competição que deseja excluir. Certifique-se de que a competição a ser excluída esteja corretamente identificada.

    Esperamos que este guia facilite a interação com nosso serviço de competições educacionais. Se precisar de mais assistência, não hesite em entrar em contato conosco. Boa exploração!
  `;
  res.send(descricao);
});
 

app.get('/competitions/:area', (req, res) => {
  const { area } = req.params;
  const areaCompetitions = competitions[area];
  if (!areaCompetitions) {
    res.status(404).send('Área não encontrada');
  } else {
    res.json(areaCompetitions);
  }
});

app.post('/competitions/:area', (req, res) => {
  const { area } = req.params;
  const { title, specialty, type, description, prize, competition_url } = req.body;

  if (!title || !specialty || !type || !description || !prize || !competition_url) {
    res.status(400).send('Todos os campos são obrigatórios');
  } else {
    const newCompetition = {
      id: uuidv4(),
      title,
      specialty,
      type,
      description,
      prize,
      competition_url
    };
    if (!competitions[area]) {
      res.status(404).send('Área não encontrada');
    } else {
      competitions[area].push(newCompetition);
      res.status(201).send('Competição adicionada com sucesso');
    }
  }
});

app.put('/competitions/:area/:id', (req, res) => {
  const { area, id } = req.params;
  const { title, specialty, type, description, prize, competition_url } = req.body;
 
  if (!title || !specialty || !type || !description || !prize || !competition_url) {
    res.status(400).send('Todos os campos são obrigatórios');
  } else {
    const competitionIndex = competitions[area].findIndex(comp => comp.id === id);
    if (competitionIndex === -1) {
      res.status(404).send('Competição não encontrada');
    } else {
      competitions[area][competitionIndex] = {
        id,
        title,
        specialty,
        type,
        description,
        prize,
        competition_url
      };
      res.send('Competição atualizada com sucesso');
    }
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});