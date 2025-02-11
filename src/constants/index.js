import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/TKPortfolio.jpg";
import project4 from "../assets/projects/project-4.jpg";
import desenvolvimento from "../assets/projects/desenvolvimento.jpg";


export const HERO_CONTENT = `Olá! Sou um desenvolvedor full stack apaixonado por criar experiências digitais incríveis. Combinando tecnologia e design, desenvolvo aplicações web robustas, escaláveis e intuitivas. Tenho experiência com React, Angular, Node.js, JavaScript (ES6), TypeScript, MySQL, PostgreSQL e MongoDB, além de um olhar apurado para UI/UX, utilizando Figma, Photoshop e Illustrator.`;

export const ABOUT_TEXT = `Meu olhar vai além do código. Antes de mergulhar no desenvolvimento full stack, atuei como Freelancer UI Designer, criando interfaces modernas e intuitivas com Figma, Adobe Photoshop e Illustrator. Também trabalhei como Analista de Cadastros e fui promovido a Codificador de Dados, onde liderei a gestão e organização de informações brutas para sistemas internos, conciliando essa experiência com o desenvolvimento frontend. Hoje, meu foco está em unir design e tecnologia para criar produtos digitais que sejam bonitos, funcionais e impactantes. Se você busca um profissional que valoriza tanto a experiência do usuário quanto a eficiência do código, vamos conversar!`;

export const EXPERIENCES = [
  {
    year: "2021 - o momento",
    role: "Desenvolvedor Front End Freelancer",
    company: "Fiverr",
    description: `Tenho experiência no desenvolvimento de aplicações web, atuando com React, Angular, JavaScript, TypeScript, HTML, CSS, PostgreSQL e MongoDB. Além de criar interfaces funcionais e bem estruturadas, sempre busco otimizar desempenho e usabilidade. Também tenho conhecimento no design de interfaces. Minha abordagem prioriza código limpo, boas práticas e a entrega de produtos de alta qualidade.`,
    technologies: ["React", "Angular", "Javascript", "Typescript", "Banco de Dados"],
  },
  {
    year: "2023 - 2024",
    role: "Analista de Cadastro",
    company: "CH Master Data",
    description: `Trabalhei em estreita colaboração com desenvolvedores, auditores e gestores de dados brutos para implementar organização e padronização na grande quantidade de dados inseridos no sistema da empresa.`,
    technologies: ["WebForMat", "Banco de Dados"],
  },
  {
    year: "2021 - 2023",
    role: "UX / UI Designer Freelancer",
    company: "Fiverr",
    description: `Contribui no desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript, Figma, Adobe Photoshop e Illustrator. Implementei soluções visuais usando Figma. Trabalhei no desenvolvimento de protótipos navegáveis ​​em estreita colaboração com gerentes de produto, sempre priorizando desempenho, estética, qualidade e profissionalismo.`,
    technologies: ["HTML", "CSS", "Javascript", "Figma"],
  },
  {
    year: "2022 - 2022",
    role: "Estágio Técnico em Eletrônica",
    company: "JW Eletrônica",
    description: `Trabalhei auxiliando o Técnico em Eletrônica na manutenção e reparos de placas eletrônicas, peças elétricas, eletroeletrônicos e eletrodomésticos em geral, realizei gerenciamento de manutenção, testes manuais, manutenção preventiva e suporte técnico para clientes vinculados à empresa`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Zillion",
    image: project1,
    description:
      " Projeto feito baseado em uma plataforma de streaming, sendo bem intuitivo com estilizações bem estruturadas",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    url:"https://www.figma.com/proto/W6aPyMlt16hfRH2kIbgVI2/Projeto-Zillion?page-id=201%3A5592&node-id=201-5593&starting-point-node-id=201%3A5593&t=0JtGwqRYzs0GpT5f-1",
  },
  {
    title: "App-Banking",
    image: project2,
    description:
      "Projeto Redesign App-Banking criado para suprir as necessidades de um visual moderno e mais intuitivo",
    technologies: ["Figma", "Photoshop"],
    url:"https://www.figma.com/proto/hvuCMBJ4mcvXgEKcqvF1xL/Redesign-App-Bank?page-id=49%3A488&node-id=49-489&viewport=164%2C-138%2C0.19&t=rmGxkb6ED4zDrBZ2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A489",
  },
  {
    title: "Portfolio TK Dev",
    image: project3,
    description:
      "Um site de portfólio pessoal, feito com profissionalismo, utilizando tecnologias baseadas em desenvolvimento web",
    technologies: ["React", "TailwindCss", "Framer Motion"],
    url:"#",
  },
  {
    title: "E-commerce Artto (Em Desenvolvimento)",
    image: desenvolvimento,
    description:
      "Plataforma de e-commerce em desenvolvimento, com visual moderno, minimalista e profissional, com foco na venda de roupas Streetwear",
    technologies: ["React", "NodeJS", "TypeScript", "Express", "MongoDB"],
    url:"#",
  },
];

export const CONTACT = {
  address: "Rua Francisco Pereira da Silva, 210",
  phoneNo: "+55 21 96998-8580 ",
  email: "talesknadev@gmail.com",
};
