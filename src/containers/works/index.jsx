import ImageCarousel from "@/components/works-carousel";

const imagesA = [
  '/works-images/01.jpg',
  '/works-images/01.jpg',
  '/works-images/01.jpg',
  '/works-images/01.jpg',
  '/works-images/01.jpg',
  '/works-images/01.jpg',
];

export default function Woks() {
  return (
    <main id="works" className="container mx-auto p-4 md:p-6">
      <h1 className="uppercase text-4xl font-bold text-center mb-8">nossos trabalhos</h1>
      <ImageCarousel images={imagesA} reverse={false} />

      <h2 className="text-2xl font-bold text-center my-8">Transformando Ideias em Realidade Digital</h2>
      <p className="text-xl text-center text-muted-foreground mb-8 max-w-5xl mx-auto">
        Na Faça Digital, cada projeto é uma oportunidade de inovar e superar expectativas. Nosso portfólio diversificado reflete nossa paixão por criar soluções digitais impactantes que impulsionam o sucesso de nossos clientes.
      </p>
      <ImageCarousel images={imagesA} reverse={true} />
    </main>
  );
}
