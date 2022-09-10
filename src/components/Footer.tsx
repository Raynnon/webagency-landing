import Button from './layout/Button';
import Section from './layout/Section';
import logo from '../images/webs-go-logo.png';
import Screenshots from './Screenshots';

export default function Footer() {
  return (
    <footer>
      <Section background="dark">
        <>
          <form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <Button text="Subscribe" color={true} />
          </form>
          <div className="footer-content">
            <div className="content-col">
              <a className="logo-block" href="#">
                <img
                  className="logo"
                  src={logo}
                  alt="logo-web-s-go"
                  width={40}
                  height={40}
                />
                <p>Web's Go</p>
              </a>

              <p className="footer-description">
                Sed pottitor lects nibh. Viamus magna justo, lacinia eget
                consectetur sed, convallis at tellus. Curabitur aliquet quam id
                dui posuere blandit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="content-col">
              <h3>Quick Links</h3>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Screenshots</a>
              <a href="#">Team</a>
              <a href="#">Contact</a>
            </div>
            <div className="content-col">
              <h3>Social Media</h3>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Features</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
            <div className="content-col">
              <h3>Quick Contact</h3>
              <p>Phone : +2 012 345 6789</p>
              <p>Email : info@yourcompany.com</p>
              <p>Address : Rambla de Catalunya, 50, Barcelona, España</p>
            </div>
          </div>
        </>
      </Section>
      <div id="subfooter">
        <p>All rights reserved © MK, 2020</p>
        <div>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
