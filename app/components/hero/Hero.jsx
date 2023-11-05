import Image from "next/image";
import Container from "../container";
import heroImg from "../../../public/joca_computer.png";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "../social";

const Hero = () => {
  const title = "Hello, World!";
  const text = `
  Sou professor universitário e atualmente atuo na Universidade Presbiteriana Mackenzie 
  nos cursos de Ciência da Computação, Sistemas de Informação e no projeto Apple Developer 
  Academy | Mackenzie.
  
  Tenho bacharelado em Ciência da Computação e mestre em Engenharia Elétrica e Computação 
  com ênfase em Telecomunicações.
  
  Tenho interesse e me aventuro nos mundos das Startups como empresário e mentor. 
  Sim! Eu já fali ¯\\_(ツ)_/¯
  `;
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {text}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="316"
              height="317"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Siga-me nas Redes Sociais
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <GitHub size={96} />
            <LinkedIn size={96} />
            <Twitter size={96} />
            <Facebook size={96} />
            <Instagram size={96} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
