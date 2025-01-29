import Email from "@/components/email";
import Link from "next/link";
import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";

export default function Contact() {
  return (
    <main id="contact" className="container mx-auto p-4 md:p-6">
      <h1 className="text-4xl font-bold text-center mb-8 uppercase">Entre em Contato</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
        Estamos prontos para te ouvir e ajudar sua marca a conquistar espaço nas redes.
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <Email />

        <div className="flex flex-col w-full">
          <div>
            <h2 className="text-2xl">Ou entre em contato pelos <span className="text-that-green">canais</span> abaixo</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Link href={'https://www.instagram.com/facadigital/'} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center w-fit">
                <RiInstagramFill className="w-12 h-12" />
                <p className="text-lg text-that-green">Instagram</p>
              </Link>

              <Link href={'https://www.facebook.com/facadigital/'} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center w-fit">
                <RiFacebookBoxFill className="w-12 h-12" />
                <p className="text-lg text-that-green">Facebook</p>
              </Link>

              <Link href={'https://wa.me/+5521987691234'} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center w-fit">
                <FaSquareWhatsapp className="w-12 h-12" />
                <p className="text-lg text-that-green">(21) 98769-1234</p>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mt-12">Ou ainda, você pode nos escontrar no seguinte <span className="text-that-green">endereço</span></h2>
            <div className="flex items-center gap-2 my-4">
              <FaLocationDot className="w-6 h-6" />
              <p className="text-lg text-that-green">R. Dona Maria Emiliana - Várzea Alegre, Guapimirim - RJ</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6191.702085892772!2d-43.02401478751684!3d-22.66839635693847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a3dfdee10e6f%3A0x1913bbf062ec3be0!2sFa%C3%A7a%20Digital!5e0!3m2!1spt-BR!2sbr!4v1736817899003!5m2!1spt-BR!2sbr"
              className="w-full h-48 rounded-xl"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
