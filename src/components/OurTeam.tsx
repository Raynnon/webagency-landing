import florianImage from '../images/florian.jpeg';
import { Parallax } from 'react-parallax';
import background from '../images/gray-bg.jpg';
import Emergence from './animations/Emergence';

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
    <Parallax bgImage={background} strength={400}>
      <section id="our-team">
        <Emergence>
          <h2>
            Our <span>Team</span>
          </h2>
        </Emergence>
        <div className="cards">
        {team.map((member, index) => (
          <><div className="card" key={index}>
          <img src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <p className="role">{member.role}</p>
          <p>{member.description}</p>
          <div className="social-networks"></div>
        </div>
        
        </>
          
        ))}
        </div>
      </section>
    </Parallax>
    
  );
}
