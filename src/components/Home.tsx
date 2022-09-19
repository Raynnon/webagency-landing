import mobileImage from '../images/mobile.png';
import Button from './layout/Button';

export default function Home() {
  return (
    <section id="home">
      <div className="background">
        <div className="text-block">
          <p>With us you will</p>
          <p className="big-letters">SUCCEED</p>
          <p>
          We will create your website as if it was our own.
We will deliver a professional website with unique features designed specifically for your project.
          </p>
          <Button text="Read More" link="#" />
        </div>
        <div className="mobile-container">
          <img src={mobileImage} alt="mobile" className="mobile" />
        </div>
      </div>
      <div className="white-background"></div>
    </section>
  );
}
