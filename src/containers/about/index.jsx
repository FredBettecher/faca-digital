import { AboutCard } from "../../components/about-cards/index";

export default function AboutUs() {
  const testimonials = [
    {
      quote:
        "Criar designs é mais do que estética; é traduzir ideias em impactos visuais que impulsionam resultados.",
      name: "Roberto Santos",
      designation: "CEO & Designer Gráfico",
      src: "/about-images/person01.jpg",
    },
    {
      quote:
        "A publicidade eficaz é aquela que transforma marcas em histórias que as pessoas querem compartilhar.",
      name: "Caroline Oliveira",
      designation: "Publicitária",
      src: "/about-images/person02.jpg",
    },
    {
      quote:
        "Construir sites é como criar pontes: conectamos ideias ao mundo digital com funcionalidade e inovação.",
      name: "Frederico Bettecher",
      designation: "Desenvolvedor Web",
      src: "/about-images/person03.png",
    },
    {
      quote:
        "A ilustração não é apenas desenhar; é dar vida a conceitos e emoções por meio de traços e cores.",
      name: "Byanca Ribeiro",
      designation: "Designer Ilustradora",
      src: "/about-images/person04.png",
    },
    {
      quote:
        "Uma marca forte não se constrói apenas com um logotipo, mas com identidade e significado que ressoam com o público.",
      name: "Fernando Zani",
      designation: "Designer de Marcas",
      src: "/about-images/person05.png",
    },
  ];

  return (
    <main id="about" className="p-4 md:p-6 flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-8 uppercase">Sobre Nós</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
        Fundada em 2015, a Faça Digital nasceu da paixão por conectar pessoas e marcas no universo digital. Desde então, temos crescido constantemente, ajudando empresas de todos os tamanhos a alcançarem seu potencial máximo.
      </p>
      <h2 className="text-2xl font-bold text-center mt-8">Nossa Equipe</h2>
      <AboutCard testimonials={testimonials} />
    </main>
  );
}
