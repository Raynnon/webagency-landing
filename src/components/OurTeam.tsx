import florianImage from '../images/florian.jpeg';

import Section from '../components/layout/Section';

import facebookIcon from '../images/social-networks/facebook-icon.svg';
import instagramIcon from '../images/social-networks/instagram-icon.svg';
import linkedinIcon from '../images/social-networks/linkedin-icon.svg';
import twitterIcon from '../images/social-networks/twitter-icon.svg';

interface Team {
  name: string;
  role: string;
  image: string;
  description: string;
}

const team: Team[] = [
  {
    name: 'Emilia Noah',
    role: 'Front-End Developer',
    image: florianImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.'
  },
  {
    name: 'Emilia Noah',
    role: 'Front-End Developer',
    image: florianImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.'
  },
  {
    name: 'Emilia Noah',
    role: 'Front-End Developer',
    image: florianImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.'
  },
  {
    name: 'Emilia Noah',
    role: 'Front-End Developer',
    image: florianImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.'
  }
];

export default function OurTeam() {
  return (
    <Section id="team" title={['Our', 'Team']} background="parallax">
      <div className="cards">
        {team.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-infos" key={index}>
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <p>{member.description}</p>
            </div>
            <div className="social-networks">
              <a href="#">
                <img src={facebookIcon} alt="facebook-icon" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="facebook-icon" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="facebook-icon" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="facebook-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
