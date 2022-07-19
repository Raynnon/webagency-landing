import florianImage from '../images/florian.jpeg';

interface Team {
  name: string;
  role: string;
  image: string;
  description: string;
}

const team: Team[] = [
  {
    name: "Emilia Noah",
    role: "Front-End Developer",
    image: florianImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores."
  },
  {
    name: "Emilia Noah",
    role: "Front-End Developer",
    image: florianImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores."
  },
  {
    name: "Emilia Noah",
    role: "Front-End Developer",
    image: florianImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores."
  },
  {
    name: "Emilia Noah",
    role: "Front-End Developer",
    image: florianImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores."
  }
];

export default function OurTeam() {
  return (
    <section id="our-team">
      <p>Test</p>
    </section>
  );
}
