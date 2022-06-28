import mobileImage from '../images/mobile.png';

export default function Home() {
  return (
    <section className="home">
      <div className="background">
        <div className="text-block">
          <p>With us you will</p>
          <p className="big-letters">SUCCEED</p>
          <p>
            Proactively syndicate open-source e-markets after low-risk
            high-yield synergy. Professionally simplify visionary technology.
          </p>
          <a href="#">
            <button>Read More</button>
          </a>
        </div>
      </div>

      <img src={mobileImage} alt="mobile" className="mobile" />
    </section>
  );
}
