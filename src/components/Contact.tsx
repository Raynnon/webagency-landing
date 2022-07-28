import Emergence from "./animations/Emergence";

export default function OurTeam() {
  return (
      <section id="contact">
        <Emergence>
          <h2>
            Get <span>in</span> touch
          </h2>
        </Emergence>
        <form>
            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p>
            <div>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
            </div>
        </form>
      </section>
  );
}
