import Section from '../components/layout/Section';
import Button from './layout/Button';

export default function OurTeam() {
  return (
    <>
      <Section title={['Get', 'in touch']} background="light">
        <>
          <p>
            Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor coli incidit labore lorem ipsum amet madolor sit
            amet.
          </p>
          <form>
            <div className="details">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter Your Subject"
              />
            </div>
            <textarea
              name="textarea"
              rows={4}
              cols={50}
              placeholder="Enter Your Message"
            />
          </form>

          <Button text="Send message" color={true} />
        </>
      </Section>
    </>
  );
}
