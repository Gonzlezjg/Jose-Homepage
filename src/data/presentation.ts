type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: '15gonzalez.j.p@gmail.com',
  title: 'Hola, Soy José Puerta 👋',
  description:
    'Bienvenido, soy un programador FullStack con 3 años de experiencia. Actualmente trabajo con *NextJS/Nodejs/Express/Typescript/AWS*. Ademas de programar, me gustan los viajes en moto y practicar *Kotlin* en mis tiempos libres.',
  socials: [
    {
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in/jose-puerta-719b07111/',
    },
    {
      label: 'Github',
      link: 'https://github.com/Gonzlezjg',
    },
  ],
};

export default presentation;
